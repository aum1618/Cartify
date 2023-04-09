import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ShopNavigater } from "../shopScreenNavigater/ShopScreenNavigater";
import FavouritesScreen from "../../../screens/FavouritesScreen/FavouritesScreen";
import CartScreen from "../../../screens/CartScreen/CartScreen";

const MainTabs = createBottomTabNavigator();

export const MainTabNavigater = () => {
  return (
    <NavigationContainer>
      <MainTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "#2A2C36", borderRadius: 30 },
        }}
      >
        <MainTabs.Screen
          name="Shop"
          component={ShopNavigater}
          options={{ modal: true }}
        />
        <MainTabs.Screen name="Favourites" component={FavouritesScreen} />
        <MainTabs.Screen name="Cart" component={CartScreen} />
      </MainTabs.Navigator>
    </NavigationContainer>
  );
};
