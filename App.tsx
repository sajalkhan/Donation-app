import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';

import MainNavigation from './navigation/MainNavigation';
import { checkToken } from './api/user';
import { persistor, RootState } from './redux/store';
import store from './redux/store';

const App: React.FC = () => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener('change', async nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('You have come back into the app');
        await checkToken();
        //we are coming from background to the foreground
      }

      appState.current = nextAppState;
    });
    checkToken();
    console.log('Application has rendered');
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <AppContent />
      </PersistGate>
    </Provider>
  );
};

const AppContent: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <MainNavigation isAuthenticated={isLoggedIn} />
      <Toast topOffset={20} />
    </NavigationContainer>
  );
};

export default App;
