import React from 'react'
import { useState } from "react";


export default function Contador({ numero }) {

    const[apretado, setApretado] = useState(0);

    function clickeado(){
        let auxApretado = apretado + 1;
        setApretado(auxApretado);
    }

    return (
        <div>
            <div
                onClick={() => clickeado()}
                className="border border-red-600">
                    Clickea aca</div>
            <div>Numero inicial: {numero}</div>
            <div>Cantidad de clicks: {apretado}</div>
            <div>Cantidad de clicks: {apretado + numero}</div>
        </div>
    );
}

