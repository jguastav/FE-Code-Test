import React, { Component } from 'react';
import CocktailList from './CocktailListComponent';
import { connect } from 'react-redux'
import axios from 'axios';
import {switchToDetail} from '../common/actionCreators'


// TODO:Ensure switch to master refresh the info
// currently is accessing the same initial array

//TODO: remove axios from here
const getCocktailAndswitchToDetail = (dispatch, idDrink) => {
    const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
    axios.get(url)
      .then((response) => {
          dispatch(switchToDetail(idDrink,response.data.drinks[0]));
        });

    };



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
