import { clientServices } from "../Service/cliente-service.js";
//const http = new XMLHttpRequest();
/* 
        <tr>
            <td class="td" data-td>Gabriela</td>
            <td>gabriela@alura.com</td>
            <td>
              <ul class="table__button-control">
                <li>
                  <a href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit">Editar
                  </a>
                </li>
                <li>
                  <button
                    class="simple-button simple-button--delete"
                    type="button"
                  >
                    Eliminar
                  </button>
                </li>
              </ul>
            </td>
        </tr> 
*/
const crearNuevaLinea = (nombre, email, id) => {
    //console.log(id);
    // Se crea tr Nuevaa Linea
    const linea = document.createElement("tr");
    // Se crea td de nombre 
    const tdNombre = document.createElement("td");
    tdNombre.classList.add("td");
    tdNombre.setAttribute("data-td", "");
    tdNombre.textContent = nombre;
    linea.appendChild(tdNombre);
    // Se crea td de correo
    const tdCorreo = document.createElement("td");
    tdCorreo.textContent = email;
    linea.appendChild(tdCorreo);
    // Se crea td de contenido
    const tdContenido = document.createElement("td");
    linea.appendChild(tdContenido);
    // Se crea ul de contenido
    const ulContenido = document.createElement("ul");
    ulContenido.classList.add("table__button-control")
    tdContenido.appendChild(ulContenido);
    // Se crea Li de Hipervinculo y Button
    const liHipervinculo = document.createElement("li");
    const liButton = document.createElement("li");
    ulContenido.appendChild(liHipervinculo);
    ulContenido.appendChild(liButton);
    // Se crea Hipervinculo
    const hiperEditar = document.createElement("a");
    hiperEditar.setAttribute("href","../screens/editar_cliente.html?id="+`${id}`);
    console.log(hiperEditar);
    hiperEditar.classList.add("simple-button","simple-button--edit");
    liHipervinculo.appendChild(hiperEditar);
    hiperEditar.textContent = "Editar";
    // Se crea Button de Eliminar
    const button = document.createElement("button");
    button.classList.add("simple-button","simple-button--delete");
    button.setAttribute("type","button");
    button.setAttribute("id",id);
    button.textContent = "Eliminar";
    liButton.appendChild(button);
    button.addEventListener("click", () => {
      const id = button.id;
      clientServices
        .eliminarCliente(id)
        .then((respuesta) => {
          console.log(respuesta); 
        })
        .catch((err) => alert("Ocurrió un error"));
    });
    return linea;
}


//Abrir http (metodo,url)

// CRUD     -   Metodos HTTP
// Create   -   POST       
// Read     -   GET
// Update   -   PUT / PATCH
// Delete   -   DELETE

const table = document.querySelector("[data-table]");

clientServices.ListaClientes().then((data) => {
    data.forEach(({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un error"));