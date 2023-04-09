import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../../../../infrastructure/components/typography/Text";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

export default function FilterPriceRange() {
  const [sliderValues, setSliderValues] = useState([400, 500]);

  const handleSliderValuesChange = (values) => {
    setSliderValues(values);
  };

  return (
    <View
      style={{
        height: 160,
        padding: 20,
        justifyContent: "space-between",
      }}
    >
      <Text variant="title">Price Range</Text>
      <View>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
            flexDirection: "row",
          }}
        >
          <Text>{sliderValues[0]}$</Text>
          <Text>{sliderValues[1]}$</Text>
        </View>
        <MultiSlider
          values={sliderValues}
          min={200}
          max={700}
          sliderLength={350}
          onValuesChange={handleSliderValuesChange}
          selectedStyle={{ backgroundColor: "#EF3651" }}
          markerStyle={{
            backgroundColor: "#EF3651",
            height: 20,
            width: 20,
            borderRadius: 10,
          }}
          pressedMarkerStyle={{ height: 25, width: 25, borderRadius: 12.5 }}
        />
      </View>
    </View>
  );
}
