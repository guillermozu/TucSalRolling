let url = new URL(location.href);
let idProducto = url.searchParams.get("id");

console.log(idProducto);

let productos = JSON.parse(localStorage.getItem("productos"));

let producto = productos.find((item) => item.id === idProducto);

// console.log(mascota);
document.querySelector("h3").innerText = producto.nombreProducto;

//Agregar imagen de la mascota
document.querySelector("#imagen-mascota").src = producto.imagen;
document.querySelector("#imagen-mascota").alt = producto.nombre;

//Crear tabla con los datos
let contenedorTabla = document.querySelector("tbody");
let fila = document.createElement("tr");
let celdas = /*HTML */ `<td>${producto.especie}</td>
<td>${producto.estatura}</td>
<td>${producto.edad}</td>
<td>${producto.sexo}</td>`;
fila.innerHTML = celdas;
contenedorTabla.append(fila);
