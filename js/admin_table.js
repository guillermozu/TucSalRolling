let cuerpoTabla = document.querySelector("tbody") || null;
let contadorProductos = document.getElementById("count");
let idProductos = null;
const myModal = new bootstrap.Modal(document.getElementById("modalUpdate"));
// let productos = JSON.parse(localStorage.getItem("productos")) || [];

crearTabla();

function crearTabla() {
  if (cuerpoTabla) {
    cuerpoTabla.innerHTML = "";
    contadorProductos.innerText = "productos  registrados: " + productos.length;
    // if(localStorage.getItem('mascotas')){
    //     mascotas = JSON.parse(localStorage.getItem('mascotas'))
    // }else{
    //     mascotas=[]
    // }
    if (productos.length > 0) {
      //recorrer el array
      productos.map((producto) => {
        let fila = document.createElement("tr");
        let celdas = /*HTML */ `<td>${producto.nombreProducto}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.masVendido}</td>
            <td>${producto.imagen}</td>
                        <td>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUpdate" onclick="cargarFormulario('${productos.id}')">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="btn btn-danger" onclick="borrarRegistro('${producto.id}')">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
            </td>`;

        fila.innerHTML = celdas;
        cuerpoTabla.append(fila);
      });
    } else {
      cuerpoTabla.append("No hay datos para mostrar");
    }
  }
}

//cargar datos en el modal
const cargarFormulario = (id) => {
  idProductos = productos.findIndex((item) => item.id === id);
  let formulario = document.querySelector("#formulario-update");

  // Array.from(formulario.elements).forEach((campo) => {
  //   //vacuna
  //   if (campo.type === "checkbox") {
  //     campo.checked = productos[idProductos][campo.id];
  //   } else {
  //     campo.value = productos[idProductos][campo.id]; //mascotas[1].especie
  //   }
  // });

  //nombreProducto.value = productos[id].nombreProducto;
  // .value = mascotas[idMascota].especie;
  // raza.value = mascotas[idMascota].raza;
  // edad.value = mascotas[idMascota].edad;
  // sexo.value = mascotas[idMascota].sexo;
  // estatura.value = mascotas[idMascota].estatura;
  // color.value = mascotas[idMascota].color;
  // vacunado.checked = mascotas[idMascota].vacunado;
  // esterilizado.checked = mascotas[idMascota].esterilizado;
  // contacto.value = mascotas[idMascota].contacto;
  // destacado.checked = mascotas[idMascota].destacado;
  // imagen.value = mascotas[idMascota].imagen;
};
//Actualizar los datos de mascota con el modal
const actualizarProducto = (event) => {
  event.preventDefault();

  let formulario = document.querySelector("#formulario-update");

  // Array.from(formulario.elements).forEach((campo) => {
  //   //vacuna
  //   if (campo.type === "checkbox") {
  //     mascotas[idMascota][campo.id] = campo.checked;
  //   } else {
  //     mascotas[idMascota][campo.id] = campo.value; //mascotas[1].especie
  //   }
  // });
  // mascotas[idMascota].nombre = nombre.value
  // especie.value = mascotas[idMascota].especie;
  // raza.value = mascotas[idMascota].raza;
  // edad.value = mascotas[idMascota].edad;
  // sexo.value = mascotas[idMascota].sexo;
  // estatura.value = mascotas[idMascota].estatura;
  // color.value = mascotas[idMascota].color;
  // mascotas[idMascota].vacuna= vacuna.checked
  // esterilizado.checked = mascotas[idMascota].esterilizado;
  // contacto.value = mascotas[idMascota].contacto;
  // destacado.checked = mascotas[idMascota].destacado;
  // imagen.value = mascotas[idMascota].imagen;
  localStorage.setItem("productos", JSON.stringify(productos));
  crearTabla();
  myModal.hide();
};

const borrarRegistro = (id) => {
  let index = productos.findIndex((item) => item.id === id);

  if (index >= 0) {
    let validar = confirm(
      `Está seguro que quiere eliminar a ${productos[index].nombre}`
    );

    if (validar) {
      productos.splice(index, 1);
      localStorage.setItem("productos", JSON.stringify(productos));
      crearTabla();
    }
  }
};