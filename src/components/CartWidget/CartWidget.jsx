import { Row } from "jsxstyle";
import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";

export default function CartWidget({ numero }) {
  return (
    <Row alignItems="center">
      <BsFillCartFill></BsFillCartFill>
      {numero !== 0 ? <Row className="cantidadCart">{numero}</Row> : null}
    </Row>
  );
}
