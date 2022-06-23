import { Col, Row } from "jsxstyle";
import React from "react";
import { useState } from "react";
import './ItemCount.css'

export default function ItemCount({ initial, stock, Cargado }) {
  const [inicial, setinicial] = useState(initial);

  function disminuir() {
    if (inicial === 1) {
      return;
    }
    let auxApretado = inicial - 1;
    setinicial(auxApretado);
  }
  function aumentar() {
    if (inicial >= stock) {
      return;
    }
    let auxApretado = inicial + 1;
    setinicial(auxApretado);
  }
  //<div>total{apretado + numero}</div>
  return (
    <Col className="containerItenCount">
    <Row className="Contador">
      
      <Row className="adder" props={{onClick:() => disminuir()}}>-</Row>
      <Row className="totalActual"> {inicial}</Row>
      <Row className="adder"  props={{onClick:() => aumentar()}}>+</Row>
    </Row>
     <button  className="buttonOnAdd" onClick={() =>Cargado(inicial)}>agregar  🛒</button>
    </Col>
  );
}
