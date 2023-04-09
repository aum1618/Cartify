import {View } from "react-native";
import ReactNativeModal from "react-native-modal";
import FilterModalHeader from "./FilterModalHeader";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Button } from "react-native-paper";
import FilterPriceRange from "./FilterPriceRange";
import FilterColor from "./FilterColor";
import FilterSize from "./FilterSize";
import FilterCategory from "./FilterCategory";

export default function FilterModal({
  isFilterModalVisible,
  toggleFilterModal,

}) {
  return (
    <ReactNativeModal
      isVisible={isFilterModalVisible}
      onBackdropPress={toggleFilterModal}
      onSwipeComplete={toggleFilterModal}
      swipeDirection={["down"]}
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        style={{
          backgroundColor: "#1E1F28",
          height: "100%",
        }}
      >
        <FilterModalHeader toggleFilterModal={toggleFilterModal} />
        <FilterPriceRange />
        <FilterColor />
        <FilterSize />
        <FilterCategory />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: 10,
          }}
        >
          <Button
            mode="contained"
            buttonColor="#EF3651"
            style={{ width: 160 }}
            onPress={toggleFilterModal}
          >
            <Text>Apply</Text>
          </Button>
          <Button
            mode="outlined"
            style={{ width: 160 }}
            onPress={toggleFilterModal}
          >
            <Text>Discard</Text>
          </Button>
        </View>
      </View>
    </ReactNativeModal>
  );
}
