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


export default function Header({categories,PageName="Men's Shoes",navigation}) {

  const renderItem = ({ item }) => (
    <CategoryButton mode="contained" buttonColor="white">
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
        <Text variant="heading2">{PageName}</Text>
        <IconButton icon="magnify" iconColor="white" />
      </HeaderRow>
      <HeaderRow>
        <HorizontalScrollView  data={categories}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false} />
      </HeaderRow>
      <HeaderRow>
        <Button icon="filter-variant" textColor="white">
          <Text>Filter</Text>
        </Button>
        <Button icon="swap-vertical" textColor="white">
          <Text>Price:Low to High</Text>
        </Button>
        <IconButton icon="view-list" iconColor="white" />
      </HeaderRow>
    </HeaderContainer>
  );
}
