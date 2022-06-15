import { Row } from 'jsxstyle'
import React from 'react'
import './ItemListContainer.css'


export default function ItemListContainer({ saludo }) {
  return (
   <Row className="ILCcontainer">
        <h1>{saludo}</h1>
   </Row>
  )
}
