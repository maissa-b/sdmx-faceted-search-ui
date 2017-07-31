import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import Items from '..';

const { describe, it } = global;

describe('Tests Items component\n', function() {
    const root = <Items />
    it('Should have only a <li>', function() {
        const wrapper = shallow(root);
        should(wrapper.matchesElement(<li className="items-container" >Items</li>));
    });
});