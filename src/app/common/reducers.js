import { combineReducers } from 'redux'
import currentView from '../cocktail_master_detail/reducers'
import currentCocktail from '../cocktail/reducers'
import cocktails from '../cocktail_list/reducers'

const rootReducer = combineReducers({
  currentView,
  cocktails,
  currentCocktail
});

export default rootReducer;
