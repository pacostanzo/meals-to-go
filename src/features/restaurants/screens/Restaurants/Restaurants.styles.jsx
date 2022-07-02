import styled from 'styled-components/native';
import { StatusBar, SafeAreaView } from 'react-native';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.MEDIUM};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.MEDIUM};
`;
