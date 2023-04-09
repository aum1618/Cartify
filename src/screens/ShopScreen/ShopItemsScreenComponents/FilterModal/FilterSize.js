import { TouchableOpacity, View } from "react-native";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import { useState } from "react";


export default function FilterSize() {
  const [selectedSize, setSelectedSize] = useState();
  const handleSizePress = (size) => {
    setSelectedSize(size);
  };
return(
  <View
  style={{
    height: 140,
    padding: 20,
    justifyContent: "space-between",
   
  }}
>
  <Text variant="title">Sizes</Text>
  <View style={{flexDirection: "row" }}>
  <TouchableOpacity
    style={[
      {
        padding: 20,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        alignItems: "center",
      },
      selectedSize === "S" && { backgroundColor: "#EF3651",borderWidth:0 },
    ]}
    onPress={() => handleSizePress("S")}
  >
    <Text>S</Text>
  </TouchableOpacity>
  <Spacer position="left" size="large" />
  <TouchableOpacity
    style={[
      {
        padding: 20,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        alignItems: "center",
      },
      selectedSize === "M" && { backgroundColor: "#EF3651",borderWidth:0 },
    ]}
    onPress={() => handleSizePress("M")}
  >
    <Text>M</Text>
  </TouchableOpacity>
  <Spacer position="left" size="large" />
  <TouchableOpacity
    style={[
      {
        padding: 20,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        alignItems: "center",
      },
      selectedSize === "L" && { backgroundColor: "#EF3651",borderWidth:0 },
    ]}
    onPress={() => handleSizePress("L")}
  >
    <Text>L</Text>
  </TouchableOpacity>
  <Spacer position="left" size="large" />
  <TouchableOpacity
    style={[
      {
        padding: 20,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        alignItems: "center",
      },
      selectedSize === "XL" && { backgroundColor: "#EF3651",borderWidth:0 },
    ]}
    onPress={() => handleSizePress("XL")}
  >
    <Text>XL</Text>
  </TouchableOpacity>
  <Spacer position="left" size="large" />
  <TouchableOpacity
    style={[
      {
        padding: 20,
        borderRadius: 8,
        borderColor: "white",
        borderWidth: 0.4,
        justifyContent: "center",
        alignItems: "center",
      },
      selectedSize === "XXL" && { backgroundColor: "#EF3651",borderWidth:0 },
    ]}
    onPress={() => handleSizePress("XXL")}
  >
    <Text>XXL</Text>
  </TouchableOpacity>
</View>
</View>
)
}