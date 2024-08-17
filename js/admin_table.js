// Obtener referencias a elementos del DOM
let cuerpoTabla = document.querySelector("tbody");
let contadorProductos = document.getElementById("count");
let idProductos = null;
const myModal = new bootstrap.Modal(document.getElementById("modalUpdate"));
let listaproductos = JSON.parse(localStorage.getItem("productos")) || [];

// Crear la tabla al cargar la página
crearTabla();

// Función para crear la tabla con los productos
function crearTabla() {
  if (cuerpoTabla) {
    cuerpoTabla.innerHTML = "";
    contadorProductos.innerText =
      "Productos registrados: " + listaproductos.length;

    if (listaproductos.length > 0) {
      listaproductos.forEach((producto, index) => {
        let fila = document.createElement("tr");
        let celdas = /*HTML*/ `
          <td>${producto.nombreProducto}</td>
          <td>${producto.descripcion}</td>
          <td>${producto.precio}</td>
          <td>${producto.cantidad}</td>
          <td>${producto.masVendido ? "Sí" : "No"}</td>
          <td><img src="${producto.imagen}" alt="${
          producto.nombreProducto
        }" style="width: 50px; height: 50px;"></td>
          <td>
            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalUpdate" onclick="cargarFormulario(${index})">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="btn btn-danger" onclick="borrarRegistro(${index})">
              <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </td>`;

        fila.innerHTML = celdas;
        cuerpoTabla.appendChild(fila);
      });
    } else {
      cuerpoTabla.innerHTML =
        "<tr><td colspan='7' class='text-center'>No hay datos para mostrar</td></tr>";
    }
  }
}

// Función para cargar los datos del producto en el formulario de actualización
const cargarFormulario = (index) => {
  idProductos = index;
  let producto = listaproductos[index];
  let formulario = document.querySelector("#formulario-update");

  Array.from(formulario.elements).forEach((campo) => {
    if (campo.type === "checkbox") {
      campo.checked = producto[campo.id];
    } else {
      campo.value = producto[campo.id];
    }
  });
};

// Función para actualizar los datos del producto
const actualizarProducto = (event) => {
  event.preventDefault(); // Evitar el comportamiento predeterminado del formulario

  let formulario = document.querySelector("#formulario-update");

  // Actualizar los valores en listaproductos
  Array.from(formulario.elements).forEach((campo) => {
    if (campo.type === "checkbox") {
      listaproductos[idProductos][campo.id] = campo.checked;
    } else {
      listaproductos[idProductos][campo.id] = campo.value;
    }
  });

  // Guardar la lista actualizada en localStorage
  localStorage.setItem("productos", JSON.stringify(listaproductos));

  // Recargar la lista de productos desde localStorage
  listaproductos = JSON.parse(localStorage.getItem("productos"));

  crearTabla();
  myModal.hide(); // Cerrar el modal después de la actualización
};

// Función para borrar un producto del array y actualizar la tabla
const borrarRegistro = (index) => {
  let producto = listaproductos[index];
  let validar = confirm(
    `¿Está seguro que quiere eliminar a ${producto.nombreProducto}?`
  );

  if (validar) {
    listaproductos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(listaproductos));
    crearTabla();
  }
};
