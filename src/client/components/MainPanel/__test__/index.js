import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import MainPanel from '..';

const { describe, it } = global;

describe('Tests component MainPanel\n', function() {
    const root = <MainPanel resultItems={[
        {id:1, value:'test1'},
        {id:2, value:'test2'},
        {id:3, value:'test3'},
        {id:4, value:'test4'},
    ]} />
    it('Should have 4 object in resultItems', function() {
        const wrapper = shallow(root).props().children[1].props;
        should(wrapper.resultItems.length).eql(4);
    });
});