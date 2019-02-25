import axios from 'axios';
import {getIngredients} from '../common/Ingredients'
import {switchToMasterAction} from '../common/actionCreators'
import {switchToDetailAction} from '../common/actionCreators'

export const getAllCocktailsPromise = () => {
    return axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass');
  };

export const getCocktailDetailPromise = (idDrink) => {
      const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
      return axios.get(url);
  };

export const completeDrinksIngredientsPromises = (drinks) => {
          var ingredientPromises = [];
          drinks.forEach(
            function(drink) {
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
                }
              )
            );
          });
          return ingredientPromises;
    };
