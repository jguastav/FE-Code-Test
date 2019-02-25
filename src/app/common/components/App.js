import React from 'react'
import CocktailMasterDetailContainer from '../../cocktail_master_detail/CocktailMasterDetailContainer';
import {headerLabel} from '../labels.json';
import { ViewMode } from '../actionCreators'


const App = () => (
  <CocktailMasterDetailContainer initialView={ViewMode.MASTER} headerLabel={headerLabel} />
)

export default App
