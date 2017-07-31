import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import ResultsPanel from '..';
import SearchInfo from '../../SearchInfo';

const { describe, it } = global;

describe('Tests component ResultsPanel\n', function() {
    const root =
        <ResultsPanel
            className=''
            resultItems={[
                {id: 1, value: 'test1'},
                {id: 2, value: 'test2'},
                {id: 3, value: 'test3'},
                {id: 4, value: 'test4'},
            ]}
            searchValue='recherche'
        />
    it('Should render of SearchInfo', function() {
        const wrapper = shallow(root);
		should(wrapper.matchesElement(<SearchInfo numberResults={3} />));
    });
});