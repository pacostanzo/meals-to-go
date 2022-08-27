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
    <Stack.Screen
      options={{
        headerShown: true,
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          color: 'transparent',
        },
      }}
      name="Login"
      component={LoginScreen}
    />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
