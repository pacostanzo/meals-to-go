import React, { useContext } from 'react';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfoCard } from '../../components/CardInfo';
import { Spacer } from '../../../../components/Spacer';
import { SafeArea } from '../../../../components/SafeArea';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

import { SearchContainer, RestaurantListContainer } from './Restaurants.styles';

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
