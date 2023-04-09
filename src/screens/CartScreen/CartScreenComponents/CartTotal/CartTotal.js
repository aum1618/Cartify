import React from "react";
import { View } from "react-native";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Button } from "react-native-paper";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";

export default function CartTotal({total}) {
  return (
    <View style={{ backgroundColor: "#1E1F28", padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignITems: "center",
        }}
      >
        <Text variant="body" style={{ color: "#ABB4BD" }}>
          Total Amount:
        </Text>
        <Text variant="heading2">{total}$</Text>
      </View>
      <Spacer size="large" />
      <Spacer size="large" />
      <Button
        mode="contained"
        buttonColor="#EF3651"
        style={{
          height: 50,
          borderRadius: 99,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text variant="title">CheckOut</Text>
      </Button>
    </View>
  );
}
