import { Col } from "jsxstyle";
import React from "react";
import { useEffect, useState } from "react";
import productsData from "../../data/porductsData";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer({ saludo }) {
  let inicial = 1;
  let stock = 10;
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
    <Col className="ILCcontainer">
      <h1>{saludo}</h1>
      <ItemList initial={inicial} stock={stock} productsData={productsData}></ItemList>
    </Col>
  );
}
