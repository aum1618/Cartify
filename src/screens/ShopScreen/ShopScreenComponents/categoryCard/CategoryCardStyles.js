import { Image } from "react-native";
import { View } from "react-native";
import styled from "styled-components";



export const CardContainer = styled(View)`
  background-color: ${props=>props.theme.colors.dark};
  height: 120px;
  flex-direction: row;
  padding: 0;
  border-width: 0;
  margin-horizontal: 20px;
  margin-vertical: 10px;
`;

export const LeftContainer = styled(View)`
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const RightContainer = styled(View)`
  height: 100%;
  width: 50%;
`;

export const CardImage = styled(Image)`
  height: 100%;
  width: 100%;
`;