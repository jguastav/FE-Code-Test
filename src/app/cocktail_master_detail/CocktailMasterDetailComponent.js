import React, { Component } from 'react';
import { View } from 'react-native';
import CocktailListContainer from '../cocktail_list/CocktailListContainer';
import Cocktail from '../cocktail/CocktailComponent';
import { ViewMode } from '../common/actionCreators'



const CocktailMasterDetail = (props) =>  {

  const showList = props.currentView == ViewMode.MASTER;
  const showDetail = props.currentView == ViewMode.DETAIL;

  return (
      <View>
        {showList ? <CocktailListContainer switchToDetail={(idDrink) => { props.switchToDetail(idDrink)}} headerLabel={props.headerLabel} /> : null }
        {showDetail  ? <Cocktail
                  currentCocktail={props.currentCocktail}
                  currentCocktailId={props.currentCocktailId}
                  switchToMaster={() =>props.switchToMaster()}  /> : null }
      </View>
    );
}

export default CocktailMasterDetail;
