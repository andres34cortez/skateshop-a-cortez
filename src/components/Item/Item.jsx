import React from "react";
import { Col, Row } from "jsxstyle";
import "./Item.css";
import { useNavigate, } from "react-router-dom";

export default function Item({ product, initial, stock }) {
  let navigate = useNavigate(); 


  return (
    <Col className="tarjetaProducto" props={{onClick:()=> navigate(`/item/${product.id}`)}}>
   
      <Row className="productTitle">
        {product.title}
      </Row>
      <Row className="productImg">
        <img src={product.pictureURL} alt=""></img>
      </Row>
      <Row className="productDescription">{product.description}</Row>
      <Row className="productPrice">${product.price} </Row>
     
     
    </Col>
  
    
  );
}
