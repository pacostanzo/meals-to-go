import React from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../components/CardInfo';
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from './Home.styles';

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
