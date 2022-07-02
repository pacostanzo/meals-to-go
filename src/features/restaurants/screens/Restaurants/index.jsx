import React from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../../components/CardInfo';
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from './Restaurants.styles';

import restaurantsData from '../../../../../assets/restaurants.data';

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      {restaurantsData.map((restaurant) => (
        <RestaurantInfoCard restaurant={restaurant} key={restaurant.key} />
      ))}
    </RestaurantListContainer>
  </SafeArea>
);
