import React, { Component } from 'react';
import { View } from 'react-native';
import CocktailListContainer from '../cocktail_list/CocktailListContainer';
import Cocktail from '../cocktail/CocktailComponent';
import { ViewMode } from '../common/actionCreators'



const CocktailMasterDetail = ({ currentView, headerLabel, currentCocktail, currentCocktailId, switchToDetail, switchToMaster}) =>  {

  const showList = currentView == ViewMode.MASTER;
  const showDetail = currentView == ViewMode.DETAIL;

  return (
      <View>
        {showList ? <CocktailListContainer switchToDetail={(idDrink) => { switchToDetail(idDrink)}} headerLabel={headerLabel} /> : null }
        {showDetail  ? <Cocktail
                  currentCocktail={currentCocktail}
                  currentCocktailId={currentCocktailId}
                  switchToMaster={() =>switchToMaster()}  /> : null }
      </View>
    );
}

export default CocktailMasterDetail;
