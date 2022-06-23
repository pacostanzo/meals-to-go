import React from 'react';
import { CardContainer, CardCover, Title } from './CardInfo.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </CardContainer>
  );
};
