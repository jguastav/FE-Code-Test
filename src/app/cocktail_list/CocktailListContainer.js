import React, { Component } from 'react';
import axios from 'axios';
import {getIngredients} from '../common/Ingredients'
import CocktailList from './CocktailListComponent';



class CocktailListContainer extends Component {
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

    componentWillMount() {
      axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
        .then((response) => {
          this.completeDrinksIngredients(response.data.drinks);
          });
      };


      render() {
        return (
        <CocktailList
            switchToDetail={this.handleOnPress}
            headerLabel={this.props.headerLabel}
            cocktailList={this.state.cocktails}
            />
          )
      }
}

export default CocktailListContainer;
