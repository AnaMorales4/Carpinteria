import React from "react";
function Ordenes() {
    return (
        <div>
            <div>
                <form class="row g-3">
                    <div class="col-md-5">
                        <label class="form-label">Nombre:</label>
                        <input type="text" class="form-control" value="Ingresar nombre" />
                    </div>
                    <div class="col-md-5">
                        <label class="form-label">Apellido:</label>
                        <input type="text" class="form-control" value="Ingresar apellido" />
                    </div>
                    <div class="col-md-5">
                        <label class="form-label">Ciudad:</label>
                        <input type="text" class="form-control" value="Ingresar cuidad" />
                    </div>
                    <div class="col-md-5">
                        <label class="form-label">Dirección:</label>
                        <input type="text" class="form-control" value="Ingresar dirección" />
                    </div>
                    <div>
                        <select class="form-select;col-md-10" aria-label="Default select example">
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
                        <label class="form-label">Medida ancho:</label>
                        <input type="text" class="form-control" value="Ingresar ancho" />
                    </div>
                    <div class="col-md-5">
                        <label class="form-label">Medida largo:</label>
                        <input type="text" class="form-control" value="Ingresar alto" />
                    </div>
                    <div class="col-md-5">
                        <label class="form-label">Especificaciones:</label>
                        <input type="text" class="form-control" value="Ej: cantidad puertas" />
                    </div>
                    <div>
                        <select class="form-select;col-md-10" aria-label="Default select example">
                            <option selected>Tipo de material</option>
                            <option value="1">Madera</option>
                            <option value="2">Maple</option>
                            <option value="3">Pino</option>
                            <option value="4">Melanina</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <button class="enviar" style={{color:'white'}}>Enviar pedido</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Ordenes;