import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { Wrapper } from "../../infrastructure/components/wrappper/wrapper";
import Header from "./ShopItemsScreenComponents/header/Header";
import ItemCard from "./ShopItemsScreenComponents/itemCard/ItemCard";
import { StoreDataContext } from "../../services/storeData/StoreDataContext";
import SortModal from "./ShopItemsScreenComponents/SortModal/SortModal";
import FilterModal from "./ShopItemsScreenComponents/FilterModal/FilterModal";

export default function ShopItemsScreen({navigation,route}) {
  const{category}=route.params
  const { storeData} = useContext(StoreDataContext);
  const [data,setData]=useState(Object.values(storeData[category]).flat())
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedSort,setSelectedSort]=useState("Sort By")
  const [selectedFilter,setSelectedFilter]=useState("Filter By")

 
  const toggleSortModal = () => {
    setIsSortModalVisible(!isSortModalVisible);
  };
  const toggleFilterModal = () => {
    setIsFilterModalVisible(!isFilterModalVisible);
  };



  const renderItem = ({ item}) => (
    
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

  const brandFilter=(brand)=>{
    setData(storeData[category][brand])
  }

  return (
    <Wrapper >
      <Header handlePress={brandFilter} brands={Object.keys(storeData[category])} category={category} navigation={navigation} toggleSortModal={toggleSortModal} toggleFilterModal={toggleFilterModal} selectedSort={selectedSort} />
      <SortModal isSortModalVisible={isSortModalVisible} toggleSortModal={toggleSortModal} selectedSort={selectedSort} setSelectedSort={setSelectedSort} />
      <FilterModal isFilterModalVisible={isFilterModalVisible} toggleFilterModal={toggleFilterModal} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </Wrapper>
  );
}
