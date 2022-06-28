import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import productsData from "../../data/porductsData";
import { Col, Row } from "jsxstyle";
import "./ItemList.css";



export default function ItemList({ initial, stock,productsData }) {

 
  return (
    <Row>
      {productsData.map((product) => (
        <Col className="ItemListContainer" key={product.id}>
          <Item
            key={product.id}
            product={product}
            initial={initial}
            stock={stock}
          
          />
        </Col>
      ))}
    </Row>
  );
}
