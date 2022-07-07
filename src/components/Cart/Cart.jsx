import React from "react";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
export default function Cart() {
  const { cartItems, toggleCart, removeItem } = useContext(CartContext);
  return (
    <div>
      Carrito De compra
      {cartItems.length < 1 ? (
        <div className="CartEmpty">
          Carrito de compra Vacio
          <Link to="/">
            <button onClick={() => toggleCart(false)}>
              Continuar viendo Elementos
            </button>
          </Link>
        </div>
      ) : (
        cartItems.map((product) => (
          <div key={product.id} className="ProductListCart">
            <figure>
              <img src={product.pictureURL} alt={product.title} />
            </figure>
            <div className="ProductCart">
              <h4>{product.title}</h4>
              <h5>${product.price}</h5>
            </div>
            <div className="BottonCart">
              <ItemCount />
              <div
                className="DeletElementCart"
                onClick={() => removeItem(product)}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
