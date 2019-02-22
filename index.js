/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {AppRegistry,View,Text} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {headerLabel as headerLabel} from './src/app/common/labels.json';
import Header from './src/app/common/HeaderComponent';
import CocktailList from './src/app/cocktail_list/CocktailListComponent';


const App = () => {
    return (
      <View>
        <Header headerText={headerLabel} />
        <CocktailList />
      </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
