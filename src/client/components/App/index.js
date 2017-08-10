import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withStateHandlers } from 'recompose';
// import { createSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getDataflows, getFacets, facetedSearch, filter, addToCard } from '../../actions';
import './App.css';
import SidePanel from '../SidePanel';
import Container from '../Container';

const App = ({
title, langs, searchValue, isHidden, facets,
getDataflows: doGetDataflows, dataflows, getFacets: doGetFacets,
facetedSearch: doFacetedSearch, filter: doFilter,
addToCard: doAddToCard, toggleIsHiddenHandler }) => (
  <div className="App">
    <button onClick={() => { console.log(doGetFacets()); console.log(facets); }} />
    <SidePanel
      isHidden={isHidden}
      toggleIsHiddenHandler={toggleIsHiddenHandler}
      doFacetedSearch={doFacetedSearch}
      doFilter={doFilter}
    />
    <Container
      title={title}
      langs={langs}
      getDataflows={doGetDataflows}
      // resultItems={resultItems}
      isHidden={isHidden}
      dataflows={dataflows}
      toggleIsHiddenHandler={toggleIsHiddenHandler}
     // searchHandler={doSearch}
      searchValue={searchValue}
      addToCard={doAddToCard}
    />
  </div>
);

// const getList = state => state.resultItems;
// const getSearchValue = state => state.searchValue;
// const getFilterValue = state => state.filterValue;
// const getFacetedValue = state => state.facetedValue;

// const filterDataFlows = createSelector(
//   [getList, getSearchValue, getFilterValue, getFacetedValue],
//   (resultItems, searchValue, filterValue, facetedValue) => {
//     const finalItemList = resultItems;
//     if (!searchValue && (!filterValue || filterValue === 'all')) {
//       return finalItemList;
//     } else if (!searchValue && filterValue && filterValue !== 'all' && filterValue !== 'slidebar') {
//       return finalItemList.filter(item => (item.payload.type === filterValue));
//     } else if (searchValue && (!filterValue || filterValue === 'all')) {
//       return finalItemList.filter(item => (item.payload.name.toLowerCase().match(searchValue.toLowerCase())));
//     } else if (searchValue && filterValue && filterValue !== 'slidebar') {
//       return finalItemList.filter(item =>
//         (item.payload.type === filterValue) && item.payload.name.toLowerCase().match(searchValue.toLowerCase()));
//     } else if (!searchValue && filterValue && filterValue === 'slidebar') {
//       return finalItemList.filter(item => item.payload.price >= Number(facetedValue));
//     } else if (searchValue && filterValue && filterValue === 'slidebar') {
//       return finalItemList.filter(item =>
//         (item.payload.price >= Number(facetedValue)) && item.payload.name.toLowerCase().match(searchValue.toLowerCase()));
//     }
//     return finalItemList;
//   },
// );

const mapStateToProps = state => ({
  title: state.title,
  langs: state.langs,
  searchValue: state.searchValue,
  filterValue: state.filterValue,
  facetedValue: state.facetedValue,
  dataflows: state.dataflows,
  facets: state.facets,
//  resultItems: filterDataFlows(state),
});

const actions = {
  // search,
  facetedSearch,
  filter,
  addToCard,
  getDataflows,
  getFacets,
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

App.propTypes = {
  title: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  // resultItems: PropTypes.array.isRequired,
  // search: PropTypes.func.isRequired,
  toggleIsHiddenHandler: PropTypes.func.isRequired,
  facetedSearch: PropTypes.func.isRequired,
  addToCard: PropTypes.func.isRequired,
  getDataflows: PropTypes.func.isRequired,
  getFacets: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  dataflows: PropTypes.array.isRequired,
  facets: PropTypes.object.isRequired,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    ({ initialIsHidden = true }) => ({
      isHidden: initialIsHidden,
    }),
    {
      toggleIsHiddenHandler: ({ isHidden }) => () => ({
        isHidden: !isHidden,
      }),
    },
  ),
);

export default enhance(App);
