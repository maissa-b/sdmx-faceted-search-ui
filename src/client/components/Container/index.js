import React from 'react';
import PropTypes from 'prop-types';

import './container.css';
import Header from '../Header';
import MainPanel from '../MainPanel';

const Container = ({ title, langs, resultItems, showOverlayPanel, isHidden }) => (
  <div className="container-container">
    <Header title={title} langs={langs} showOverlayPanel={showOverlayPanel} isHidden={isHidden} />
    <MainPanel resultItems={resultItems} />
  </div>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  resultItems: PropTypes.array.isRequired,
  showOverlayPanel: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default Container;
