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
  let { productID } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    buscarProducto();
  }, []);
  const buscarProducto = async () => {
    try {
      const Db = getFirestore();
      const productRef = doc(Db, "productsData", productID);
      getDoc(productRef).then((res) => {
        const item = { ...res.data(), id: res.id };
        setProductInfo(item);
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {loading && <h1>CARGANDO...</h1>}
      <Col className="Container">
        <ItemDetail productInfo={productInfo}></ItemDetail>
      </Col>
    </>
  );
}
