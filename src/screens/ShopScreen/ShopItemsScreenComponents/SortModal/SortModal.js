import { TouchableOpacity, View } from "react-native";
import ReactNativeModal from "react-native-modal";
import { Spacer } from "../../../../infrastructure/components/spacer/spacer";
import { Text } from "../../../../infrastructure/components/typography/Text";


export default function SortModal({
  isSortModalVisible,
  toggleSortModal,
  selectedSort,
  setSelectedSort,
}) {
  const handleSortPress = (sort) => {
    setSelectedSort(sort);
  };

  return (
    <ReactNativeModal
      isVisible={isSortModalVisible}
      onBackdropPress={toggleSortModal}
      onSwipeComplete={toggleSortModal}
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
          <Text variant="heading2">Sort by</Text>
        </View>
        <Spacer size="large" />
        <TouchableOpacity style={[
              { padding: 20},
              selectedSort === "Popularity" && { backgroundColor: "#EF3651" },
            ]} onPress={() => handleSortPress("Popularity")} >
        <Text variant="title">Popularity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
              { padding: 20},
              selectedSort === "Newest" && { backgroundColor: "#EF3651" },
            ]} onPress={() => handleSortPress("Newest")} >
        <Text variant="title">Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
              { padding: 20},
              selectedSort === "Price:Low to High" && { backgroundColor: "#EF3651" },
            ]} onPress={() => handleSortPress("Price:Low to High")} >
        <Text variant="title">Price:Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[
              { padding: 20},
              selectedSort === "Price:High to Low" && { backgroundColor: "#EF3651" },
            ]} onPress={() => handleSortPress("Price:High to Low")} >
        <Text variant="title">Price:High to Low</Text>
        </TouchableOpacity>
      </View>  
    </ReactNativeModal>
  );
}
