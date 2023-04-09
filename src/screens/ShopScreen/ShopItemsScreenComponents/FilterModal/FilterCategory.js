import { View } from "react-native";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { TouchableOpacity } from "react-native";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import { useState } from "react";

export default function FilterCategory() {
    const [selectedCategory, setSelectedCategory] = useState();

    const handleCategoryPress = (Category) => {
        setSelectedCategory(Category);
      };

  return (
    <View
    style={{
      padding: 20,
      justifyContent: "space-between",
    }}
  >
    <Text variant="title" >Category</Text>
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
        selectedCategory === "All" && { backgroundColor: "#EF3651",borderWidth:0 },
      ]}
      onPress={() => handleCategoryPress("All")}
    >
      <Text>All</Text>
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
        selectedCategory === "Men" && { backgroundColor: "#EF3651",borderWidth:0 },
      ]}
      onPress={() => handleCategoryPress("Men")}
    >
      <Text>Men</Text>
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
        selectedCategory === "Women" && { backgroundColor: "#EF3651",borderWidth:0 },
      ]}
      onPress={() => handleCategoryPress("Women")}
    >
      <Text>Women</Text>
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
        selectedCategory === "Boys" && { backgroundColor: "#EF3651",borderWidth:0 },
      ]}
      onPress={() => handleCategoryPress("Boys")}
    >
      <Text>Boys</Text>
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
        selectedCategory === "Girls" && { backgroundColor: "#EF3651",borderWidth:0 },
      ]}
      onPress={() => handleCategoryPress("Girls")}
    >
      <Text>Girls</Text>
    </TouchableOpacity>
  </View>
  </View>
  )
}