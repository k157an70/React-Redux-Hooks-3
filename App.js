import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux';
import RootNavigation from './src/RootNavigation';
import navigationServices from './src/navigationServices';

export default () => {
  return (
    <Provider store={store}>
      <RootNavigation 
        ref={nav => navigationServices.setTopLevelNavigator(nav)}
        />
    </Provider>
  );
};