import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Col, Row } from "jsxstyle";
import "./Item.css";

export default function Item({ product, initial, stock, Cargado }) {
  return (
    <Col className="tarjetaProducto">
      <Row className="productTitle">
        {product.title}
      </Row>
      <Row className="productImg">
        <img src={product.pictureURL} alt=""></img>
      </Row>
      <Row className="productDescription">{product.description}</Row>
      <Row className="productPrice">${product.price}</Row>
      <ItemCount initial={initial} stock={stock} Cargado={Cargado}></ItemCount>
    </Col>
  );
}
