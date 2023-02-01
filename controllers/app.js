import { clientServices } from "../Service/cliente-service.js";


clientServices.ListaClientes().then((data) => {
    data.forEach(element => {
        
    });
}).catch((error) => alert("Ocurrio un error"));


