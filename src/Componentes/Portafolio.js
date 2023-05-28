import React from 'react';
function Portafoliof() {
    return (
        <div className='Card'>
            <h4 class="Categorias">Closets</h4>
            <div className='Card-body d-flex justify-content-center'>
                <img src={require("../Imagenes/cajon.jpg")} class='col-md-3 mx-auto m-2 ' />
                <img src={require("../Imagenes/cajon2.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/cajon3.jpg")} class='col-md-3 mx-auto m-2' />
            </div>
            <h4 class="Categorias">Salas</h4>
            <div className='Card-body d-flex justify-content-center'>
                <img src={require("../Imagenes/sala.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/sala2.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/sala3.jpg")} class='col-md-3 mx-auto m-2' />
            </div>
            <h4 class="Categorias" >Cocinas</h4>
            <div className='Card-body d-flex justify-content-center'>
                <img src={require("../Imagenes/cocina.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/cocina2.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/cocina3.jpg")} class='col-md-3 mx-auto m-2' />
            </div>
            <h4 class="Categorias">Escritorios</h4>
            <div className='Card-body d-flex justify-content-center'>
                <img src={require("../Imagenes/escritorio.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/escritorio2.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/escritorio3.jpg")} class='col-md-3 mx-auto m-2' />
            </div>
            <h4 class="Categorias">Tocadores</h4>
            <div className='Card-body d-flex justify-content-center'>
                <img src={require("../Imagenes/tocador.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/tocador3.jpg")} class='col-md-3 mx-auto m-2' />
                <img src={require("../Imagenes/tocador2.jpg")} class='col-md-3 mx-auto m-2' />
            </div>
        </div>
    )
}
export default Portafoliof