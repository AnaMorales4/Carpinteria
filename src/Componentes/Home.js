import React from 'react';
function Iniciof(){
return (
    <div class="contenedor" style={{justifyContent: "center", textAlign: 'center'}}>
        <div class="texto" >
           <h1 style={{textAlign:"center"}}>¡BIENVENIDO!</h1>
           <p>Bienvenidos a la pagina web de nuestra empresa de carpinteria. Somos fabricantes de todo tipo
             de trabajos en madera, con una trayectoria de mas de 20 años en el mercado, ofreciendo a nuestros
              clientes los más modernos y exclusivos productos y servicios.
           </p>
           <p>En Carpinteria LTHN Aglomerados uno de nuestros principales objetivos siempre ha sido conseguir fabricar 
            productos de la mayor calidad. Para llegar a este objetivo, seleccionamos los mejores materiales y
            optimizar nuestros procesos de fabricación.</p>
        </div>
        <div>
        <img src={require("../Imagenes/Collage1.png")}class='imagen'/>
        </div>
    </div>
)
}
export default  Iniciof;