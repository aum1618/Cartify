import { View } from "react-native";
import React, { useContext } from "react";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import {
  CardContainer,
  CardDetails,
  CardIcon,
  CardImage,
  CardSubTitle,
  CardTitle,
  PriceText,
  QuantityContainer,
  QuantityIcon,
  TitleText,
} from "./CartCardStyles";
import { CartsContext } from "../../../../services/CartContext/CartContext";

export default function CartCard({ item }) {
  const { incrementQuantity, decrementQuantity, removeFromCarts } = useContext(
    CartsContext
  );
  return (
    <CardContainer>
      <CardImage source={{ uri: item.thumbnail }} />
      <CardDetails>
        <CardTitle>
          <View>
            <TitleText>
              {item.title.length > 23
                ? item.title.slice(0, 23) + "..."
                : item.title}
            </TitleText>

            <Spacer />
            <View style={{ flexDirection: "row" }}>
              <Text variant="hint" style={{ color: "#ABB4BD" }}>
                Color:
              </Text>
              <Spacer position="left" size="small" />
              <Text variant="hint">Black</Text>
              <Spacer position="left" size="large" />
              <Text variant="hint" style={{ color: "#ABB4BD" }}>
                Size:
              </Text>
              <Spacer position="left" size="small" />
              <Text variant="hint">L</Text>
            </View>
          </View>
          <CardIcon
            icon="delete"
            iconColor="white"
            size={24}
            onPress={() => removeFromCarts(item)}
          />
        </CardTitle>
        <Spacer size="medium" />
        <CardSubTitle>
          <QuantityContainer>
            <QuantityIcon icon="plus" onPress={() => incrementQuantity(item)} />
            <Text style={{ marginHorizontal: 5 }}>{item.quantity}</Text>
            <QuantityIcon
              icon="minus"
              onPress={() => decrementQuantity(item)}
            />
          </QuantityContainer>
          <PriceText>{item.total}</PriceText>
        </CardSubTitle>
      </CardDetails>
    </CardContainer>
  );
}
