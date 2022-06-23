import styled from 'styled-components/native';
import { Text } from 'react-native';
import { Card } from 'react-native-paper';

export const CardContainer = styled(Card)`
  background-color: white;
`;

export const CardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

export const Title = styled(Text)`
  padding: 16px;
  color: red;
`;
