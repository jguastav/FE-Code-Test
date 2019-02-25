import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import CocktailItem from './CocktailItemComponent';
import CocktailHeaderList from './CocktailHeaderListComponent';

class CocktailList extends Component {

  handleOnPress = (cocktailId) => {
    this.props.switchToDetail(cocktailId);
  };


  renderCocktails = () => {
    return this.props.cocktailList.map((cocktail) => {
      return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} onPress={this.handleOnPress} />;
     });
  }


  render() {
    const styles =
      {listContainerStyle: {
        backgroundColor:"#00C1D3",
      },};


    const {listContainerStyle}  = styles;


    return (
      <View>
      <CocktailHeaderList headerText={this.props.headerLabel} />
      <ScrollView style={listContainerStyle}>
        {this.renderCocktails()}
      </ScrollView>
      </View>
    );
  }
}

export default CocktailList;
