import React from "react";
import { Text } from "../../../../infrastructure/components/typography/Text";
import { Button, IconButton } from "react-native-paper";
import {
  CategoryButton,
  CategoryButtonText,
  HeaderContainer,
  HeaderRow,
  HorizontalScrollView,
  Spacer,
} from "./HeaderStyles";
import { ScrollView } from "react-native";
import { View } from "react-native";

export default function Header({brands,category,navigation,handlePress,toggleSortModal,selectedSort,toggleFilterModal}) {

  const renderItem = ({ item }) => (
    <CategoryButton mode="contained" buttonColor="white" onPress={()=>handlePress(item)} >
      <CategoryButtonText style={{ color: "#1E1F28" }}>
        {item}
      </CategoryButtonText>
    </CategoryButton>
  );
  return (
    <HeaderContainer>
      <Spacer />
      <HeaderRow>
        <IconButton icon="chevron-left" iconColor="white" onPress={()=>navigation.goBack()} />
        <Text variant="heading2">{category}</Text>
        <IconButton icon="magnify" iconColor="white" />
      </HeaderRow>
      <HeaderRow>
        <HorizontalScrollView  data={brands}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false} />
      </HeaderRow>
      <HeaderRow>
        <Button icon="filter-variant" textColor="white" onPress={toggleFilterModal}>
          <Text>Filter</Text>
        </Button>
        <Button icon="swap-vertical" textColor="white" onPress={toggleSortModal} >
          <Text>{selectedSort}</Text>
        </Button>
        <IconButton icon="view-list" iconColor="white" />
      </HeaderRow>
    </HeaderContainer>
  );
}
