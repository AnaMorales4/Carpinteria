import React from "react";
function ConsultaPedido() {
    return (
        <div class="row">
            <form class="row g-3 justify-content-center">
                <div class="col-md-2">
                    <label>Número de pedido:</label>
                </div>
                <div class="col-md-3">
                <input type="text" class="form-control"placeholder="Ingresar número"/>
                </div>
                <div class="col-auto">
                    <button class="consultap" style={{color:'white'}}>Consultar pedido</button>
                </div>
            </form>
        </div>
    )
}
export default ConsultaPedido;