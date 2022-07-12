import React, { useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect } from "react";

export default function TestConsulta() {
  const [item, setItem] = useState({});
  useEffect(() => {
    const Db = getFirestore();
    const remera = doc(Db, "products", "R09LID159K8cKBI8qMcX");
    getDoc(remera).then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
  }, []);

  return <div>{item && <>{JSON.stringify(item)}</>}</div>;
}
