const Data = {
  showSidePanel: false,
  searchValue: '',
  facetedValue: '',
  filterValue: '',
  markValue: '',
  title: 'SDMX',
  language: [
    {
      id: 0,
      name: 'FR',
    },
    {
      id: 1,
      name: 'En',
    },
  ],
  marques: [{ id: 0, name: 'DECATHLON' }, { id: 1, name: 'Giant' }, { id: 2, name: 'SCOTT' }, { id: 3, name: 'Cube' },
  { id: 4, name: 'Specialized' }],
  sortTypes: [{ id: 0, name: 'Durée' }, { id: 1, name: 'Prix' }, { id: 2, name: 'Distance' }, { id: 3, name: 'Etats' }],
  dataflows: [
    {
      id: 0,
      Name: 'VTT Tout Suspendu 26\'\' Bliss Noir Orange Freins à Disques 21 Vit TC 47 cm 532M',
      Prix: 1763.00,
      Image: 'http://www.cyclesduloir.com/media/g_vignette/118312',
      Categories: 'sport',
      Type: 'Vélo tout terrain',
      Mark: 'SCOTT',
      Vente: 'enchère',
    },
    {
      id: 1,
      Name: 'Vélo BMX 20\'\' Freestyle KS cycling G-surge, rotor 360° - NEUF',
      Prix: 900.00,
      Image: 'https://www.decathlon.fr/media/834/8343668/big_9c4a3fe98ffc40538619ed177c8b15ea.jpg',
      Categories: 'sport',
      Type: 'Vélo BMX',
      Mark: 'GT',
      Vente: 'achat immédiat',
    },
    {
      id: 2,
      Name: 'Viking Omnium 1.0 Gents 700 14 Vitesse Road Racing Bike vélo 3 tailles noir',
      Prix: 201.00,
      Image: 'https://static.cyclelab.eu/velos/scott/2007/highres/249692.jpg',
      Categories: 'sport',
      Type: 'Vélo de route',
      Mark: 'GT',
      Vente: 'enchère',
    },
    {
      id: 3,
      Name: 'VTT 26\'\' KS Cycling Slyder tout suspendu 21 vitesses, TC 51 cm - NEUF',
      Prix: 179.00,
      Image: 'https://www.topvelo.fr/documents/Image/different-type-vtt-2.jpg',
      Categories: 'sport',
      Type: 'Vélo tout terrain',
      Mark: 'DECATHLON',
      Vente: 'achat immédiat',
    },
    {
      id: 4,
      Name: 'VELO ELECTRIQUE WAYSCRAL BASY 315 24V / blanc',
      Prix: 458.00,
      Image: 'https://www.wayscral.com/493-thickbox_default/493-velo-a-assistance-electrique-wayscral-city-415.jpg',
      Categories: 'sport',
      Type: 'Vélo électrique',
      Mark: 'GT',
      Vente: 'enchère',
    },
    {
      id: 5,
      Name: 'Vélo pliant ROUES 24", SHIMANO ALUMINIUM',
      Prix: 189.00,
      Image: 'https://i.ebayimg.com/images/g/vfcAAOSwnHZYY-yb/s-l300.jpg',
      Categories: 'sport',
      Type: 'Vélo pliable',
      Mark: 'DECATHLON',
      Vente: 'enchère',
    },
    {
      id: 6,
      Name: 'Tente de camping neuve trois personnes 3 places avec sac de transport',
      Prix: 29.00,
      Image: 'https://www.decathlon.fr/media/836/8360776/big_dd156c57efc14504b0919bfc5aa53b17.jpg',
      Categories: 'Camping, randonnée',
      Type: '',
      Mark: 'DECATHLON',
      Vente: 'enchère',
    },
    {
      id: 7,
      Name: 'VTT Tout Suspendu 26\'\' Bliss Noir Orange Freins à Disques 21 Vit TC 47 cm 532M',
      Prix: 1763.00,
      Image: 'http://www.cyclesduloir.com/media/g_vignette/118312',
      Categories: 'sport',
      Type: 'Vélo tout terrain',
      Mark: 'SCOTT',
      Vente: 'enchère',
    },
    {
      id: 8,
      Name: 'Vélo BMX 20\'\' Freestyle KS cycling G-surge, rotor 360° - NEUF',
      Prix: 900.00,
      Image: 'https://www.decathlon.fr/media/834/8343668/big_9c4a3fe98ffc40538619ed177c8b15ea.jpg',
      Categories: 'sport',
      Type: 'Vélo BMX',
      Mark: 'GT',
      Vente: 'achat immédiat',
    },
    {
      id: 9,
      Name: 'Viking Omnium 1.0 Gents 700 14 Vitesse Road Racing Bike vélo 3 tailles noir',
      Prix: 201.00,
      Image: 'https://static.cyclelab.eu/velos/scott/2007/highres/249692.jpg',
      Categories: 'sport',
      Type: 'Vélo de route',
      Mark: 'GT',
      Vente: 'enchère',
    },
    {
      id: 10,
      Name: 'VTT 26\'\' KS Cycling Slyder tout suspendu 21 vitesses, TC 51 cm - NEUF',
      Prix: 179.00,
      Image: 'https://www.topvelo.fr/documents/Image/different-type-vtt-2.jpg',
      Categories: 'sport',
      Type: 'Vélo tout terrain',
      Mark: 'DECATHLON',
      Vente: 'achat immédiat',
    },
    {
      id: 11,
      Name: 'VELO ELECTRIQUE WAYSCRAL BASY 315 24V / blanc',
      Prix: 458.00,
      Image: 'https://www.wayscral.com/493-thickbox_default/493-velo-a-assistance-electrique-wayscral-city-415.jpg',
      Categories: 'sport',
      Type: 'Vélo électrique',
      Mark: 'GT',
      Vente: 'enchère',
    },
    {
      id: 12,
      Name: 'Vélo pliant ROUES 24", SHIMANO ALUMINIUM',
      Prix: 189.00,
      Image: 'https://i.ebayimg.com/images/g/vfcAAOSwnHZYY-yb/s-l300.jpg',
      Categories: 'sport',
      Type: 'Vélo pliable',
      Mark: 'DECATHLON',
      Vente: 'enchère',
    },
    {
      id: 13,
      Name: 'Tente de camping neuve trois personnes 3 places avec sac de transport',
      Prix: 29.00,
      Image: 'https://www.decathlon.fr/media/836/8360776/big_dd156c57efc14504b0919bfc5aa53b17.jpg',
      Categories: 'Camping, randonnée',
      Type: '',
      Mark: 'DECATHLON',
      Vente: 'enchère',
    },
  ],
  facetedbox: [
    {
      id: 0,
      name: 'Categories',
      facets: [
        {
          id: 0,
          name: 'All',
        },
        {
          id: 1,
          name: 'sport',
        },
        {
          id: 2,
          name: 'Camping, randonnée',
        },
        {
          id: 3,
          name: 'Equipement du cycliste',
        },
      ],
    },
  ],
  filterbox: [
    {
      id: 0,
      name: 'Type',
      filtres: [
        {
          id: 0,
          name: 'Vélo BMX',
        },
        {
          id: 1,
          name: 'Vélo de route',
        },
        {
          id: 2,
          name: 'Vélo électrique',
        },
        {
          id: 3,
          name: 'Vélo pliable',
        },
        {
          id: 4,
          name: 'Vélo tout terrain',
        },
        {
          id: 5,
          name: 'All',
        },
      ],
    },
  ],
};

export default Data;
