
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";

import Cart from "./components/Cart/Cart";
import Formulario from "./components/FormBuy/FormBuy";
export const App = () => {
  let numero = 10;

  return (
    <CartProvider>
    <BrowserRouter>
      <Navbar numero={numero} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:productID" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/formulario" element={<Formulario/>} />

     {/*    <Route path="/testconsulta" element={<TestConsulta/>} />
        <Route path="/testconsultacoleccion" element={<TestConsultaColeccion/>} /> */}
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
};

export default App;
