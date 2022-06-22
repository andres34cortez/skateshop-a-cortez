import { Col, Row } from "jsxstyle";
import React from "react";
import { useState } from "react";
import './ItemCount.css'

export default function Contador({ initial, stock, Cargado }) {
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
      
      <div className="adder" onClick={() => disminuir()}>-</div>
      <div className="totalActual"> {inicial}</div>
      <div className="adder"  onClick={() => aumentar()}>+</div>
    </Row>
     <button onClick={() =>Cargado(inicial)}>agregar 🛒</button>
    </Col>
  );
}
