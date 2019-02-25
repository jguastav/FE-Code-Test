import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import CocktailItem from './CocktailItemComponent';
import CocktailHeaderList from './CocktailHeaderListComponent';

const CocktailList = ({cocktailList,headerLabel,switchToDetail}) => {

  const handleOnPress = (cocktailId) => {
    switchToDetail(cocktailId);
  };


  const renderCocktails = () => {
    return cocktailList.map((cocktail) => {
      return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} onPress={handleOnPress} />;
     });
  }

  const styles =
    {listContainerStyle: {
      backgroundColor:"#00C1D3",
    },};


  const {listContainerStyle}  = styles;

    return (
      <View>
      <CocktailHeaderList headerText={headerLabel} />
      <ScrollView style={listContainerStyle}>
        {renderCocktails()}
      </ScrollView>
      </View>
    );
}

export default CocktailList;
