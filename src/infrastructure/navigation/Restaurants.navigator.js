import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { RestaurantsScreen } from '../../features/restaurants/screens/Restaurants';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
