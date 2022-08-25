import React from 'react';

import { Platform } from 'react-native';

import { Text } from '../../../../components/Typography';

import { Item, CompactWebview, CompactImage } from './CompactCardInfo.styles';

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
