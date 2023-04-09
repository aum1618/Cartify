import { View, Image } from "react-native";
import { IconButton } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../../../../infrastructure/components/typography/Text";

export const CardContainer = styled(View)` 
    background-color: #2a2c36;
    width: 100%;
    height: 130px;
    border-radius: 8px;
    flex-direction: row;
    shadow-color: #000;
    shadow-offset: { width: 2, height: 10 };
    shadow-opacity: 0.5;
    shadow-radius: 2px;
    elevation: 10;
    margin-vertical: 10px;`;

export const CardImage = styled(Image)`
  height: 100%;
  width: 35%;
`;

export const CardDetails = styled(View)`
  margin-horizontal: 10px;
  flex: 1;
`;

export const CardTitle = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const TitleText = styled(Text)`
  color: white;
`;

export const CardSubTitle = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardIcon = styled(IconButton)``;

export const QuantityContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const QuantityIcon = styled(IconButton).attrs({
  containerColor: "#ABB4BD",
  iconColor: "#2A2C36",
  mode: "contained",
})`
  margin-horizontal: 5px;
`;

export const PriceText = styled(Text)`
  padding-top: 30px;
`;
