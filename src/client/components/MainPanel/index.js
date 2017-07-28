import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './main_panel.css';
import SearchPanel from '../SearchPanel/';
import ResultsPanel from '../ResultsPanel';

class MainPanel extends Component {
  state = {
    searchValue: '',
  };

  getSearchValue = value => {
    this.setState({ searchValue: value });
  };

  render() {
    const { searchValue } = this.state;
    const { resultItems } = this.props;

    return (
      <div className="main-panel-container">
        <SearchPanel
          className="search-panel-item"
          getSearchValue={this.getSearchValue}
        />
        <ResultsPanel
          className="results-panel-item"
          resultItems={resultItems}
          searchValue={searchValue}
        />
      </div>
    );
  }
}

MainPanel.propTypes = {
  resultItems: PropTypes.array.isRequired,
};

export default MainPanel;
