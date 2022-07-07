import { Col, Row } from "jsxstyle";
import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";




export default function ItemDetail({ productInfo }) {
  const {addItem} = useContext(cartContext);

  let navigate = useNavigate(); 
  let inicial = 1;
  const [btnClick, setBtnClick] = useState(inicial);

  const [flag ,setFlag] = useState(true); /*  POR AHORA NO HACE NADA, PERO ES PARA MOSTRAR EL STATE DEL BOTON, PERO ME PARECE MEJOR */
  
  const handleClickPlus = () => {
    if (btnClick >= productInfo.stock) {
      return;
    }
    setBtnClick(btnClick + 1);
  };

  const handleClickMinus = () => {
    if (btnClick === 0 ) {
      return;
    }
    setBtnClick(btnClick - 1);
  };
  const onAdd = (btnClick) => {
    if (btnClick === 0) {
      return;
    } else {
      alert(`${btnClick}`);
      /* aca voy a agregar una funcion para modificar el flag que me muestra  o no el boton de finalizar compra */
      setFlag(false);
      addItem(productInfo, btnClick);

    }
  };

  console.log(productInfo);
  return (
    <Row className="itemDetailContainer">
      <Col className="left">
        <Row className="itemTitle">{productInfo.title}</Row>{" "}
        <Row>
          <img className="itemImg" src={productInfo.img} alt=""></img>
        </Row>
        <Row className="itemDescriptionLong">{productInfo.descriptionLong}</Row>
      </Col>
      <Col className="right">
        <Row className="itemPrice">${productInfo.price}</Row>
        <Row className="itemStock"> STOCK : {productInfo.stock}</Row>
        <Row className="ItemItemCount">
          <ItemCount
            inicial={btnClick}
            stock={productInfo.stock}
            Cargado={onAdd}
            handleClickMinus={handleClickMinus}
            handleClickPlus={handleClickPlus}
          ></ItemCount>
          {productInfo.stock == 0 ? null: <button disabled={flag} rops={{onClick:()=> navigate(`/cart`)}}>FINALIZAR COMPRA ➡ 🛒</button>}
          
        </Row>
      </Col>
    </Row>
  );
}
