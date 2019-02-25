/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore,applyMiddleware  } from 'redux';
import rootReducer from './src/app/common/reducers';
import {AppRegistry} from 'react-native';
import App from './src/app/common/components/App';
import {name as appName} from './app.json';
import {getCocktails} from './src/app/common/actionCreators'


const loggerMiddleware = createLogger();

const store = createStore(rootReducer,  applyMiddleware(
    thunk,
    loggerMiddleware
  ));
// getAllCocktails(store.dispatch);
store.dispatch(getCocktails());

const RNRApp = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRApp);
