import { Col, Row } from "jsxstyle";
import React from "react";
import "./ItemCount.css";

export default function ItemCount({
  inicial,
  stock,
  Cargado,
  handleClickMinus,
  handleClickPlus,
}) {
  console.log(stock);

  return (
    <Col className="containerItenCount">
      <Row className="Contador">
        {stock === "0" ? null : (
          <Row className="adder" props={{ onClick: () => handleClickMinus() }}>
            -
          </Row>
        )}

        {stock === "0" ? (
          <Row className="totalActual"> SIN STOCK</Row>
        ) : (
          <Row className="totalActual"> {inicial}</Row>
        )}
        {stock === "0" ? null : (
          <Row className="adder" props={{ onClick: () => handleClickPlus() }}>
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
