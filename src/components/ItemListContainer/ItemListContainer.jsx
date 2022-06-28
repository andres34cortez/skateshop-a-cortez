import { Col } from "jsxstyle";
import React from "react";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

export default function ItemListContainer({ saludo }) {
  let inicial = 1;
  let stock = 10;
 
  
  return (
    <Col className="ILCcontainer">
      <h1>{saludo}</h1>
      <ItemList initial={inicial} stock={stock} ></ItemList>
    </Col>
  );
}
