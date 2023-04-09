import { View } from "react-native";
import styled from "styled-components";



export const SaleBannerContainer = styled(View)`
  margin-horizontal: 20px;
  background-color: ${props=>props.theme.colors.sale};
  height: 100px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-vertical: 10px;
`;