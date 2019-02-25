import React, { Component } from 'react';
import CocktailList from './CocktailListComponent';
import { connect } from 'react-redux'
import {getCocktailAndswitchToDetail} from './service'


// TODO:Ensure switch to master refresh the info
// currently is accessing the same initial array


  const handleOnPress = (dispatch, cocktailId) => {
      getCocktailAndswitchToDetail(dispatch, cocktailId);
  };


const mapStateToProps = state => (
  {
  cocktailList: state.cocktails,
  headerLabel: state.headerLabel,
})



const mapDispatchToProps = dispatch => ({
  switchToDetail: idDrink => getCocktailAndswitchToDetail(dispatch,idDrink),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailList)
