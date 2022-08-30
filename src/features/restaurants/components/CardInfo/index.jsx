import React from 'react';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';
import {
  CardContainer,
  CardCover,
  Icon,
  Info,
  Address,
  Rating,
  Section,
  SectionEnd,
} from './CardInfo.styles';

import { Spacer } from '../../../../components/Spacer';
import { Text } from '../../../../components/Typography';
import { Favourite } from '../../../favourites/components/Favourite';

import star from '../../../../../assets/star';
import open from '../../../../../assets/open';

export const CardInfo = ({ restaurant }) => {
  const {
    name,
    rating,
    photos,
    vicinity,
    isClosedTemporarily,
    isOpenNow,
    icon,
    key,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <CardContainer elevation={5}>
      <View>
        <Favourite restaurant={restaurant} />
        <CardCover key={name} source={{ uri: photos[0] }} />
      </View>
      <Info>
        <Text variant="label">{name}</Text>
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
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </CardContainer>
  );
};
