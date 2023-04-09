import React from "react";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { IconButton } from "react-native-paper";
import {
  HeaderContainer,
  HeaderRow,
  Spacer,
} from "./HeaderStyles";


export default function Header() {
  return (
    <HeaderContainer>
      <Spacer />
      <HeaderRow>
        
        
        <IconButton icon="magnify" iconColor="white" />
      </HeaderRow>
     
      <HeaderRow style={{flexDirection:"row"}} >
      <Text variant="heading1" >My Cart</Text>
      </HeaderRow>
    </HeaderContainer>
  );
}
