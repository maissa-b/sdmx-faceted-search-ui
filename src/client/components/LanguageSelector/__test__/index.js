import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import LanguageSelector from '..';

const { describe, it } = global;

describe('Tests component LanguageSelector\n', function() {
    const root = <LanguageSelector langs={[
        {id:1, value:'fr'},
        {id:2, value:'en'},
        {id:3, value:'du'},
    ]} />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
    it('Should have only one prop', function() {
        const wrapper = shallow(root).props().children;
        should(wrapper.props.children.length).eql(3);
    });
    it('Should have 3 object in langs', function() {
        const wrapper = shallow(root).props().children.props.children;
        should(nbItems(wrapper)).eql(3);
    });
});