import React, { useEffect, useRef, useState } from 'react';
import { AppState, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';

import AnimatedBootSplash from './components/SplashScreen/SplashScreen';
import MainNavigation from './navigation/MainNavigation';
import { checkToken } from './api/user';
import { persistor, RootState } from './redux/store';
import store from './redux/store';
import globalStyle from './assets/styles/globalStyle';

const App: React.FC = () => {
  const appState = useRef(AppState.currentState);
  const [visible, setVisible] = useState(true); // State for splash screen visibility

  useEffect(() => {
    const subscription = AppState.addEventListener('change', async nextAppState => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        console.log('You have come back into the app');
        await checkToken();
        // Handle any other logic when app comes back to foreground
      }

      appState.current = nextAppState;
    });

    checkToken();
    console.log('Application has rendered');

    return () => {
      subscription.remove(); // Clean up the event listener
    };
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <View style={globalStyle.flex}>
          {/* Main content */}
          {!visible && <AppContent />}

          {/* Splash Screen */}
          {visible && (
            <AnimatedBootSplash
              onAnimationEnd={() => setVisible(false)} // Hide splash screen
            />
          )}
        </View>
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
