import React from 'react';

import './search_button.css';

const SearchButton = () => (
  <div className="search-button-container">
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
    />
  </div>
);

export default SearchButton;
