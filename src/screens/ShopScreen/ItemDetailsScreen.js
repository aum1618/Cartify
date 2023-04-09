import React, { useContext, useEffect, useRef, useState } from "react";
import { Wrapper } from "../../infrastructure/components/wrappper/wrapper";
import { Text } from "../../infrastructure/components/typography/Text";
import { ScrollView, View } from "react-native";
import Header from "./ItemDetailsScreenComponents/header/Header";
import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import { Spacer } from "../../infrastructure/components/spacer/spacer";
import { StoreDataContext } from "../../services/storeData/StoreDataContext";
import { FlatList } from "react-native";
import ItemCard from "./ItemDetailsScreenComponents/itemCard/ItemCard";
import VariationButton from "./ItemDetailsScreenComponents/VariationButton/VariationButton";
import ShippingSupportButton from "./ItemDetailsScreenComponents/ShippingSupportButton/ShippingSupportButton";
import {
  CardRating,
  CartButton,
  ImageSwiper,
  InterestsTextContainer,
  ItemDetailsContainer,
  TitleContainer,
  VariationContainer,
} from "./ItemDetailsScreen.styles";
import { Favourite } from "../../components/Favourite";
import { CartsContext } from "../../services/CartContext/CartContext";
import ReactNativeModal from "react-native-modal";
import { TouchableOpacity } from "react-native";
import ColorModal from "./ItemDetailsScreenComponents/ColorModal/ColorModal";
import SizeModal from "./ItemDetailsScreenComponents/SizeModal/SizeModal";

export default function ItemDetailsScreen({ navigation, route }) {
  const { storeData } = useContext(StoreDataContext);
  const { item } = route.params;
  const { addToCarts, carts, incrementQuantity } = useContext(CartsContext);
  const [isSizeModalVisible, setIsSizeModalVisible] = useState(false);
  const [isColorModalVisible, setIsColorModalVisible] = useState(false);
  const [selectedColor,setSelectedColor]=useState("Color")
  const [selectedSize,setSelectedSize]=useState("Size")

  const toggleSizeModal = () => {
    setIsSizeModalVisible(!isSizeModalVisible);
  };

  const toggleColorModal = () => {
    setIsColorModalVisible(!isColorModalVisible);
  };

  
  

  const handlePress = () => {
    const isInCart = carts.items.find((r) => r.id === item.id);
    !isInCart ? addToCarts(item) : incrementQuantity(item);
    console.log("added to cart!");
  };

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: "none",
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: { backgroundColor: "#2A2C36", borderRadius: 30 },
      });
  }, [navigation]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  }, [item]);

  const renderItem = ({ item }) => (
    <ItemCard
      brand={item.brand}
      discountPercentage={item.discountPercentage}
      image={item.thumbnail}
      price={item.price}
      rating={item.rating}
      stock={item.stock}
      title={item.title}
      navigation={navigation}
      item={item}
    />
  );

  const SwiperSlide = ({ uri }) => {
    return <Image source={{ uri }} style={{ flex: 1 }} />;
  };

  const ratingArray = Array.from(new Array(Math.floor(item.rating)));

  const scrollViewRef = useRef(null);

  return (
    <Wrapper>
     <SizeModal handlePress={handlePress} isSizeModalVisible={isSizeModalVisible} toggleSizeModal={toggleSizeModal} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <ColorModal handlePress={handlePress} isColorModalVisible={isColorModalVisible} toggleColorModal={toggleColorModal} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <ScrollView ref={scrollViewRef}>
        <Header navigation={navigation} category={item.category} />
        <ImageSwiper activeDotColor="#2A2C36" loop={false}>
          {item.images.map((image, index) => (
            <SwiperSlide key={index} uri={image} />
          ))}
        </ImageSwiper>
        <ItemDetailsContainer>
          <VariationContainer>
            <VariationButton title={selectedSize}  onPress={toggleSizeModal} />
            <VariationButton title="Color" onPress={toggleColorModal} selectedColor={selectedColor} />
            <Favourite item={item} />
          </VariationContainer>
          <Spacer />
          <TitleContainer>
            <Text variant="heading2">{item.title}</Text>
            <Text variant="heading2">{item.price}$</Text>
          </TitleContainer>
          <Text variant="caption" style={{ color: "#ABB4BD" }}>
            {item.brand}
          </Text>
          <CardRating>
            {ratingArray.map((item, i) => (
              <SvgXml xml={star} key={i} width={20} height={20} />
            ))}
            <Spacer position="left" />
            <Text variant="hint" style={{ color: "#ABB4BD" }}>
              ({item.stock})
            </Text>
          </CardRating>
          <Spacer position="top" size="large" />
          <Text variant="body">
            {item.description}.This product is made with high-quality materials
            to ensure durability and longevity. Designed with comfort and style
            in mind, this product is perfect for everyday use. Whether you're
            using it for work, school, or play, this product is sure to meet all
            your needs.
          </Text>
          <Spacer position="top" size="large" />
          <CartButton
            mode="contained"
            buttonColor="#EF3651"
            onPress={handlePress}
          >
            <Text variant="title">Add To Cart</Text>
          </CartButton>
        </ItemDetailsContainer>
        <Spacer position="top" size="large" />
        <ShippingSupportButton title="Shipping Info" />
        <ShippingSupportButton title="Support" />
        <Spacer position="top" size="large" />
        <InterestsTextContainer>
          <Text variant="title">You may also like this</Text>
          <Text variant="caption" style={{ color: "#ABB4BD" }}>
            {storeData[item.category][item.brand].length}{" "}
            {storeData[item.category][item.brand].length > 1 ? "items" : "item"}
          </Text>
        </InterestsTextContainer>
        <Spacer position="top" size="large" />
        <FlatList
          data={storeData[item.category][item.brand]}
          horizontal={true}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
      
    </Wrapper>
  );
}
