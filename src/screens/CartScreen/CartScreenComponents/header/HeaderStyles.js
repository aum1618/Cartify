import styled from "styled-components";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { FlatList } from "react-native";

export const HeaderContainer = styled(View)`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  margin-bottom:10px

`;

export const Spacer = styled(View)`
  height: 10%;
  width: 100%;
`;

export const HeaderRow = styled(View)`
  width: 100%;
  height: 30%;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 10px;
`;

export const HorizontalScrollView = styled(FlatList)`
  width: 100%;
  height: 100%;
`;

export const CategoryButton = styled(Button)`
  margin: 3px;
`;

export const CategoryButtonText = styled(Text)`
  color: #1e1f28;
`;
