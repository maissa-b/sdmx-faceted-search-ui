import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Provider from '../../Provider';

import App from '..';
import SidePanel from '../../SidePanel';

const { describe, it } = global;

describe('App component', function() {
    it('Should be a class', function() {
        const store = {title: 'test', langs: ['test2'], resultItems: ['test2']}
        const root = (
        <Provider store={store}>
            <App />
        </Provider>
        );
        const wrapper = shallow(root);
        should(wrapper.matchesElement(<SidePanel isHidden={true} />));
    });
});