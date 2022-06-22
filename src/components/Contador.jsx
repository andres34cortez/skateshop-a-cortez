import { Col, Row } from "jsxstyle";
import React from "react";
import { useState } from "react";

export default function Contador({ min, stock }) {
  const [inicial, setinicial] = useState(min);

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
    <Row className="Contador">
      <div onClick={() => disminuir()}>-</div>
      <div> {inicial}</div>
      <div onClick={() => aumentar()}>+</div>
    </Row>
  );
}
