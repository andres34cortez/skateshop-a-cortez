import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import productsData from "../../data/porductsData";
import { Col, Row } from "jsxstyle";
import "./ItemList.css";



export default function ItemList({ initial, stock }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      new Promise((resolve, reject) => {
        resolve(productsData);
      })
        .then((res) => setProducts(res))
        .then(() => setLoading(false));
    }, 2000);
  }, []);
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
