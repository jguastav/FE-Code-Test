import axios from 'axios';
import {getIngredients} from '../common/Ingredients'
import {switchToMasterAction} from '../common/actionCreators'
import {switchToDetailAction} from '../common/actionCreators'



export const getAllCocktails = (dispatch) => {
    axios.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
      .then((response) => {
        console.log("service");
        console.log(response);
        completeDrinksIngredients(dispatch,response.data.drinks);
        });
    };


const completeDrinksIngredients = (dispatch, drinks) => {
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

      Promise.all(ingredientPromises).then(() => {
          //TODO: remove dispatch from here
            dispatch(switchToMasterAction(drinks));
          }
        );
      };


export const getCocktailAndswitchToDetail = (dispatch, idDrink) => {
    const url='http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
    axios.get(url)
      .then((response) => {
          dispatch(switchToDetailAction(idDrink,response.data.drinks[0]));
        });

    };
