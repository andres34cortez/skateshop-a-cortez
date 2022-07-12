import React, { useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";

export default function TestConsulta() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    const Db = getFirestore();
   
   
    //TRAER TODA LA COLECCION
    //const colletcionRef = collection(Db,'products');
   
   
    //TRAER COLECCION CON UN FILTRO
    const colletcionRef = query(collection(Db, "products"), where('category','==','deportivo'));

    getDocs(colletcionRef).then((res) => {
      console.log(colletcionRef);
      const auxArray = res.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      console.log(auxArray);
      setItem(auxArray);
    });
  }, []);

  return <div>{item && <>{JSON.stringify(item)}</>}</div>;
}
