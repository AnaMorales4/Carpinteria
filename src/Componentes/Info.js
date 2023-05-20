import React from "react";
function Informacion(){
    return(
<div class="contenedor">
    <div class="mision" style={{justifyContent: "center", textAlign: 'center'}}>
        <h1 style={{textAlign:"center"}}>MISIÓN</h1>
        <p>Nuestra misión es crear muebles de alta calidad y diseño excepcional, utilizando habilidades 
            artesanales y materiales sostenibles. <br/>
            Nos esforzamos por ofrecer a nuestros clientes piezas únicas y duraderas que transformen espacios
            y reflejen la belleza natural de la madera.</p>
    </div>
    <div class="info1">
        <img src={require("../Imagenes/info1.jpg")}/>
    </div>
    <div class="vision" style={{justifyContent: "center", textAlign: 'center'}}>
    <h1 style={{textAlign:"center"}}>VISIÓN</h1>
    <p>Nuestra visión es convertirnos en la ebanistería de referencia, reconocida por nuestra artesanía
         meticulosa y nuestro compromiso con la excelencia. <br/> Buscamos establecer asociaciones duraderas con
         nuestros clientes, colaboradores y proveedores, y expandir nuestra presencia en el mercado,
         brindando soluciones personalizadas que superen las expectativas de quienes buscan muebles únicos y
        de calidad.
    </p>
    </div>
    <div class="info2">
        <img src={require("../Imagenes/info2.jpg")}/>
    </div>
</div>
    )
}
export default Informacion;