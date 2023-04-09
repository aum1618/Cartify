import { useContext } from "react";
import { FavouritesContext } from "../services/FavouritesContext/FavouritesContext";
import { IconButton } from "react-native-paper";



export const Favourite = ({ item,style=null }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(
      FavouritesContext
    );
  
    const isFavourite = favourites.find((r) => r.id === item.id);

    return(
        <IconButton
          icon={isFavourite ? "heart" : "heart-outline"} //change icon based on state
          mode="contained"
          iconColor={isFavourite ? '#EF3651' : "#ABB4BD"} //change icon color based on state
          containerColor="#2A2C36"
          style={style}
          onPress={() =>
            !isFavourite
              ? addToFavourites(item)
              : removeFromFavourites(item)}
        />
    )
};  