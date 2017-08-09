import React from 'react';
import PropTypes from 'prop-types';
import { onlyUpdateForKeys } from 'recompose';

import SidePanelButton from '../SidePanelButton';
import Title from '../Title';
import LanguageSelector from '../LanguageSelector';

const Header = ({ title, langs, toggleIsHiddenHandler, isHidden }) => (
  <div>
    <nav className="pt-navbar pt-intent-success pt-dark">
      <div className="pt-navbar-group pt-align-left">
        <div style={{ display: isHidden ? 'flex' : 'none' }}>
          <SidePanelButton isHidden={isHidden} toggleIsHiddenHandler={toggleIsHiddenHandler} />
        </div>
      </div>
      <div className="pt-navbar-group pt-align-left">
        <Title title={title} />
      </div>
      <div className="pt-navbar-group pt-align-right">
        <span className="pt-icon-large pt-icon-shopping-cart pt-intent-primary" />
        <div className="pt-navbar-divider" />
        <LanguageSelector
          langs={langs}
        />
      </div>
    </nav>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  toggleIsHiddenHandler: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  fruit: undefined,
};

export default onlyUpdateForKeys(['isHidden'])(Header);
