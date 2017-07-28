import React from 'react';
import PropTypes from 'prop-types';

import './search_info.css';

const SearchInfo = ({ numberResults }) => {
  const formatedResult = numberResults > 1 ?
    `${numberResults} results found.` :
    `${numberResults} result found.`;
  return (
    <div className="search-info-container">
      <p>{formatedResult}</p>
    </div>
  );
};

SearchInfo.propTypes = {
  numberResults: PropTypes.number.isRequired,
};

export default SearchInfo;
