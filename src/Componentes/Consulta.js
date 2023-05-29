import React from "react";
function ConsultaPedido() {
    return (
        <div class="row">
            <form class="row g-3 justify-content-center">
                <div class="col-auto">
                    <label for="staticEmail2" class="visually-hidden">Email</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Número de pedido:"/>
                </div>
                <div class="col-auto">
                    <label for="inputPassword2" class="visually-hidden">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Ingresar número"/>
                </div>
                <div class="col-auto">
                    <button class="consultap" style={{color:'white'}}>Confirmar pedido</button>
                </div>
            </form>
        </div>
    )
}
export default ConsultaPedido;