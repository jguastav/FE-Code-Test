import React, { Component } from 'react';
import { View } from 'react-native';
import CocktailListContainer from '../cocktail_list/CocktailListContainer';
import Cocktail from '../cocktail/CocktailComponent';
import { ViewMode } from '../common/actionCreators'



class CocktailMasterDetail extends React.Component  {


  switchToDetail = (idDrink) => {
    this.props.switchToDetail(idDrink);
  };



  switchToMaster = () => {
    this.props.switchToMaster();
  };



  render() {
    const {
      currentView,
      headerLabel,
    } = this.props;
    const showList = currentView == ViewMode.MASTER;
    const showDetail = currentView == ViewMode.DETAIL;

    return (
      <View>
        {showList ? <CocktailListContainer switchToDetail={(idDrink) => { this.switchToDetail(idDrink)}} headerLabel={this.props.headerLabel} /> : null }
        {showDetail  ? <Cocktail
                  currentCocktail={this.props.currentCocktail}
                  currentCocktailId={this.props.currentCocktailId}
                  switchToMaster={this.switchToMaster}  /> : null }
      </View>
    );
  }
}

export default CocktailMasterDetail;
