import React from "react";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "jsxstyle";

export default function Cart() {
  const { cantCart, cartProducts } = useContext(cartContext); ///añadir Clean y remover item
  console.log(cartProducts[0].title,cartProducts[1].title);
  const productoCarrito = cartProducts.map((producto) => {
    return (
      <div key={producto.id}>
        <h1>{producto.title}</h1>
        <h1>{producto.amount}</h1>
      </div>
    )
  } )
  return (
    <div>
      {productoCarrito}
      carrito de compra CON {cantCart} ITEMS
      
    </div> // por ahora solo llego
    
  );
}
