import React from 'react';
import PropTypes from 'prop-types';

import './language_selector.css';

const LanguageSelector = ({ langs }) => (
  <div className="language-selector-container">
    <select>
      { langs.map(lang => <option key={lang.id}>{lang.value}</option>) }
    </select>
  </div>
);

LanguageSelector.propTypes = {
  langs: PropTypes.array.isRequired,
};

export default LanguageSelector;
