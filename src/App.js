import { Col} from "jsxstyle";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";


export const App = () => {
  return (
    <Col>
      <Navbar></Navbar>
     <ItemListContainer saludo={"Elemento ItemListContainer"}></ItemListContainer>
    </Col>

  );
};

export default App;
