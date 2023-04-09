import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { IconButton } from "react-native-paper";
import styled from "styled-components/native";

const VariationButtonContainer = styled(TouchableOpacity)`
  width: 40%;
  height: 50px;
  margin-horizontal: 5px;
  border-color: #ABB4BD;
  border-width: 0.4px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
`;

export default function VariationButton({title,onPress,selectedColor="#ABB4BD"}) {
  return (
    <VariationButtonContainer
      style={[
        {
        width: "40%",
        height: 50,
        marginHorizontal: 5,
        borderColor: selectedColor === "#ABB4BD"?"#ABB4BD":selectedColor,
        borderWidth: 0.4,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        justifyContent: "space-between",
      },
      selectedColor !=="#ABB4BD" && { borderWidth: 2 },
    ]} 
      onPress={onPress} 
    >
      <Text variant="body">{title}</Text>
      <IconButton icon="chevron-down" iconColor="white" size={20}  />
    </VariationButtonContainer>
  );
}
