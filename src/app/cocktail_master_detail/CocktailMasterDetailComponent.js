import React, { Component } from 'react';
import { View } from 'react-native';
import CocktailListContainer from '../cocktail_list/CocktailListContainer';
import Cocktail from '../cocktail/CocktailComponent';
import axios from 'axios';
import { ViewMode } from '../common/actionCreators'
class CocktailMasterDetail extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      currentCocktail: {},
      currentCocktailId: -1,
      cocktails: [],
      currentView: props.initialView,
      showScreen:false
    };
  }


  switchToDetail = (idDrink) => {
    const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
    axios.get(url)
      .then((response) => {
          this.setState({currentView:ViewMode.DETAIL,
              currentCocktail:response.data.drinks[0],
              currentCocktailId:idDrink});
        });

    };



  switchToMaster = () => {
    this.setState({currentView:ViewMode.MASTER,currentCocktail:null});
  };



  render() {
    const {
      currentView,
      headerLabel,
    } = this.props;
    const showList = this.state.currentView == ViewMode.MASTER;
    const showDetail = this.state.currentView == ViewMode.DETAIL;

    return (
      <View>
        {showList ? <CocktailListContainer switchToDetail={this.switchToDetail} headerLabel={this.props.headerLabel} /> : null }
        {showDetail  ? <Cocktail
                  currentCocktail={this.state.currentCocktail}
                  currentCocktailId={this.state.currentCocktailId}
                  switchToMaster={this.switchToMaster}  /> : null }
      </View>
    );
  }
}

export default CocktailMasterDetail;
