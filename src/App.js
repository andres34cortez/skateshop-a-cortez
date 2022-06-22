import { Col } from "jsxstyle";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar.js";

export const App = () => {
  let numero = 10;

  return (
    <Col>
      <Navbar numero={numero}></Navbar>
      <ItemListContainer saludo={"inicial = 1 stock = 10"}></ItemListContainer>
    </Col>
  );
};

export default App;
