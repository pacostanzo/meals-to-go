import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { FavouritesContext } from '../../../../services/favourites/favourites.context';

import { Text } from '../../../../components/Typography';
import { Spacer } from '../../../../components/Spacer';
import { SafeArea } from '../../../../components/SafeArea';

import { RestaurantList } from '../../../restaurants/components/List';
import { CardInfo } from '../../../restaurants/components/CardInfo';

import { NoFavouritesArea } from './Favourites.styles';

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetail', {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <CardInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
