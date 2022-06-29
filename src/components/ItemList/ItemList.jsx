import React from "react";
import Item from "../Item/Item";
import { Col, Row } from "jsxstyle";
import "./ItemList.css";

export default function ItemList({ initial, stock, productsData }) {
  return (
    <Row className="ItemList">
      {productsData.map((product) => (
        <Col className="" key={product.id}>
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
