import React, { Component } from 'react';
import { View } from 'react-native';
import CocktailListContainer from '../cocktail_list/CocktailListContainer';
import Cocktail from '../cocktail/CocktailComponent';
import { ViewMode } from '../common/actionCreators'



const CocktailMasterDetail = ({ currentView, headerLabel, currentCocktail, currentCocktailId, switchToMaster}) =>  {

  const showList = currentView == ViewMode.MASTER;
  const showDetail = currentView == ViewMode.DETAIL;

  return (
      <View>
        {showList ? <CocktailListContainer /> : null }
        {showDetail  ? <Cocktail
                  currentCocktail={currentCocktail}
                  currentCocktailId={currentCocktailId}
                  switchToMaster={() =>switchToMaster()}  /> : null }
      </View>
    );
}

export default CocktailMasterDetail;
