import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../features/account/screens/Account';
import { LoginScreen } from '../../features/account/screens/Login';
import { RegisterScreen } from '../../features/account/screens/Register';

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Regiser" component={RegisterScreen} />
  </Stack.Navigator>
);
