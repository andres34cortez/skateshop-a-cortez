import { Col, Row } from "jsxstyle";
import React from "react";
import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ initial, stock, Cargado }) {
  const [inicial, setinicial] = useState(initial);
  console.log(stock);
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

  return (
    <Col className="containerItenCount">
      <Row className="Contador">
        {stock === "0" ? null : (
          <Row className="adder" props={{ onClick: () => disminuir() }}>
            -
          </Row>
        )}

        {stock === "0" ? (
          <Row className="totalActual"> SIN STOCK</Row>
        ) : (
          <Row className="totalActual"> {inicial}</Row>
        )}
        {stock === "0" ? null : (
          <Row className="adder" props={{ onClick: () => aumentar() }}>
            +
          </Row>
        )}
      </Row>
      {stock === "0" ? null : (
        <button className="buttonOnAdd" onClick={() => Cargado(inicial)}>
          agregar 🛒
        </button>
      )}
    </Col>
  );
}
