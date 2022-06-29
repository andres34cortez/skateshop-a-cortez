import "./NavBar.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { TbSkateboard } from "react-icons/tb";
import { FaTshirt } from "react-icons/fa";
import { Col, Row } from "jsxstyle";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";


const Navbar = ({ numero }) => {
  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      background="black"
      paddingLeft="64px"
      paddingRight="64px"
      paddingTop="5px"
      height="60px"
      zIndex="1"
      style={{ boxShadow: " 0px 8px 31px -5px #FFFFFF" }}
    >
      <Row className="iconSkate">
        <Row>SkateShop</Row>
        <TbSkateboard className="skate"></TbSkateboard>
      </Row>
      <Row alignItems="center">
        <NavLink className="navLinks" to={`/`}>
          <Col alignItems="center" className="bottonNav">
            <BsFillHouseDoorFill></BsFillHouseDoorFill>
            {"INICIO"}
          </Col>
        </NavLink>
        <Col style={{ border:"1px solid white", height:"30px", marginLeft:20 }}></Col>
        <NavLink className="navLinks" to={`/category/2`}>
        <Col
          alignItems="center"
        
          className="bottonNav"
        >
          <FaTshirt></FaTshirt>
          {"INDUMENTARIA"}
        </Col>
        </NavLink>
        <NavLink  className="navLinks"to={`/category/1`}>
        <Col alignItems="center" className="bottonNav">
          <AiOutlineFire></AiOutlineFire>
          {"SKATE SHOP"}
        </Col>
        </NavLink>
      </Row>
      <Row className="cartContainer">
        <CartWidget numero={numero}></CartWidget>
      </Row>
    </Row>
  );
};

export default Navbar;
