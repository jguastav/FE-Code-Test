import { ViewMode } from '../common/actionCreators'
import { SHOW_COCKTAIL_LIST, SHOW_COCKTAIL_DETAIL } from '../common/actionTypes'

const currentView = (state = ViewMode.MASTER, action) => {
  switch (action.type) {
    case SHOW_COCKTAIL_LIST:
      return ViewMode.MASTER;
    case SHOW_COCKTAIL_DETAIL:
      return ViewMode.DETAIL;
    default:
      return state
  }
}

export default currentView
