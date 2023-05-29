import React from "react";
function Ordenes() {
    return (
        <div class="row">
            <form class="row g-3 justify-content-center">
                <div class="col-md-5">
                    <label class="form-label">Nombre:</label>
                    <input type="text" class="form-control" placeholder="Ingresar nombre" />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Apellido:</label>
                    <input type="text" class="form-control" placeholder="Ingresar apellido" />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Ciudad:</label>
                    <input type="text" class="form-control" placeholder="Ingresar cuidad" />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Dirección:</label>
                    <input type="text" class="form-control" placeholder="Ingresar dirección" />
                </div>
                <div class="col-md-5">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tipo de servicio</option>
                        <option value="1">Closet</option>
                        <option value="2">Tocador</option>
                        <option value="3">Cajones para la cocina</option>
                        <option value="4">Cajones para la sala</option>
                        <option value="5">Escritorios</option>
                        <option value="6">Otro</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tipo de material</option>
                        <option value="1">Madera</option>
                        <option value="2">Laurel</option>
                        <option value="3">Pino</option>
                        <option value="4">Laminas RH</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <label class="form-label">Medida ancho:</label>
                    <input type="text" class="form-control" placeholder="Ingresar ancho" />
                </div>
                <div class="col-md-5">
                    <label class="form-label">Medida largo:</label>
                    <input type="text" class="form-control" placeholder="Ingresar largo" />
                </div>
                <div class="col-md-10">
                    <label class="form-label">Especificaciones:</label>
                    <input type="text" class="form-control" placeholder="Ej: cantidad puertas, tipo de bisagras..." />
                </div>
                <div class="col-12 text-center">
                    <button class="enviar" style={{ color: 'white' }}>Enviar pedido</button>
                </div>
            </form>
        </div>
    )
}
export default Ordenes;