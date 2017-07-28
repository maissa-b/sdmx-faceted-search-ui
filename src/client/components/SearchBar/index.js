import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './search_bar.css';

const DEBOUNCE_LIMIT = 500; // milisecond

class SearchBar extends Component {

  updateSearchValue = ({ target: { value } }) => {
    const { getSearchValue } = this.props;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => getSearchValue(value), DEBOUNCE_LIMIT);
  }

  render() {
    return (
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={this.updateSearchValue}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  getSearchValue: PropTypes.func.isRequired,
};

export default SearchBar;
