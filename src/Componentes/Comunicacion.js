import React from 'react';
function Comunicacionf() {
    return (
        <div>
            <h4 class="Categorias">Redes Sociales</h4>
            <div className='Card text-center'style={{display:"flex"}} >
                <div className='card-body mx-auto' >
                    <img src={require("../Imagenes/facebook.png")} className='card-img-top w-50' />
                        <p >Encuéntranos en Facebook</p>
                        <a href='https://instagram.com/lthnaglomerados?igshid=NTc4MTIwNjQ2YQ=='>Página Facebook</a>
                </div>
                <div className='card-body mx-auto'>
                    <img src={require("../Imagenes/instagram.png")} className='card-img-top w-50' />
                    <p>Encuéntranos en Instagram</p>
                    <a href='https://instagram.com/lthnaglomerados?igshid=NTc4MTIwNjQ2YQ=='>@ltnaglomeraados</a>
                </div>
                <div className='card-body mx-auto'>
                    <img src={require("../Imagenes/whatsapp.png")} className='card-img-top w-50'/>
                    <p>Escribenos al número</p> 
                    <a href='https://api.whatsapp.com/send/?phone=573206099654&text&type=phone_number&app_absent=0'>57+ 320 6099654</a>
                </div>
                <div className='card-body mx-auto'>
                    <img src={require("../Imagenes/mapa.png")} className='card-img-top w-50' />
                    <p>Visitanos en </p>
                    <a href='https://www.google.com/maps/place/Cl.+50+%2353-31,+Segovia,+Antioquia/@7.0812812,
                    -74.7050878,17z/data=!3m1!4b1!4m5!3m4!1s0x8e436ebbb25000b9:0xfce8582be3575988!8m2!3d7.0812759!4d
                    -74.7025129'>Segovia-Ant</a>
                </div>
            </div>

        </div>
    )
}
export default Comunicacionf