import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';

import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';

const Stack = createStackNavigator();

interface MainNavigationParams {
  isAuthenticated: boolean;
}

const MainNavigation = ({ isAuthenticated }: MainNavigationParams) => (
  <Stack.Navigator
    initialRouteName={isAuthenticated ? Routes.Home : Routes.Login}
    screenOptions={{ headerShown: false }}
  >
    {isAuthenticated ? (
      <>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem} />
      </>
    ) : (
      <>
        <Stack.Screen name={Routes.Login} component={Login} />
        <Stack.Screen name={Routes.Registration} component={Registration} />
      </>
    )}
  </Stack.Navigator>
);

export default MainNavigation;
