import React from 'react';
import { Text, Image, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  CardContainer,
  CardCover,
  Title,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
} from './CardInfo.styles';

import { Spacer } from '../../../../components/Spacer';

import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

export const RestaurantInfoCard = ({ restaurant }) => {
  const {
    name,
    rating,
    photos,
    address,
    isClosedTemporarily,
    isOpenNow,
    icon,
    key,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${key}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: 'red' }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardContainer>
  );
};
