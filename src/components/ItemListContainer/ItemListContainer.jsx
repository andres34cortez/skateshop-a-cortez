import { Col } from "jsxstyle";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export default function ItemListContainer({ saludo }) {
  let inicial = 1;
  let stock = 10;
  function Cargado(numero) {
    alert(`${numero}`); // hago un alert como para mostrarlo, despues esto va a hacer la carga de el carrito
  }
  return (
    <Col className="ILCcontainer">
      <h1>{saludo}</h1>
      <ItemCount initial={inicial} stock={stock} Cargado={Cargado}></ItemCount>
    </Col>
  );
}