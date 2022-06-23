import { Col } from "jsxstyle";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar.js";

export const App = () => {
  let numero = 10;

  return (
    <Col>
      <Navbar numero={numero}></Navbar>
      <ItemListContainer saludo={"Productos"}></ItemListContainer>
    </Col>
  );
};

export default App;
