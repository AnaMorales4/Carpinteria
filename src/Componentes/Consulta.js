import React, {useState} from "react";
import axios from "axios";
function ConsultaPedido() {
    const [sw,setSw]=useState(false)
    const [result,setResult]=useState([])
    const [Id,setId]=useState()
    const ConsultarPedido = (e) => {
        e.preventDefault();
        if (Id !== "") {
            axios
                .post("http://localhost:3002/pedidos", {
                   Id:Id
                })
                .then((response) => {
                    alert("Consultando Pedido");
                    setResult(response.data);
                    console.log(response.data);
                    setSw(true)
                }).catch(() => {
                    alert("Pedido no valido, intente nuevamente")
                });
        }
    }
    return (
        <div class="row">
            <form class="row g-3 justify-content-center">
                <div class="col-md-2">
                    <label>Número de pedido:</label>
                </div>
                <div class="col-md-3">
                <input type="text" class="form-control"placeholder="Ingresar número" onChange={(event)=>{
                    setId(event.target.value)}}/>
                </div>
                <div class="col-auto">
                    <button class="consultap" style={{color:'white'}} onClick={ConsultarPedido}>Consultar pedido</button>
                </div>
            </form>
            <table class="table" id="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Producto</th>
            <th scope="col">Material</th>
            <th scope="col">Ancho</th>
            <th scope="col">Largo</th>
            <th scope="col">Especificaciones</th>
          </tr>
        </thead>
        <tbody>
          {sw != false &&
            result.map((vm) => (
              <tr>
                <th scope="row">{}</th>
                <td key={vm}>{vm.Nombre}</td>
                <td key={vm}>{vm.apellido}</td>
                <td key={vm}>{vm.Ciudad}</td>
                <td key={vm}>{vm.Direccion}</td>
                <td key={vm}>{vm.TipoServicio}</td>
                <td key={vm}>{vm.Material}</td>
                <td key={vm}>{vm.Ancho}</td>
                <td key={vm}>{vm.Largo}</td>
                <td key={vm}>{vm.especificaciones}</td>
                <td>
                  <button style={{ color: 'white'}} type="button" class="consultap">Modificar</button>
                </td>
                <td>
                  <button style={{ color: 'white'}} type="button" class="consultap">Eliminar</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
        </div>
    )
}
export default ConsultaPedido;