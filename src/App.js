
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  let numero = 10;

  return (
    <BrowserRouter>
      <Navbar numero={numero} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:productID" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
