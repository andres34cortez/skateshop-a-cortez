import React from "react";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { Col, Row } from "jsxstyle";
import { useNavigate } from "react-router-dom";
import './Cart.css';

export default function Cart() {
  const { cantCart, cartProducts } = useContext(cartContext); ///añadir Clean y remover item
  console.log(cartProducts);
  let navigate = useNavigate();
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
      <Col  props={{onClick:()=> navigate(`/`)}}><button>ir al inicio</button></Col>
        carrito de compra CON {cantCart} ITEMS
        
        {productoCarrito}
    
      
    </div> // por ahora solo llego
    
  );
}
