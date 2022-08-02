import { Col } from "jsxstyle";
import React from "react";
import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export default function ItemListContainer({ saludo }) {
  let inicial = 1;

  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const Db = getFirestore();
    const productsData = collection(Db, "productsData");

    if (!id) {
      getDocs(productsData).then((res) => {
        setProducts(res.docs.map((item) => ({ ...item.data(), id: item.id })));
      });
    } else {
      const productsQuery = query(
        collection(Db, "productsData"),
        where("category", "==", id)
      );
      getDocs(productsQuery).then((res) => {
        setProducts(res.docs.map((item) => ({ ...item.data(), id: item.id })));
      });
    }

 
  }, [id]);

  return (
    <>
      {!id ? (
        <Col className="ILCcontainer">
          <ItemList initial={inicial} productsData={products}></ItemList>
        </Col>
      ) : (
        <Col className="ILCcontainer">
          <ItemList initial={inicial} productsData={products}></ItemList>
        </Col>
      )}
    </>
  );
}
