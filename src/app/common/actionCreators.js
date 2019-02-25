import * as Actions from "./actionTypes";
import {getAllCocktails} from '../cocktail_list/service'
import {getCocktailAndswitchToDetail} from '../cocktail_list/service'
import {getAllCocktailsPromise} from '../cocktail_list/service'
import {completeDrinksIngredientsPromises} from '../cocktail_list/service'
import {getCocktailDetailPromise} from '../cocktail_list/service'


let nextTodoId = 0

export const showCocktails = () => ({
  type: Actions.SHOW_COCKTAIL_LIST,
})

export const  switchToMasterAction = (drinks) => ({
  type:Actions.SWITCH_TO_MASTER,
  cocktails:drinks
})

export const  switchToDetailAction = (idDrink,currentCocktail) => ({
  type:Actions.SWITCH_TO_DETAIL,
  currentCocktailId:idDrink,
  currentCocktail
})

export const showCocktail = (idDrink) => ({
  type: Actions.SHOW_COCKTAIL_DETAIL,
  idDrink
})

export function getCocktails() {
  return dispatch => {
    dispatch({type: Actions.GET_COCKTAIL_LIST});
    cocktailsPromise=getAllCocktailsPromise();
    cocktailsPromise.then((response) => {
        drinks = response.data.drinks;
        ingredientPromises=completeDrinksIngredientsPromises(drinks);
        Promise.all(ingredientPromises).then(() => {
              dispatch(switchToMasterAction(drinks));
            }
          );

      });
  }
}

export function getCocktailAction(idDrink) {
  return dispatch => {
    dispatch({type: Actions.GET_COCKTAIL_DETAIL,
      idDrink});
      cocktailDetailPromise = getCocktailDetailPromise(idDrink);
      return cocktailDetailPromise.then((response) => {
          dispatch(switchToDetailAction(idDrink,response.data.drinks[0]));
        });
  }
}

export const getCocktailsSuccess = (response) => ({
  type: Actions.GET_COCKTAIL_LIST,
  status: "success",
  response
})

export const getCocktailsError = (response) => ({
  type: Actions.GET_COCKTAIL_LIST,
  status: "error",
  response: "error:"+response
})

export const getCocktail = (idDrink) => ({
  type: Actions.GET_COCKTAIL_DETAIL,
  idDrink
})

export const getCocktailSuccess = (response) => ({
  type: Actions.GET_COCKTAIL_DETAIL,
  status: "success",
  response
})

export const getCocktailError = (response) => ({
  type: Actions.GET_COCKTAIL_DETAIL,
  status: "error",
  response: "error:"+response
})

export const getCocktailIngredients = (idDrink) => ({
  type: Actions.GET_COCKTAIL_INGREDIENTS,
  idDrink
})

export const getCocktailIngredientsSuccess = (response) => ({
  type: Actions.GET_COCKTAIL_INGREDIENTS,
  status: "success",
  response
})

export const getCocktailIngredientsError = (response) => ({
  type: Actions.GET_COCKTAIL_INGREDIENTS,
  status: "error",
  response: "error:"+response
})

export const ViewMode = {
  MASTER: 'MASTER',
  DETAIL: 'DETAIL',
}
