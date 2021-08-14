import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux'; // 1
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'; // 2
import HomeScreen from './src/components/screens/HomeScreen';
import * as reducers from './src/store/reducers';
import thunk from 'redux-thunk';
import { AlbumsProvider } from './src/components/contexts/albums-context';
import AlbumList from './src/components/organisms/AlbumList';
import Routes from './src/routes/Routes';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(compose(thunk)),
); // 3

const App = () => {
  return (
    <Provider store={store}>
      <AlbumsProvider>
        <SafeAreaView>
          <Routes />
        </SafeAreaView>
      </AlbumsProvider>    
    </Provider>
  );
};

export default App;
