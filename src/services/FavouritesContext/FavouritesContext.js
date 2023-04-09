import { createContext, useEffect, useState } from "react";
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";



export const FavouritesContext=createContext()


export default function FavouritesContextProvider({children}) {
    const [favourites, setFavourites] = useState([]);
    const [favouritesLoaded,setFavouritesLoaded]=useState(false)


    const saveFavourites = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem(`@favourites`, jsonValue);
        } catch (e) {
          console.log("error storing", e);
        }
      };

      const loadFavourites = async () => {
        try {
          const value = await AsyncStorage.getItem(`@favourites`);
          if (value !== null) {
            setFavourites(JSON.parse(value))
            setFavouritesLoaded(true)
          }
        } catch (e) {
          console.log("error loading", e);
        }
      };
    
    


    const add = (item) => {
        setFavourites([...favourites, item]);
      };
    
      const remove = (item) => {
        const newFavourites = favourites.filter(
          (x) => x.id !== item.id
        );
    
        setFavourites(newFavourites);
      };

      useEffect(()=>{
        saveFavourites(favourites)
      },[favourites])

      useEffect(()=>{
        loadFavourites()
      },[])

  return (
    <FavouritesContext.Provider value={{
        favourites,
        addToFavourites:add,
        removeFromFavourites:remove
    }} >
        {children}
    </FavouritesContext.Provider>
  )
}