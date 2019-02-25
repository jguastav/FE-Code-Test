import React, { Component } from 'react';
import CocktailList from './CocktailListComponent';
import { connect } from 'react-redux'
import {getCocktailAction} from '../common/actionCreators'


// TODO:Ensure switch to master refresh the info
// currently is accessing the same initial array

const mapStateToProps = state => (
  {
  cocktailList: state.cocktails,
  headerLabel: state.headerLabel,
})



const mapDispatchToProps = dispatch => ({
  switchToDetail: idDrink => dispatch(getCocktailAction(idDrink)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailList)
