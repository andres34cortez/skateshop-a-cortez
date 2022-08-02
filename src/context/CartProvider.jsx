import React from "react";
import { createContext, useState } from "react";
import swal from "sweetalert";

export const cartContext = createContext();
export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [cantCart, setCantCart] = useState(0);

  const clear = () => {
    setCartProducts([]);
    setCantCart(0)
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
        { ...productInfo, amount: cantCount, cantCount: 1 },
      ]);
    }
    
    setCantCart(cantCart + cantCount);
   
  };

  const removeItem = (product) => {
    const removeProduct = cartProducts.filter(item => item.id !== product.id)    

    if(removeProduct){
      setCartProducts(removeProduct);
      setCantCart(cantCart - product.amount);
      swal("Producto Eliminado !", "", "warning");          
    }
  } 
  return (
    <cartContext.Provider value={{ clear, addItem, cantCart, cartProducts, removeItem }}>
      {children}
    </cartContext.Provider>
  );
}
