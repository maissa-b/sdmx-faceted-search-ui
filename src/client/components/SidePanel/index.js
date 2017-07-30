import React from 'react';
import PropTypes from 'prop-types';

import './side_panel.css';
import FacetedBox from '../FacetedBox';

const SidePanel = ({ isHidden }) => (
  <div className="side-panel-container" style={{ display: isHidden ? 'none' : 'flex' }}>
    <FacetedBox titleName="premier" />
    <FacetedBox titleName="deuxieme" />
    <FacetedBox titleName="troisieme" />
    <FacetedBox titleName="quatrieme" />
  </div>
);

SidePanel.propTypes = {
  isHidden: PropTypes.bool.isRequired,
};

export default SidePanel;
