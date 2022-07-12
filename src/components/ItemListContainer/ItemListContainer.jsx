import { Col } from "jsxstyle";
import React from "react";
import { useEffect, useState } from "react";
import productsData from "../../data/porductsData";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ saludo }) {
  let inicial = 1;
  let stock = 10;
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      resolve(productsData.filter((elemento) => elemento.category == id));
    }).then((res) => setProducts(res));
  }, [id]);

  return (
    <>
      {!id ? (
        <Col className="ILCcontainer">
          <ItemList
            initial={inicial}
            stock={stock}
            productsData={productsData}
          ></ItemList>
        </Col>
      ) : (
        <Col className="ILCcontainer">
          <ItemList
            initial={inicial}
            stock={stock}
            productsData={products}
          ></ItemList>
        </Col>
      )}
    </>
  );
}
