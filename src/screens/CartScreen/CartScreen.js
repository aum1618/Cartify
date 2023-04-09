import { FlatList, View } from "react-native";
import { Wrapper } from "../../infrastructure/components/wrappper/wrapper";
import CartCard from "./CartScreenComponents/CartCard/CartCard";
import Header from "./CartScreenComponents/header/Header";
import CartTotal from "./CartScreenComponents/CartTotal/CartTotal";
import { useContext } from "react";
import { CartsContext } from "../../services/CartContext/CartContext";

export default function CartScreen() {
  const {carts}=useContext(CartsContext)

  const renderItem = ({ item }) => {
    return(
      <CartCard item={item} />
    )
  }
  return (
    <Wrapper >
      <Header />
      <FlatList data={carts.items} renderItem={renderItem} style={{ margin: 20 }} /> 
      <View style={{height:150}} ></View> 
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <CartTotal total={carts.total} />
      </View>
    </Wrapper>
  );
}
