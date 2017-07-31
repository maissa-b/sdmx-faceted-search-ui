import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import ResultsPanel from '..';

const { describe, it } = global;

describe('test component ResultsPanel', function() {
    const wrapper = shallow(<ResultsPanel resultItems={['item1', 'item2']} searchValue={'onsenfou'} />);
    should(wrapper.resultItems).be.an.Array();
});