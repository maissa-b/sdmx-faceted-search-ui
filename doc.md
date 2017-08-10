# SDMX Faceted Search (aka sfs)
## Server
### target
`sfs` is a JSON http server that offer faceted search on SDMX dataflows. Search is enable on a configurable list of fields and faceted search on 2 types of facets: `dimension` and dataflow's `category`. `sfs` use [solr's dynamic fields](https://cwiki.apache.org/confluence/display/solr/Dynamic+Fields) to index dataflows and an internal `schema` to request searches on abstract field names (`name` and not `name_en_s`). Localization is managed by the schema.
### Stack
`sfs` server is a [NodeJS](https://nodejs.org/en/) server. [ExpressJS](http://expressjs.com/) and [evtX](https://www.npmjs.com/package/evtx) libraries are used to manage http requests and define services around solr's search engine.
![sfs stack](./docs/sfs.png)
### Install
Install [nodejs](https://nodejs.org/en/)
Clone repository `sdmx-facet-search`.
```
$ cd sdmx-facet-search
$ yarn
```
### Server Config
Config files are located under `config` folder.
3 environments are managed: [ `testing`, `production`, `development`].
To setup an environment, fullfill target file, all common data should be inside `config/default` (latter will be merged with first).
Config's data:
```
{
  server: {
    host (String): sfs host ip or dns entry,
    port (Integer): port number,
  },
  solr: {
    host (String): solr host ip or dns entry,
    port (Interger): port number,
    core (String): solr's core name,
    verbose (Boolean): print to console of solr's requests
  }
}
```
### Solr Install
It's out of the scope of this project to explain how to install / setup a solr server, [Apache Solr reference Guide](https://cwiki.apache.org/confluence/display/solr/Apache+Solr+Reference+Guide) may help!
Just a small recipe to get how we've done it for our development environment:
```
// see https://hub.docker.com/_/solr/
$ docker pull solr
$ docker run -d --restart=always -p <IP>:8983:8983 --name solr solr
$ docker exec -it --user=solr solr bash
solr$ cd server/solr
solr$ solr create -c sdmx-facet-search
```
### Run Server
A running `solr` server must be reachable to run `sfs`.
Launch it in development mode:
```
$ yarn srv:dev sfs 'sdmx-facet-search' core is up and running +0ms
  sfs Solr is ready to serve U
  evtx ping service registered
  evtx status service registered
  evtx search service registered
  sfs:evtx EvtX API setup
  sfs:http server started on http://0.0.0.0:3004
  sfs server started ...
```
in production mode:
```
$ yarn srv:prod
$ yarn srv:run
...
```
### Health checks
2 services are available to supervise `sfs` server.
#### ping
```
$ curl http://localhost:3004/ping
{ ping: 'pong'}
```
or
```
$ curl http://localhost:3004/api/ping
{ ping: 'pong'}
```
First will answer at [express](http://expressjs.com/) level, latter is an [evtx](https://www.npmjs.com/package/evtx) service.
#### status
[evtx](https://www.npmjs.com/package/evtx) service that will send a STATUS request on the configures core to `solr` and will return an answer like:
```
$ curl http://localhost:3004/api/status
{
   "solR" : {
      "config" : {
         "port" : 8983,
         "host" : "rp3.redpelicans.com",
         "verbose" : true,
         "core" : "sdmx-facet-search"
      },
      "core" : {
         "schema" : "managed-schema",
         "index" : {
            "lastModified" : "2017-05-29T15:24:59.392Z",
            "hasDeletions" : false,
            "userData" : {
               "commitTimeMSec" : "1496071499392"
            },
            "directory" : "org.apache.lucene.store.NRTCachingDirectory:NRTCachingDirectory(MMapDirectory@/opt/solr/server/solr/sdmx-facet-search/data/index lockFactory=org.apache.lucene.store.NativeFSLockFactory@591d79fb; maxCacheMB=48.0 maxMergeSizeMB=4.0)",
            "segmentsFile" : "segments_4",
            "segmentCount" : 1,
            "numDocs" : 3,
            "version" : 14,
            "segmentsFileSizeInBytes" : 165,
            "maxDoc" : 3,
            "current" : true,
            "deletedDocs" : 0,
            "sizeInBytes" : 6983,
            "size" : "6.82 KB",
            "indexHeapUsageBytes" : -1
         },
         "uptime" : 768833810,
         "config" : "solrconfig.xml",
         "instanceDir" : "/opt/solr/server/solr/sdmx-facet-search",
         "dataDir" : "/opt/solr/server/solr/sdmx-facet-search/data/",
         "startTime" : "2017-05-29T15:24:19.869Z",
         "name" : "sdmx-facet-search"
      }
   },
   // sfs start time
   "startTime" : "2017-06-07T12:42:28.723Z"
}
```
### Test
A running `solr` server defined in `testing` environment must be reachable to run tests.
`sfs` is packaged with many tests at different layers of the stack:
To execute tests, run:
```
$ yarn test
```
To check coverage:
```
$ yarn coverage
```
### Functional tests
Tests are located under `__test__` folders close to code to test.
Among tests, those under `src/server/__test__` are functional ones, the goal is to test `sfs` as a black box.
`./fixtures/index.js` includes fixtures files that define tests run by `api.js`.
A fixture file is made of a schema definition, data to load and tests to run. See `data1.js` to get how to proceed and add new tests.
## API Documentation
`sfs` offers 2 APIs:
* **HTTP**, client http API to requests searches
* **JS**, internal library to manipulate solr's data. `sfs` is directly using solr [JSON Request API](https://cwiki.apache.org/confluence/display/solr/JSON+Request+API), but to help a low level Javascript [API](#js-api) is supplied
### HTTP API

`POST /api/search`

**Body**
Name | Type | Default | Description
--- | :---: | :---: | ---
`lang` | String | 'en' | [lang](#lang) to be used
`search` | String | '*' | search pattern on [searchFields](#searchFields)
`facets` | Object | null | facet's names / values (see below)
NB: `lang` can also be a http request's parameter

**Response**

Name | Type | Description
--- | --- | ---
`dataflows` | Array | List of selected dataflows made of [outFields](#outFields)
`facets` | Object | facet search results (see below)

*Example*

```
$ cat body.json
{
  "search": "*rate*",
  "facets": {
    "reference_area": ["Austria (AT)", "Belgium (BE)"]
  }
}
$ curl http://localhost:3004/api/search  -H "Content-Type: application/json" -d @body.json
```
*Response*
```
{
    "dataflows": [
        {
            "id": "IRS",
            "agency": "ECB",
            "version": "1.0",
            "name": "Interest rate statistics"
        }
    ],
    "facets": {
        "count": 1,
        "cat": {
          // TODO
        },
        "reference_area": {
            "buckets": [
                {
                    "val": "Austria (AT)",
                    "count": 1
                }
            ]
        },
        "interest_rate_type": {
            "buckets": [
                {
                    "val": "Bank interest rates (B)",
                    "count": 1
                },
                {
                    "val": "Long-term interest rate for convergence purposes (L)",
                    "count": 1
                },
                {
                    "val": "Money market interest rates (M)",
                    "count": 1
                }
            ]
        },
        "frequency": {
            "buckets": [
                {
                    "val": "Daily (D)",
                    "count": 1
                },
                {
                    "val": "Monthly (M)",
                    "count": 1
                },
                {
                    "val": "Yearly (Y)",
                    "count": 1
                }
            ]
        }
    }
}
```
### JS API
Internal API with sole purpose to ease the use of solr JSON Request API, see `src/server/solr/index.js`
```
  import initSolr from '../src/server/solr';
  import data from '../data/data.json'; // 1
  const config = { // 2
    solr: {
      host: 'localhost',
      port: 8983,
      core: 'sdmx-facet-search',
      verbose: true,
    }
  };
  initSolr({ config })
    .then(({ solr }) => solr.deleteAll() // 3
      .then(() =>  solr.add(data)) // 4
      .then(() => solr.select({ query: '*:*' })) // 5
```
This example is very close to a way to load data in a solr index.
1. JS structure to be indexed (see 'Index structured data' below)
2. Object similar to global sfs's config
3. `solr` is a Promise value returned by `initSolr`. It could be created also with a synchronous constructor.
3. `solr#deleteAll()` delete all data from the configured solr's core, use it carefully!
4. `solr#add(data)` index data inside solr's core. Use data without using any schema, so structure should be ready to be indexed as it.
5. `solr#select(data)` low level api to request searched on index. Do not use schema to transform query and response.
## Index structured data
Yet we are able to run `sfs` server, connect it to a solr engine and request searches, but unfortunately only with empty responses because our solr index is totally empty !!
Loading data strongly depends on `sfs` outside technical context. To help crafting a dedicated interface, a low level [API](#js-api) (see before) is packaged and a script based on it is available to convert a standard SDMX file to a JS structure dedicated for indexing.
Indexed data structure follows solr implementation decisions about the way to index, search and use facets, remember that solr first goal is to search not to store. To isolate HTTP API from solr search logic, `sfs` introduces a schema definition that creates an independent layer between requests and index structures.
The schema is configurable in `config` folder and will be used by API's services.
A schema must be defined within `sfs`:
* to help interface code to build the input structure
* to instruct solr how to index/search data
* to analyze and answer to API requests
* to manage localization of some fields
### Schema definition
Schema is defined in config files under `dataflows` key, and read at server's boot time. Only the http API is aware of the schema not the JS one.
Name | Type  | Description
--- | --- | ---
`outFields` | Array | List of fields returned for each dataflow found
`searchFields` | Array | List of fields to search on
`schema` | Array of { `name`: String, `field`: (String or Function) } | Mapping Object `name` to index `field`
`facets` | Array of { `name`: String, `type`: ['dimension' or 'category'], `op`: ['OR' or 'AND']} | Facet definition
`schema` is a mapping between indexed fields and abstract names used in `outFields`, `searchFields` and `facets.name` entries. `schema.field` can be String or a Function, latter will receive a `lang` parameter.
Sample
We have to manage 3 languages : ['en', 'cz', 'fr'] for the field `name`, an indexed dataflow looks like:
```
{
  id: 'IRS',
  name_en_s: 'Interest rate statistics',
  name_fr_s: 'Statistiques des taux d'intérêt',
  name_cz_s: 'Statistika úrokových sazeb',  
}
```
Schema will be defined as:
```
dataflows: {
  outFields: ['id, 'name'],
  searchFields: ['name'],
  schema: [
    {
      name: 'name',
      field: lang => `name_${lang}_s`,
    }
  ]
}
```
On a search request:
```
$ cat body.json
{
  "lang": "fr",
  "search": "*taux*",
}
$ curl http://localhost:3004/api/search  -H "Content-Type: application/json" -d @body.json
```
We will get:
```
{
    "dataflows": [
        {
            "id": "IRS",
            "name": "Statistiques des taux d'intérêt"
        }
    ],
    "facets": {
        ...
    }
}
```
Indexed field names are never directly returned by `sfs`, but only corresponding names defined by schema depending on `lang` parameter.
Fields in this sample use [solr's dynamic fields](https://cwiki.apache.org/confluence/display/solr/Dynamic+Fields) definition, but it's up to you thanks to the schema to implement your own type's strategy.
We have a similar use case for facets. Let's say we would like to have a faceted search on field `reference_area` without localization. This time `reference_area` is a multi string field type named `reference_area_ss`.
Schema will be defined as:
```
dataflows: {
  outFields: ['id, 'name'],
  searchFields: ['name'],
  schema: [
    {
      name: 'name',
      field: lang => `name_${lang}_s`,
    },
    {
      name: 'reference_area',
      field: 'reference_area_ss',
    },
  ],
  facets: [
    {
      name: 'reference_area',
      type: 'dimension'
      op: 'OR',
    }
  ]
}
```
NB:
* `op` define the logical operator to use in case of a multiselection for one facet.
* `type` help to split facets in 2 worlds: 'dimension' and 'category'. Latter implies to deal with hierarchical facets search, so we need to identify facets of that type.
### Loading data
// TODO
### Use cases
// TODO
#### Managing categories
Searching on `caterogy` fields implies to deal with hierarchical facets search, a concept which can mean different things to different people depending on data.
`sfs` tries to be more generic as possible and implements a basic approach that works well for most use cases by encoding the facet fields at index time in a specific manner.
Let's have an example:
```
Dataflow#1: C1 > C11
Dataflow#2: C1 > C11 > C111
Dataflow#3: C1 > C12, C2
```
In this example, we have dataflows associated with multiple categories, like Dataflow#3.
We must perform some index time processing on this flattened data in order to create the tokens needed for a hierarchical approach. When we index the data we create specially formatted fields that encode the depth information for each node that appears as part of the path, and include the hierarchy separated by a common separator (“depth/first level term/second level term/etc”). We also add additional terms for every ancestors in the original data.
Indexed fields
```
Dataflow#1: { cat: ['0/C1/', '1/C1/C11/'] }
Dataflow#2: { cat: ['0/C1/', '1/C1/C11/', '2/C1/C11/C111/'] }
Dataflow#3: { cat: ['0/C1/', '1/C1/C12/', '0/C2/'] }
```
if we define `cat` in our schema as a `category` type facet like this:
```
dataflows: {
  outFields: ['id'],
  schema: [
    {
      name: 'cat',
      field: cat_ss,
    },
  ],
  facets: [
    {
      name: 'cat',
      type: 'category'
    }
  ]
}
```
We can query like this:
```
$ cat body.json
{
  "facets": {
    "cat": ["0/C2/"]
  }
}
$ curl http://localhost:3004/api/search  -H "Content-Type: application/json" -d @body.json
```
And get:
```
{
    "dataflows": [
        {
            "id": "3",
        }
    ],
    "facets": {
        "count": 1,
        "cat": {
            "buckets": [
                {
                    "val": "0/C1/",
                    "count": 3
                },
                {
                    "val": "1/C1/C11/",
                    "count": 2
                },
                {
                    "val": "0/C2/",
                    "count": 1
                },
                {
                    "val": "1/C1/C12/",
                    "count": 1
                },
                {
                    "val": "2/C1/C11/C111/",
                    "count": 1
                }
            ]
        },
      }
  }
```
That's all folks.