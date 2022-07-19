import { Col } from "jsxstyle";
import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [productInfo, setProductInfo] = useState({});
/*   const [products, setProducts] = useState([]); */
  let { productID } = useParams()

  useEffect(() => {

const Db = getFirestore();
const productRef = doc(Db, "productsData", productID)
getDoc(productRef).then((res)=>{
  const item = {...res.data(), id:res.id}
  console.log("item", item)
  setProductInfo(item)
})}, [productID])
  return (
    <Col className="Container">
      <ItemDetail productInfo={productInfo}></ItemDetail>
    </Col>
  );
}
