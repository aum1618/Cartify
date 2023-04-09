import { View } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components";
import Swiper from "react-native-swiper";



export const InterestsTextContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

export const CartButton = styled(Button)`
  height: 48px;
  justify-content: center;
  align-items: center;
  background-color: #EF3651;
`;

export const TitleContainer = styled(View)`
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const ItemDetailsContainer = styled(View)`
   margin:20px;
`;

export const VariationContainer = styled(View)`
 
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ImageSwiper=styled(Swiper)`
height:410px;
`
export const CardRating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
`;
