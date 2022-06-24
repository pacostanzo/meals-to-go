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
  padding: ${(props) => props.theme.space.MEDIUM};
  color: ${(props) => props.theme.colors.ui.primary};
`;
