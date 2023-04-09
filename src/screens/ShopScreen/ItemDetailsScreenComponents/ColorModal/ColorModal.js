import { TouchableOpacity, View } from "react-native";
import React from "react";
import ReactNativeModal from "react-native-modal";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { CartButton } from "../../ItemDetailsScreen.styles";
import ShippingSupportButton from "../ShippingSupportButton/ShippingSupportButton";

export default function ColorModal({
  isColorModalVisible,
  toggleColorModal,
  handlePress,
  selectedColor,
  setSelectedColor,
}) {
  const handleColorPress = (color) => {
    setSelectedColor(color);
  };
  return (
    <ReactNativeModal
      isVisible={isColorModalVisible}
      onBackdropPress={toggleColorModal}
      onSwipeComplete={toggleColorModal}
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        style={{
          backgroundColor: "#1E1F28",
          height: 370,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 40,
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
          <Text variant="heading2">Select Color</Text>
        </View>
        <View
          style={{
            padding: 20,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
           style={[
            {
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 0.4,
              backgroundColor: '#EF3651',
              borderColor: "white",
            },
            selectedColor === '#EF3651' && { borderWidth: 2 },
          ]}
          onPress={() => handleColorPress('#EF3651')}
        />
          <Spacer position="left" size="large" />
          <TouchableOpacity
           style={[
            {
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 0.4,
              backgroundColor: '#1E1F28',
              borderColor: "white",
            },
            selectedColor === '#1E1F28' && { borderWidth: 2 },
          ]}
          onPress={() => handleColorPress('#1E1F28')}
        />
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 0.4,
                backgroundColor: '#2A2C36',
                borderColor: "white",
              },
              selectedColor === '#2A2C36' && { borderWidth: 2 },
            ]}
            onPress={() => handleColorPress('#2A2C36')}
          />
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 0.4,
                backgroundColor: '#55D85A',
                borderColor: "white",
              },
              selectedColor === '#55D85A' && { borderWidth: 2 },
            ]}
            onPress={() => handleColorPress('#55D85A')}
          />
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 0.4,
                backgroundColor: '#FF3E3E',
                borderColor: "white",
              },
              selectedColor === '#FF3E3E' && { borderWidth: 2 },
            ]}
            onPress={() => handleColorPress('#FF3E3E')}
          />
          <Spacer position="left" size="large" />
          <TouchableOpacity
            style={[
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 0.4,
                backgroundColor: "#ABB4BD",
                borderColor: "white",
              },
              selectedColor === "#ABB4BD" && { borderWidth: 2 },
            ]}
            onPress={() => handleColorPress("#ABB4BD")}
          />
        </View>
        <ShippingSupportButton title="Color Info" />
        <Spacer size="large" />
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
