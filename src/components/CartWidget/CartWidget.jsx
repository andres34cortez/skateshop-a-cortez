import { Row } from "jsxstyle";
import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import { cartContext } from "../../context/CartProvider";
import { useContext } from "react";

export default function CartWidget({ numero }) {
  const { cantCart } = useContext(cartContext);

  return (
    <Row alignItems="center">
      <BsFillCartFill></BsFillCartFill>
      {cantCart !== 0 ? <Row className="cantidadCart">{cantCart}</Row> : null}
    </Row>
  );
}
