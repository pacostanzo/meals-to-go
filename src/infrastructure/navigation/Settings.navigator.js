import React from 'react';
import { SettingsScreen } from '../../features/settings/screens/Settings';
import { FavouritesScreen } from '../../features/favourites/screens/Favourites';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="TSettings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
