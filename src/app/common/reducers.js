import { combineReducers } from 'redux'
import currentView from '../cocktail_master_detail/reducers'
import currentCocktail from '../cocktail/reducers'
import cocktails from '../cocktail_list/reducers'
import currentCocktailIdReducer from '../cocktail_list/currentCocktailIdReducer'
import { ViewMode } from './actionCreators'
import {headerLabel} from './labels.json';
import * as Actions from "./actionTypes";

const initialState = {
  currentCocktail: {},
  currentCocktailId: -1,
  cocktails: [],
  currentView: ViewMode.MASTER,
  headerLabel: headerLabel
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SHOW_COCKTAIL_LIST:
      return Object.assign({}, state, { currentView: ViewMode.MASTER});
    case Actions.SHOW_COCKTAIL_DETAIL:
      return Object.assign({}, state, { currentView: ViewMode.DETAIL});
    case Actions.SWITCH_TO_DETAIL:
        return Object.assign({}, state, {
            currentView: ViewMode.DETAIL,
            currentCocktail: action.currentCocktail,
            currentCocktailId:action.currentCocktailId});
    // TODO: Add all other actions
    default:
      return state
  }
}



export default rootReducer;
