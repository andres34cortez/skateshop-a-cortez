import { Col } from "jsxstyle";
import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/porductsData";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [productInfo, setProductInfo] = useState({});

  let { productID } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(productsData.find((elemento) => elemento.id == productID));
    }).then((res) => setProductInfo(res));
  }, [productID]);
  return (
    <Col className="Container">
     
      <ItemDetail productInfo={productInfo}></ItemDetail>
    </Col>
  );
}
