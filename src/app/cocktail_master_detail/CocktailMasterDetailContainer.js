import React, { Component } from 'react';
import CocktailMasterDetail from './CocktailMasterDetailComponent';
import axios from 'axios';
import { ViewMode } from '../common/actionCreators'
import { connect } from 'react-redux'
import {switchToDetail,showCocktails} from '../common/actionCreators'


const switchToMaster = (dispatch) => {
    dispatch(showCocktails());
  };


const mapStateToProps = state => ({
    currentView: state.currentView,
    headerLabel: state.headerLabel,
    currentCocktail: state.currentCocktail,
    currentCocktailId: state.currentCocktailId,
})

const mapDispatchToProps = dispatch => ({
  switchToMaster: () => switchToMaster(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailMasterDetail) ;
