import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/Home';

import { Routes } from './Routes';

const Stack = createStackNavigator();

const MainNavigation: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true, // Enable gestures for stack navigation
      }}
    >
      <Stack.Screen name="Drawer" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
