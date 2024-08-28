let listados = JSON.parse(localStorage.getItem("productos")) || [];
console.log("listados");
const cargarMasVendidos = () => {
  let contenedor = document.querySelector("#contenedorMasVendidos");
  let masVendidos = listados.filter((producto) => producto.masVendido === true);

  if (masVendidos.length > 0) {
    masVendidos.map((masVendido) => {
      let col = document.createElement("div");
      col.classList = "col my-3";

      let card = /*HTML */ ` <div class="card">
                <img src=${masVendido.imagen} class="card-img-top" alt=${masVendido.nombreProducto}>
                <div class="card-body">
                <h5 class="card-title">${masVendido.nombreProducto}</h5>
                <p class="card-text">${masVendido.descripcion}</p>
                <a href="#" onclick="irMascota('${masVendido.id}')">Ver más...</a>
                </div>
             </div>`;

      col.innerHTML = card;
      contenedor.append(col);
    });
  } else {
    let col = document.createElement("div");
    let mensaje = `<h4 class="text-center">No hay mascotas destacadas</h4>`;
    col.innerHTML = mensaje;
    contenedor.append(col);
  }
};

cargarMasVendidos();