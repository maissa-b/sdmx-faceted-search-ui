import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';
import Header from '..';
import Title from '../../Title';
import SidePanelButton from '../../SidePanelButton';
import LanguageSelector from '../../LanguageSelector';

const { describe, it } = global;

describe('<Header />', function() {
	it('should render burger button', function() {
		should(shallow(<Header />).matchesElement(<SidePanelButton />));
	});
	it('should render title', function() {
		should(shallow(<Header />).matchesElement(<Title />));
	});
	it('should render language selector', function() {
		should(shallow(<Header />).matchesElement(<LanguageSelector />));
	});
});
