import React, { useContext } from 'react'
import { Wrapper } from '../../infrastructure/components/wrappper/wrapper'
import Header from './FavouritesScreenComponents/header/Header'
import { FavouritesContext } from '../../services/FavouritesContext/FavouritesContext'
import ItemCard from './FavouritesScreenComponents/itemCard/ItemCard'
import { FlatList } from 'react-native'

export default function FavouritesScreen({navigation}) {
    const {favourites}=useContext(FavouritesContext)

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

  return (
   <Wrapper>
    <Header PageName='Favourites' navigation={navigation} />
    <FlatList
        data={favourites}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
   </Wrapper>
  )
}