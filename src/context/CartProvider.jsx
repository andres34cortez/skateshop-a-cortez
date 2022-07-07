import React from 'react'
import { createContext, useState } from 'react'

export const cartContext = createContext();
export default function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const [cantCart, setCantCart] =useState(0);
    
    const clear = () => {
        setCartProducts ([]);
    }

    const addItem = (productInfo, btnClick) => {
        console.log(productInfo);
       /*  setCantidad(btnClick);
        setCantCart(cantidad + btnClick); */
        setCantCart(cantCart + btnClick);
    }
  return (
   <cartContext.Provider value={{clear, addItem,cantCart}}>
    {children}
   </cartContext.Provider>
  )
}
