/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import Home from './screens/home';
import {store} from './config/ReduxConfig/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
