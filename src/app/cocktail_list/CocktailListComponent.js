import React, { Component } from 'react';
import { View,ScrollView } from 'react-native';
import axios from 'axios';
import CocktailItem from './CocktailItemComponent';
import CocktailHeaderList from './CocktailHeaderListComponent';
import {getIngredients} from '../common/Ingredients'

class CocktailList extends Component {
  state = {
    cocktails:[],
  }

  handleOnPress = (cocktailId) => {
    this.props.switchToDetail(cocktailId);
  };

  completeDrinksIngredients(drinks) {

    var ingredientPromises = [];
    drinks.forEach(function(drink) {
          const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+drink.idDrink;
          ingredientPromises.push(
            axios.get(url).then((response) => {
              drinkDetail=response.data.drinks[0];
              ingredientsArray=getIngredients(drinkDetail);
              drink.strIngredient1=ingredientsArray[0];
              drink.strIngredient2=ingredientsArray[1];
              if (ingredientsArray.length>2) {
                  drink.strMoreIngredients="and "+(ingredientsArray.length-2)+" more ingredients.";
              } else {
                  drink.strMoreIngredients="";
              }
            })
          );
    });

    Promise.all(ingredientPromises).then(() => {
      console.log(drinks);
      this.setState({cocktails: drinks})
    }
    );


    };

    componentWillMountOld() {
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
        .then((response) => {
          this.setState({cocktails: response.data.drinks});
          });
      };


  componentWillMount() {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then((response) => {
        this.completeDrinksIngredients(response.data.drinks);
        });
    };

  renderCocktails = () => {
    return this.state.cocktails.map((cocktail) => {
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
