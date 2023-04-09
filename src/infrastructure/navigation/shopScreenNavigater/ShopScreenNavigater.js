import { createStackNavigator } from "@react-navigation/stack";
import CategoriesScreen from "../../../screens/ShopScreen/CategoriesScreen";
import ShopItemsScreen from "../../../screens/ShopScreen/ShopItemsScreen";
import ItemDetailsScreen from "../../../screens/ShopScreen/ItemDetailsScreen";


const Shop=createStackNavigator()

export const ShopNavigater=()=>{
    return(
        <Shop.Navigator screenOptions={{headerShown:false}} >
            <Shop.Screen name="Categories" component={CategoriesScreen} />
            <Shop.Screen  name="ShopItems"  component={ShopItemsScreen} />
            <Shop.Screen name="ItemDetails" component={ItemDetailsScreen}/>
        </Shop.Navigator>
    )
}