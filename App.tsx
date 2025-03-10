import './gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import {Text} from 'react-native';
import Navigation from './src/navigation/Navigation';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
