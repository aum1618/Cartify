import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import styled from "styled-components";


export const CardContainer = styled(TouchableOpacity)`
  width: 45%;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
`;

export const CardImage = styled(Image)`
  height: 185px;
  width: 100%;
  border-radius: 8px;
`;

export const CardRating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
`;



