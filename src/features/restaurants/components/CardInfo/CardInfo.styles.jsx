import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.MEDIUM};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space.MEDIUM};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space.SMALL};
  padding-bottom: ${(props) => props.theme.space.SMALL};
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
