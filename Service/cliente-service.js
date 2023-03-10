

const ListaClientes = () => fetch("http://localhost:3000/perfil/").then((respuesta) => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
  };

const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
      method: "DELETE",
    });
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => respuesta.json());
};

const actualizarCliente = (nombre,email,id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email}),
  })
  .then(respueta => respueta)
  .catch((err) => console.log(err));
}

export const clientServices ={
  ListaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};

// crearCliente,
//   eliminarCliente,
//   detalleCliente,
//   actualizarCliente,
    /* const promise = new Promise((resolve,reject) =>{
        http.open("GET", "http://localhost:3000/perfil");
        http.send();
        http.onload = () => {
            const response = JSON.parse(http.response);
            if(http.status >= 400){
                reject(response);
            }else{
                resolve(response)
            }
        };
    });
    return promise; */
 
