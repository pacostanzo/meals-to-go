import React, { useContext } from 'react';
import { Searchbar, Colors } from 'react-native-paper';

import { RestaurantInfoCard } from '../../components/CardInfo';
import { Spacer } from '../../../../components/Spacer';
import { SafeArea } from '../../../../components/SafeArea';
import { Spinner } from '../../../../components/Spinner';

import { SearchContainer, RestaurantListContainer } from './Restaurants.styles';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <Spinner size={50} animating={true} color={Colors.blue300} />
      )}
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
