import React, { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native-paper';

import { RestaurantList } from '../../../restaurants/components/List';
import { CardInfo } from '../../components/CardInfo';
import { Spacer } from '../../../../components/Spacer';
import { SafeArea } from '../../../../components/SafeArea';
import { Spinner } from '../../../../components/Spinner';
import { FadeInView } from '../../../../components/FadeInView';
import { FavouritesBar } from '../../../../features/favourites/components/FavouritesBar';

import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';
import { FavouritesContext } from '../../../../services/favourites/favourites.context';
import { SearchBar } from '../../components/SearchBar';

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      {isLoading && (
        <Spinner size={50} animating={true} color={Colors.blue300} />
      )}
      <SearchBar
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
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
                <FadeInView>
                  <CardInfo restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
