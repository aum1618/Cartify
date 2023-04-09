import { createContext, useEffect, useState } from "react";
import React from 'react'

export const StoreDataContext = createContext()

export default function StoreDataContextProvider({children}) {
  const [storeData, setStoreData] = useState({})
  const [isLoading,setIsLoading]=useState(false)

  const getStoreData = async () => {
    setIsLoading(true)
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    const groupedData = data.products.reduce((acc, product) => {
      const { category, brand } = product;

      if (!acc[category]) {
        acc[category] = {};
      }

      if (!acc[category][brand]) {
        acc[category][brand] = [];
      }

      acc[category][brand].push(product);

      return acc;
    }, {});
    setStoreData(groupedData)
    setIsLoading(false)
  }


  useEffect(() => {
    getStoreData()
  }, [])

  useEffect(()=>{
    console.log(storeData)
  },[storeData])

  return (
    <StoreDataContext.Provider value={{ storeData,isLoading }}>
      {children}
    </StoreDataContext.Provider>
  )
}
