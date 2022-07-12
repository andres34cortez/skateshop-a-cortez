import React from "react";
import { createContext, useState } from "react";

export const cartContext = createContext();
export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [cantCart, setCantCart] = useState(0);

  const clear = () => {
    setCartProducts([]);
  };

  const addItem = (productInfo, cantCount) => {
    const inCart = cartProducts.find((item) => {
      return item.id === productInfo.id;
    });

    if (inCart) {
      setCartProducts(
        cartProducts.map((item) => {
          if (item.id === productInfo.id) {
            return { ...inCart, amount: inCart.amount + cantCount };
          } else return item;
        })
      );
    } else {
      setCartProducts([
        ...cartProducts,
        { ...productInfo, amount: 1, cantCount: 1 },
      ]);
    }

    setCantCart(cantCart + cantCount);
    console.log(cartProducts);
  };
  return (
    <cartContext.Provider value={{ clear, addItem, cantCart, cartProducts }}>
      {children}
    </cartContext.Provider>
  );
}
