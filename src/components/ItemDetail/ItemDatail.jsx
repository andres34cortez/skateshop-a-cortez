import { Col, Row } from "jsxstyle";
import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

export default function ItemDatail({ productInfo }) {
  let inicial = 1;
  function onAdd(numero) {
    alert(`${numero}`); // hago un alert como para mostrarlo, despues esto va a hacer la carga de el carrito
  }

  console.log(productInfo);
  return (
    <Row className="itemDetailContainer">
      <Col className="left">
        <Row className="itemTitle">{productInfo.title}</Row>{" "}
        <Row className="itemImg">
          <img src={productInfo.img} alt=""></img>
        </Row>
        <Row className="itemDescriptionLong">{productInfo.descriptionLong}</Row>
      </Col>
      <Col className="right">
        <Row className="itemPrice">${productInfo.price}</Row>
        <Row className="itemStock"> STOCK : {productInfo.stock}</Row>
        <Row className="ItemItemCount">
          <ItemCount
            
            initial={inicial}
            stock={productInfo.stock}
            Cargado={onAdd}
          ></ItemCount>
        </Row>
      </Col>
    </Row>
  );
}
