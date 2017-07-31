import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import DataFlow from '..';

const { describe, it } = global;

describe('Tests DataFlow component', function() {
    const root = <DataFlow result='onsenfou' />
    const nbItems = obj => {
        let counter = 0, key;
        for (key in obj) {
            counter++;
        }
        return counter;
    }
    it('Should have only one prop', function() {
        const wrapper = shallow(root).props().children.props;
        should(nbItems(wrapper)).eql(1);
    });
    it('Should be a string prop', function() {
        const wrapper = shallow(root).props().children.props.children;
        should(typeof(wrapper) === typeof('string')).eql(true);
    });
});