import { Col } from "jsxstyle";
import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../../data/porductsData";
import ItemDatail from "../ItemDetail/ItemDatail";

export default function ItemDetailContainer() {
  const [productInfo, setProductInfo] = useState({});
  console.log(productsData);
  let { productID } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(productsData.find((elemento) => elemento.id == productID));
    }).then((res) => setProductInfo(res));
  }, [productID]);
  return (
    <Col className="Container">
     
      <ItemDatail productInfo={productInfo}></ItemDatail>
    </Col>
  );
}
