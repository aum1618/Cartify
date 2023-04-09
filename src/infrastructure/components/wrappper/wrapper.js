import { StatusBar, View } from "react-native";
import styled from "styled-components";

export const Wrapper = styled(View)`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
  width: 100%;
`;
