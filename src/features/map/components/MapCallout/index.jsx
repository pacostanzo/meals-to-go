import React from 'react';

import { CompactRestaurantInfo } from '../../../restaurants/components/CompactCardInfo';

export const MapCallout = ({ restaurant }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
