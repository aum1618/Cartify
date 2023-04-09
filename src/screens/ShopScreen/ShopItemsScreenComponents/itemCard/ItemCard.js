import { View } from "react-native";
import React, { useState } from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import { CardContainer, CardImage, CardRating } from "./ItemCardStyles";
import { IconButton } from "react-native-paper";
import { Favourite } from "../../../../components/Favourite";
import { Cart } from "../../../../components/Cart";

export default function ItemCard({
  image = "https://source.unsplash.com/random/?fashion/",
  rating = 3,
  price = 12.99,
  stock = 10,
  brand = "T-Shirt",
  title = "Dorothy",
  discountPercentage = 12,
  navigation,
  item
}) {
  const discountPrice = price - ((price * discountPercentage) / 100).toFixed(2);
  const ratingArray = Array.from(new Array(Math.floor(rating)));

 

  return (
    <CardContainer onPress={()=>navigation.navigate("ItemDetails", { item:item })}>
      <View style={{ position: "relative" }}>
        <CardImage source={{ uri: image }} />
       <Favourite item={item}style={{ position: "absolute", bottom: -15, right: -15 }} />
       <Cart item={item}style={{ position: "absolute", bottom: -15, right: -15,zIndex:10 }}  />
      </View>
      <CardRating>
        {ratingArray.map((item, i) => (
          <SvgXml xml={star} key={i} width={20} height={20} />
        ))}
        <Spacer position="left" />
        <Text variant="hint" style={{ color: "#ABB4BD" }}>
          ({stock})
        </Text>
      </CardRating>
      <Text variant="caption" style={{ color: "#ABB4BD" }}>
        {brand}
      </Text>
      <Text variant="title">{title}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text
          variant="description"
          style={{ color: "#ABB4BD", textDecorationLine: "line-through" }}
        >
          {price}$
        </Text>
        <Spacer position="left" />
        <Text variant="description" style={{ color: "#FF3E3E" }}>
          {discountPrice}$
        </Text>
      </View>
    </CardContainer>
  );
}
