import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import FacetedBox from '..';
import Items from '../../Items';

const { describe, it } = global;

describe('Tests FacetedBox components', function() {
    const root = <FacetedBox titleName='test' />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
   it('Should have only one prop', function() {
        const wrapper = shallow(root).props().children[0].props;
        should(nbItems(wrapper)).eql(1);
    });
    it('Should be a string prop', function() {
        const wrapper = shallow(root).props().children[0].props.children;
        should(typeof(wrapper) === typeof('string')).eql(true);
    });
    it('Should call <Items> prop', function() {
        const wrapper = shallow(root);
        should(wrapper.matchesElement(<Items />));
    });
});