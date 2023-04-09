import { View } from "react-native";
import React from "react";
import ReactNativeModal from "react-native-modal";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { TouchableOpacity } from "react-native";
import { CartButton } from "../../ItemDetailsScreen.styles";

export default function SizeModal({
  isSizeModalVisible,
  handlePress,
  toggleSizeModal,
  selectedSize,
  setSelectedSize,
}) {
  const handleSizePress = (size) => {
    setSelectedSize(size);
  };

  return (
    <ReactNativeModal
      isVisible={isSizeModalVisible}
      onBackdropPress={toggleSizeModal}
      onSwipeComplete={toggleSizeModal}
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        style={{
          backgroundColor: "#1E1F28",
          height: 370,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 50,
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              height: 5,
              width: 100,
              borderRadius: 30,
            }}
          />
        </View>
        <Spacer size="medium" />
        <View
          style={{
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text variant="heading2">Select Size</Text>
        </View>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <TouchableOpacity
            style={[
              {
                padding: 15,
                width: 100,
                borderRadius: 8,
                borderColor: "white",
                borderWidth: 0.4,
                justifyContent: "center",
                alignItems: "center",
              },
              selectedSize === "S" && { borderColor: "#EF3651" },
            ]}
            onPress={() => handleSizePress("S")}
          >
            <Text>S</Text>
          </TouchableOpacity>
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                padding: 15,
                width: 100,
                borderRadius: 8,
                borderColor: "white",
                borderWidth: 0.4,
                justifyContent: "center",
                alignItems: "center",
              },
              selectedSize === "M" && { borderColor: "#EF3651" },
            ]}
            onPress={() => handleSizePress("M")}
          >
            <Text>M</Text>
          </TouchableOpacity>
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                padding: 15,
                width: 100,
                borderRadius: 8,
                borderColor: "white",
                borderWidth: 0.4,
                justifyContent: "center",
                alignItems: "center",
              },
              selectedSize === "L" && { borderColor: "#EF3651" },
            ]}
            onPress={() => handleSizePress("L")}
          >
            <Text>L</Text>
          </TouchableOpacity>
        </View>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <TouchableOpacity
            style={[
              {
                padding: 15,
                width: 100,
                borderRadius: 8,
                borderColor: "white",
                borderWidth: 0.4,
                justifyContent: "center",
                alignItems: "center",
              },
              selectedSize === "XL" && { borderColor: "#EF3651" },
            ]}
            onPress={() => handleSizePress("XL")}
          >
            <Text>XL</Text>
          </TouchableOpacity>
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                padding: 15,
                width: 100,
                borderRadius: 8,
                borderColor: "white",
                borderWidth: 0.4,
                justifyContent: "center",
                alignItems: "center",
              },
              selectedSize === "XXL" && { borderColor: "#EF3651" },
            ]}
            onPress={() => handleSizePress("XXL")}
          >
            <Text>XXL</Text>
          </TouchableOpacity>
        </View>
        <Spacer position="top" size="large" />
        <View style={{ marginHorizontal: 20 }}>
          <Spacer size="large" />
          <CartButton
            mode="contained"
            buttonColor="#EF3651"
            onPress={handlePress}
          >
            <Text variant="title">Add To Cart</Text>
          </CartButton>
        </View>
      </View>
    </ReactNativeModal>
  );
}
