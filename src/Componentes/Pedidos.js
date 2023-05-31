import React, { useState } from "react";
import axios from "axios";
function Ordenes() {
    const [nombre, setNombre] = useState();
    const [apellido, setApellido] = useState();
    const [ciudad, setCiudad] = useState();
    const [direccion, setDireccion] = useState();
    const [tiposervicio, setTiposervicio] = useState();
    const [material, setMaterial] = useState();
    const [ancho, setAncho] = useState();
    const [largo, setLargo] = useState();
    const [especificaciones, setEspecificaciones] = useState();
    const createPedidos = (e) => {
        e.preventDefault();
        if (nombre !== "" && apellido !== "" && ciudad !== "" && direccion !== "" && tiposervicio !== "" && material !== "" && ancho !== "" && largo !== "" && especificaciones !== "") {
            axios
                .post("http://localhost:3002/form", {
                    nombre: nombre,
                    apellido: apellido,
                    ciudad: ciudad,
                    direccion: direccion,
                    tiposervicio: tiposervicio,
                    material: material,
                    ancho: ancho,
                    largo: largo,
                    especificaciones: especificaciones
                })
                .then(() => {
                    alert("Pedido enviado");
                    limpiarCampos();
                }).catch(() => {
                    alert("Su pedido no fue enviado, intente nuevamente")
                });
        }
        const limpiarCampos = () => {
            setNombre("");
            setApellido("");
            setCiudad("");
            setDireccion("");
            setTiposervicio("");
            setMaterial("");
            setAncho("");
            setLargo("");
            setEspecificaciones("");
        };
    };
    return (
        <div class="row">
            <form class="row g-3 justify-content-center" method="post">
                <div class="col-md-5">
                    <label class="form-label">Nombre:</label>
                    <input type="text" class="form-control" placeholder="Ingresar nombre" onChange={(event) => {
                        setNombre(event.target.value)
                    }} />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Apellido:</label>
                    <input type="text" class="form-control" placeholder="Ingresar apellido" onChange={(event) => {
                        setApellido(event.target.value)
                    }} />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Ciudad:</label>
                    <input type="text" class="form-control" placeholder="Ingresar cuidad" onChange={(event) => {
                        setCiudad(event.target.value)
                    }} />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Dirección:</label>
                    <input type="text" class="form-control" placeholder="Ingresar dirección" onChange={(event) => {
                        setDireccion(event.target.value)
                    }} />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Tipo de servicio:</label>
                    <input type="text" class="form-control" placeholder="Tocador, Cajon cocina, Closet, etc..." onChange={(event) => {
                        setTiposervicio(event.target.value)
                    }}></input>
                </div>
                <div class="col-md-5">
                    <label class="form-label">Material:</label>
                    <input type="text" class="form-control" placeholder="Madera, Laurel, Pino, Laminas RH, etc..." onChange={(event) => {
                        setMaterial(event.target.value)
                    }}></input>
                </div>
                <div class="col-md-5">
                    <label class="form-label">Medida ancho:</label>
                    <input type="text" class="form-control" placeholder="Ingresar ancho" onChange={(event) => {
                        setAncho(event.target.value)
                    }} />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Medida largo:</label>
                    <input type="text" class="form-control" placeholder="Ingresar largo" onChange={(event) => {
                        setLargo(event.target.value)
                    }} />
                </div>
                <div class="col-md-10">
                    <label class="form-label">Especificaciones:</label>
                    <input type="text" class="form-control" placeholder="Ej: cantidad puertas, tipo de bisagras..." onChange={(event) => {
                        setEspecificaciones(event.target.value)
                    }} />
                </div>
                <div class="col-12 text-center">
                    <button class="enviar" style={{ color: 'white' }} type="submit" onClick={createPedidos}>Enviar pedido</button>
                </div>
            </form>
        </div>
    )
}
export default Ordenes;