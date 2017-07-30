import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import SidePanelButton from '../SidePanelButton';
import Title from '../Title';
import LanguageSelector from '../LanguageSelector';

const Header = ({ title, langs, showOverlayPanel, isHidden }) => (
  <div>
    <nav className="pt-navbar pt-dark">
      <span className="pt-navbar-group pt-align-left">
        <SidePanelButton isHidden={isHidden} showOverlayPanel={showOverlayPanel} />
      </span>
      <span className="pt-navbar-group">
        <Title title={title} />
      </span>
      <span className="pt-navbar-group pt-align-right">
        <LanguageSelector langs={langs} />
      </span>
    </nav>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  showOverlayPanel: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default Header;
