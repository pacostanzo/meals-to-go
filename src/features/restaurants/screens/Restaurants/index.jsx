import React from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../../components/CardInfo';
import { Spacer } from '../../../../components/Spacer';

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
    <RestaurantListContainer
      data={restaurantsData}
      renderItem={({ item }) => (
        <Spacer position="bottom" size="large">
          <RestaurantInfoCard restaurant={item} />
        </Spacer>
      )}
      keyExtractor={(item) => item.key}
    />
  </SafeArea>
);
