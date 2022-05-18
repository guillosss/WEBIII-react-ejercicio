import React from "react";
import img1 from "./../../imagenes/imagen3.jpg";
export default function Articulos(props) {
    const {titulo, fecha, descripcion, imagen} = props
    console.log(titulo, fecha, descripcion, imagen);
    return(
        <div className="w3-third w3-container w3-margin-bottom">
            <img src={imagen} alt="Norway" style={{width:"100%"}} className="w3-hover-opacity"/>
            <div className="w3-container w3-white">
                <p><b>{titulo}</b></p>
                <p>{fecha}</p>
                <p><b>{descripcion}</b></p>
            </div>
        </div>
    );
}