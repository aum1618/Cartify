import React, { useContext, useState } from 'react'
import { Wrapper } from '../../infrastructure/components/wrappper/wrapper'
import { Text } from '../../infrastructure/components/typography/Text'
import Header from './ShopScreenComponents/header/Header'
import SaleBanner from './ShopScreenComponents/saleBanner/SaleBanner'
import CategoryCard from './ShopScreenComponents/categoryCard/CategoryCard'
import { TouchableOpacity } from 'react-native'
import { StoreDataContext } from '../../services/storeData/StoreDataContext'
import { FlatList } from 'react-native'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

export default function CategoriesScreen({navigation}) {
  const {storeData} = useContext(StoreDataContext)

 

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate("ShopItems",{category:item})} >
      <CategoryCard category={item} />
    </TouchableOpacity>
  )

  return (
    <Wrapper>
   <Header />
   
      <SaleBanner />
      <FlatList
        data={Object.keys(storeData)}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </Wrapper>
  )
}
