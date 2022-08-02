import React from "react";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { Col, Row } from "jsxstyle";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const {  cartProducts, clear, removeItem } = useContext(cartContext); 
  let navigate = useNavigate();
  let totalCompra = 0;

  const productoCarrito = cartProducts.map((producto) => {
    let total = producto.price * producto.amount;
    totalCompra = totalCompra + total;
    return (
      <Col className="itemCart" key={producto.id}>
        <h1>{producto.title}</h1>
        <img src={producto.pictureURL} alt="" />
        <h1>Cantidad : {producto.amount}</h1>
        <h3> precio unitario : ${producto.price}</h3>
        <h1>total : ${total}</h1>
        <Col
          className="deleteProductCart"
          props={{ onClick: () => removeItem(producto) }}
        >
          
          eliminar 1 producto
        </Col>
      </Col>
    );
  });
  return (
    <div className="CartContainer">
      <Col>
        <h1 className="titleCartProduct">CARRITO DE COMPRA SKATESHOP</h1>
      </Col>
      <Col className="homeCart" props={{ onClick: () => navigate(`/`) }}>
        inicio
      </Col>
      <Row className="productCartContainer">
        <Row>{productoCarrito}</Row>
      </Row>
      <Col className="deleteCart" props={{ onClick: () => clear() }}>
        vaciar carrito
      </Col>{" "}
      <Col className="FinishElement">
        
        <Row>         
          <Col className="TotalFinishCart">TOTAL :$ {totalCompra}  </Col>
        </Row>
        <Row className="FinishCart" props={{ onClick: () => navigate(`/formulario`)}}>
          Finalizar Compra
        </Row>
      </Col>
    </div>
  );
}
