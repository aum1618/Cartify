import React, { useState } from 'react'
import { View } from 'react-native'
import { Text } from '../../../../infrastructure/components/typography/Text'
import { TouchableOpacity } from 'react-native'
import { Spacer } from '../../../../infrastructure/components/spacer/spacer'

export default function FilterColor() {
    const [selectedColor, setSelectedColor] = useState();

    const handleColorPress = (color) => {
        setSelectedColor(color);
      };

  return (
    <View
          style={{
            height: 130,
            padding: 20,
            justifyContent: "space-between",
          }}
        >
          <Text variant="title">Colors</Text>
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
                  backgroundColor: "#EF3651",
                  borderColor: "white",
                },
                selectedColor === "#EF3651" && { borderWidth: 2 },
              ]}
              onPress={() => handleColorPress("#EF3651")}
            />
            <Spacer position="left" size="large" />
            <TouchableOpacity
              style={[
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 0.4,
                  backgroundColor: "#1E1F28",
                  borderColor: "white",
                },
                selectedColor === "#1E1F28" && { borderWidth: 2 },
              ]}
              onPress={() => handleColorPress("#1E1F28")}
            />
            <Spacer position="left" size="large" />
            <TouchableOpacity
              style={[
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 0.4,
                  backgroundColor: "#2A2C36",
                  borderColor: "white",
                },
                selectedColor === "#2A2C36" && { borderWidth: 2 },
              ]}
              onPress={() => handleColorPress("#2A2C36")}
            />
            <Spacer position="left" size="large" />
            <TouchableOpacity
              style={[
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 0.4,
                  backgroundColor: "#55D85A",
                  borderColor: "white",
                },
                selectedColor === "#55D85A" && { borderWidth: 2 },
              ]}
              onPress={() => handleColorPress("#55D85A")}
            />
            <Spacer position="left" size="large" />
            <TouchableOpacity
              style={[
                {
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 0.4,
                  backgroundColor: "#FF3E3E",
                  borderColor: "white",
                },
                selectedColor === "#FF3E3E" && { borderWidth: 2 },
              ]}
              onPress={() => handleColorPress("#FF3E3E")}
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
        </View>
  )
}