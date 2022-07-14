import React from 'react';

import { CardInfo } from '../../components/CardInfo';

import { SafeArea } from '../../../../components/SafeArea';

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <CardInfo restaurant={restaurant} />
    </SafeArea>
  );
};
