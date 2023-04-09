import { useContext } from "react";
import { IconButton } from "react-native-paper";
import { CartsContext } from "../services/CartContext/CartContext";



export const Cart = ({ item,style=null }) => {
    const { carts, addToCarts, removeFromCarts } = useContext(CartsContext);
  
    const isInCart = carts.items.find((r) => r.id === item.id);

    return(
      <>
        {isInCart && <IconButton
          icon="cart-outline"
          mode="contained"
          iconColor= "white"
          containerColor='#EF3651' 
          style={style}
        />}
        </>
    )
};  