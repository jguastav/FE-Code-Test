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


const App = () => {
    return (
      <View>
        <Header headerText={headerLabel} />
        <Text>Drinks List</Text>
      </View>
    );
};


AppRegistry.registerComponent(appName, () => App);
