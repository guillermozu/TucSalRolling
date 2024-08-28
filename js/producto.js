let url = new URL(location.href);
let nombreProducto = url.searchParams.get("nombreProducto");

console.log(nombreProducto);

let listado = JSON.parse(localStorage.getItem("productos"));

let producto = listado.find((item) => item.nombreProducto === nombreProducto);

// console.log(mascota);
document.querySelector("#nombreBebida").innerText = producto.nombreProducto;

//Agregar imagen de la mascota
document.querySelector("#imagen-mascota").src = producto.imagen;
document.querySelector("#imagen-mascota").alt = producto.nombreProducto;

//Crear tabla con los datos
let contenedorTabla = document.querySelector("tbody");
let fila = document.createElement("tr");
let celdas = /*HTML */ `<td>${producto.nombreProducto}</td>
<td>${producto.descripcion}</td>
<td>${producto.precio}</td>
<td>${producto.masVendido}</td>`;
fila.innerHTML = celdas;
contenedorTabla.append(fila);
