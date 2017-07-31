import React from 'react';
import should from 'should';
import { shallow } from 'enzyme';

import Header from '..';
import Title from '../../Title';
import SidePanelButton from '../../SidePanelButton';
import LanguageSelector from '../../LanguageSelector';

const { describe, it } = global;

describe('<Header />', function() {
	const root = <Header title='test' langs={['test2']} showOverlayPanel={(value) => value} isHidden={true} />
	it('should render burger button', function() {
		should(shallow(root).matchesElement(<SidePanelButton isHidden={true} showOverlayPanel={(value) => value} />));
	});
	it('should render title', function() {
		should(shallow(root).matchesElement(<Title title='test' />));
	});
	it('should render language selector', function() {
		should(shallow(root).matchesElement(<LanguageSelector langs={['test2']} />));
	});
});
