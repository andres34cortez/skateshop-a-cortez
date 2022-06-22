import "./NavBar.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { TbSkateboard } from "react-icons/tb";
import { FaTshirt } from "react-icons/fa";
import { Col, Row } from "jsxstyle";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({numero}) => {
 
  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      background="black"
      paddingLeft="64px"
      paddingRight="64px"
      paddingTop="5px"
      height="60px"
      style={{ boxShadow: " 0px 8px 31px -5px #FFFFFF" }}
    >
      <Row className="iconSkate">
        
        <Row>SkateShop</Row>
        <TbSkateboard className="skate"></TbSkateboard>
      </Row>
      <Row alignItems="center">
        <Col alignItems="center" className="bottonNav">
          <BsFillHouseDoorFill></BsFillHouseDoorFill>
          {"INICIO"}
        </Col>
        <Col
          alignItems="center"
          marginLeft="60px"
          marginRight="60px"
          className="bottonNav"
        >
          <FaTshirt></FaTshirt>
          {"PRODUCTOS"}
        </Col>
        <Col alignItems="center" className="bottonNav">
          <AiOutlineFire></AiOutlineFire>
          {"OFERTAS"}
        </Col>
      </Row>
      <Row className="cartContainer">
        <CartWidget numero={numero}></CartWidget>
      </Row>
    </Row>
  );
};

export default Navbar;
