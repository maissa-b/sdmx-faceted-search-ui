import React from 'react';
import PropTypes from 'prop-types';

import './side_panel_button.css';

const SidePanelButton = ({ isHidden, showOverlayPanel }) => (
  <div className="side-panel-button-container">
    <button
      id="overlay-button"
      className={isHidden === false ? 'pt-button pt-minimal pt-icon-cross' : 'pt-button pt-minimal pt-icon-list'}
      onClick={showOverlayPanel}
    />
  </div>
);

SidePanelButton.propTypes = {
  showOverlayPanel: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default SidePanelButton;
