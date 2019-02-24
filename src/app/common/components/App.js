import React from 'react'
import CocktailMasterDetail from '../../cocktail_master_detail/CocktailMasterDetailComponent'
import {headerLabel} from '../labels.json';
import { ViewMode } from '../actionCreators'


const App = () => (
  <CocktailMasterDetail initialView={ViewMode.MASTER} headerLabel={headerLabel} />
)

export default App
