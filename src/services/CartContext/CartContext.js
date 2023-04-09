import { createContext, useEffect, useState } from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartsContext = createContext();

export default function CartsContextProvider({ children }) {
  const [carts, setCarts] = useState({
    items: [],
    total: 0,
    discountedTotal: 0,
    totalProducts: 0,
    totalQuantity: 0,
  });
  const [cartsLoaded, setCartsLoaded] = useState(false);

  const calculateTotals = (items) => {
    const total = items.reduce(
      (acc, item) => acc + parseFloat(item.total),
      0
    );
    const discountedTotal = items.reduce(
      (acc, item) => acc + parseFloat(item.discountedPrice),
      0
    );
    const totalProducts = items.length;
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    return {
      total,
      discountedTotal,
      totalProducts,
      totalQuantity,
    };
  };

  const saveCarts = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@carts`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadcarts = async () => {
    try {
      const value = await AsyncStorage.getItem(`@carts`);
      if (value !== null) {
        const parsedValue = JSON.parse(value);
        setCarts(parsedValue);
        setCartsLoaded(true);
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };

  const add = (item) => {
    const quantity = 1; 
    const total = item.price * quantity;
    const discountedPrice =
      total * (1 - item.discountPercentage / 100).toFixed(2);
    const newItem = {
      ...item,
      quantity,
      total,
      discountedPrice,
    };
    const newItems = [...carts.items, newItem];
    const calculatedTotals = calculateTotals(newItems);
    setCarts({
      ...carts,
      items: newItems,
      ...calculatedTotals,
    });
  };

  const remove = (item) => {
    const newItems = carts.items.filter((x) => x.id !== item.id);
    const calculatedTotals = calculateTotals(newItems);
    setCarts({
      ...carts,
      items: newItems,
      ...calculatedTotals,
    });
  };

  const incrementQuantity = (item) => {
    const newItems = carts.items.map((x) => {
      if (x.id === item.id) {
        return {
          ...x,
          quantity: x.quantity + 1,
          total: (x.price * (x.quantity + 1)).toFixed(2),
          discountedPrice: (
            x.price *
            (x.quantity + 1) *
            (1 - x.discountPercentage / 100)
          ).toFixed(2),
        };
      } else {
        return x;
      }
    });
    const calculatedTotals = calculateTotals(newItems);
    setCarts({
      ...carts,
      items: newItems,
      ...calculatedTotals,
    });
  };
  const decrementQuantity = (item) => {
    const updatedItems = carts.items.filter((x) => {
      if (x.id === item.id) {
        if (x.quantity > 1) {
          return true; // Keep the item if its quantity is greater than 1
        } else {
          return false; // Remove the item if its quantity is 1
        }
      } else {
        return true; // Keep all other items
      }
    });
  
    const newItems = updatedItems.map((x) => {
      if (x.id === item.id) {
        return {
          ...x,
          quantity: x.quantity - 1,
          total: (x.price * (x.quantity - 1)).toFixed(2),
          discountedPrice: (
            x.price * (x.quantity - 1) * (1 - x.discountPercentage / 100)
          ).toFixed(2),
        };
      } else {
        return x;
      }
    });
  
    const calculatedTotals = calculateTotals(newItems);
    setCarts({
      ...carts,
      items: newItems,
      ...calculatedTotals,
    });
  };
  
  

  useEffect(() => {
    cartsLoaded && saveCarts(carts);
  }, [carts]);

  useEffect(() => {
    loadcarts();
  }, []);

  return (
    <CartsContext.Provider
      value={{
        carts,
        addToCarts: add,
        removeFromCarts: remove,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartsContext.Provider>
  );
}
