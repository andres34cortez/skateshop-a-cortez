import React, { useState } from "react";
import "./NavBar.css";
import { BsFillHouseDoorFill, BsFillCartFill } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { TbSkateboard } from "react-icons/tb";
import { FaTshirt } from "react-icons/fa";
import { Col, Row } from "jsxstyle";

export const Navbar = () => {
  const [value, setValue] = useState(0);
  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Row
      justifyContent="space-between"
      alignItems="center"
      background="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,4,1) 69%, rgba(255,255,255,1) 100%)"
      paddingLeft="64px"
      paddingRight="64px"
      paddingTop="5px"
      height="80px"
    >
      <Row className="iconSkate">
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
        <BsFillCartFill className="cart"></BsFillCartFill>
      </Row>
    </Row>
  );
};

export default Navbar;
