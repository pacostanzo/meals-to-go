import styled from "styled-components/native";
import { FlatList } from "react-native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.MEDIUM};
`;

export const RestaurantListContainer = styled(FlatList)`
  padding: ${(props) => props.theme.space.MEDIUM};
`;
