import React, { Component } from 'react';
import CocktailMasterDetail from './CocktailMasterDetailComponent';
import axios from 'axios';
import { ViewMode } from '../common/actionCreators'
import { connect } from 'react-redux'
import {switchToDetail,showCocktails} from '../common/actionCreators'


const getCocktailAndswitchToDetail = (dispatch, idDrink) => {
    const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
    axios.get(url)
      .then((response) => {
          dispatch(switchToDetail(idDrink,response.data.drinks[0]));
        });

    };

const switchToMaster = (dispatch) => {
    dispatch(showCocktails());
  };


const mapStateToProps = state => ({
    currentView: state.currentView,
    headerLabel: state.headerLabel,
    currentCocktail: state.currentCocktail,
    currentCocktailId: state.currentCocktailId
})

const mapDispatchToProps = dispatch => ({
  switchToDetail: idDrink => getCocktailAndswitchToDetail(dispatch,idDrink),
  switchToMaster: () => switchToMaster(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CocktailMasterDetail) ;
