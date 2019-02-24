/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/app/common/reducers';
import {AppRegistry} from 'react-native';
import App from './src/app/common/components/App';
import {name as appName} from './app.json';

const store = createStore(rootReducer)

const RNRApp = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRApp);
