import React from "react";
import "../styles/Testimonio.css"


function Testimonio (props){
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
            src={require(`../images/Img${props.imagen}.png`)}
            alt="imagen"/>

        <div className="contenedor-text-testimonio">
            <p className="nombreTestimonio">
              <strong>  {props.nombre} </strong>
                in {props.pais}</p>
            <p className="cargoTestimonio">{props.cargo}
             at 
            <strong> {props.empresa}</strong></p>
            <p className="TextoTestimonio">"{props.testimonio}"</p>
        </div>


        </div>
    )
}

export default Testimonio