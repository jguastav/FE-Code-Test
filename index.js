/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {AppRegistry,Text} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

const App = () => {
    return (
    <Text>Hello World</Text>
    );
};


AppRegistry.registerComponent(appName, () => App);
