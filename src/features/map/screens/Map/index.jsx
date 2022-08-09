import React, { useEffect, useState, useContext } from 'react';

import { LocationContext } from '../../../../services/location/location.context';
import { RestaurantsContext } from '../../../../services/restaurants/restaurants.context';

import { Search } from '../../components/Search';
import { MapCallout } from '../../components/MapCallout';

import { Map } from './Map.styles';

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Map.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Map.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Map.Callout>
            </Map.Marker>
          );
        })}
      </Map>
    </>
  );
};
