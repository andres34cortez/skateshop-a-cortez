import React from "react";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "jsxstyle";
import './Cart.css';

export default function Cart() {
  const { cantCart, cartProducts } = useContext(cartContext); ///añadir Clean y remover item
  
  const productoCarrito = cartProducts.map((producto) => {
    return (
      <div key={producto.id}>
        <h1>{producto.title}</h1>
        <h1>{producto.amount}</h1>
      </div>
    )
  } )
  return (
    <div className="CartContainer">
      {productoCarrito}
      carrito de compra CON {cantCart} ITEMS
      
    </div> // por ahora solo llego
    
  );
}
