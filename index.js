/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {AppRegistry,View,Text} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {headerLabel as headerLabel} from './src/app/common/labels.json';
import CocktailMasterDetail from './src/app/cocktail_master_detail/CocktailMasterDetailComponent';


const App = () => {
    return (
      <CocktailMasterDetail initialView="master" headerLabel={headerLabel}/>
    );
};


AppRegistry.registerComponent(appName, () => App);
