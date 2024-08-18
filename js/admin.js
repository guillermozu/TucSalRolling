//template o molde de mascotas
class Productos {
  constructor(
    nombreProducto,
    descripcion,
    precio,
    cantidad,
    masVendido,
    imagen
  ) {
    this.id = crypto.randomUUID();
    this.nombreProducto = nombreProducto;
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
    this.masVendido = masVendido;
    this.imagen = imagen;
  }
}

let productos = JSON.parse(localStorage.getItem("productos")) || [];
let formularioValido = true;
// let usuario = JSON.parse(localStorage.getItem("user")) || null;

//Validar usuario-------------
const validarUsuario = () => {
  // if(usuario){
  //   if(usuario.rol !=='admin'){

  //   }
  // }
  if (usuario?.rol !== "admin") {
    let alerta = /*HTML */ `<div class="alert alert-danger" role="alert">
   No dispone de los permisos necesarios para acceder. <a href="./login.html" class="alert-link">Inicie sesión con otra cuenta.</a> 
  </div>`;
    document.querySelector("main").innerHTML = alerta;
  }
};

// validarUsuario();


//capturar elementos del DOM de los selects
// let listaEspecies = document.querySelector('#especies')
let nombreProducto = document.querySelector("#nombreProducto");
let descripcion = document.getElementById("descripcion");
let precio = document.querySelector("#precio");
let cantidad = document.querySelector("#cantidad");
let masVendido = document.getElementById("masVendido");
let imagen = document.querySelector("#imagen");


// crear la función para agregar mascotas nuevas
const agregarProductos = (event) => {
  event.preventDefault();

  if (
    nombreProducto.value.length > 0 &&
    descripcion.value.length > 0 &&
    precio.value.length > 0 &&
    cantidad.value.length > 0
  ) {
    formularioValido = true;
  } else {
    formularioValido = false;
  }

  if (formularioValido) {
    let nuevoProducto = new Productos(
      nombreProducto.value,
      descripcion.value,
      precio.value,
      cantidad.value,
      masVendido.checked,
      imagen.value
    );

    productos.push(nuevoProducto);
    localStorage.setItem("productos", JSON.stringify(productos));
    document.querySelector("#formulario-alta").reset();
    nombre.focus();
  } else {
    alert("Por favor, complete todos los campos obligatorios que están con *.");
  }

  //   nombre.value = "";
  //    listaEspecies.value = "";
  //     raza.value = "";
  //     edad.value = "";
  //     listaSexo.value = "";
  //     listaEstatura.value = "";
  //     color.value = "";
  //     vacunado.checked = false;
  //     esterilizado.checked = false;
  //     contacto.value = "";
  //     destacado.checked = false;
  //     imagen.value = "";
};
//array de objetos
//guardar en localstorage
if (document.querySelector("#formulario-alta")) {
  document
    .querySelector("#formulario-alta")
    .addEventListener("submit", agregarProductos);
}

//testeo de productos

// const productostest = [
//   {
//     nombreProducto: "Protein Powder",
//     descripcion: "High-quality whey protein powder",
//     precio: 29.99,
//     cantidad: 20,
//     masVendido: true,
//     imagen: "https://example.com/protein-powder.jpg",
//   },
//   {
//     nombreProducto: "Creatine Monohydrate",
//     descripcion: "Pure creatine monohydrate for muscle growth",
//     precio: 19.99,
//     cantidad: 15,
//     masVendido: false,
//     imagen: "https://example.com/creatine-monohydrate.jpg",
//   },
//   {
//     nombreProducto: "BCAA",
//     descripcion: "Branched-Chain Amino Acids for muscle recovery",
//     precio: 24.99,
//     cantidad: 30,
//     masVendido: true,
//     imagen: "https://example.com/bcaa.jpg",
//   },
//   {
//     nombreProducto: "Fish Oil",
//     descripcion: "Omega-3 Fish Oil for heart health",
//     precio: 14.99,
//     cantidad: 25,
//     masVendido: false,
//     imagen: "https://example.com/fish-oil.jpg",
//   },
//   {
//     nombreProducto: "Multivitamin",
//     descripcion: "Daily multivitamin for overall health",
//     precio: 12.99,
//     cantidad: 40,
//     masVendido: true,
//     imagen: "https://example.com/multivitamin.jpg",
//   },
//   {
//     nombreProducto: "Glutamine",
//     descripcion: "L-Glutamine for muscle recovery",
//     precio: 22.99,
//     cantidad: 10,
//     masVendido: false,
//     imagen: "https://example.com/glutamine.jpg",
//   },
//   {
//     nombreProducto: "Casein Protein",
//     descripcion: "Slow-digesting casein protein for nighttime recovery",
//     precio: 32.99,
//     cantidad: 12,
//     masVendido: true,
//     imagen: "https://example.com/casein-protein.jpg",
//   },
//   {
//     nombreProducto: "Pre-Workout",
//     descripcion: "Pre-workout supplement for energy and focus",
//     precio: 34.99,
//     cantidad: 18,
//     masVendido: true,
//     imagen: "https://example.com/pre-workout.jpg",
//   },
//   {
//     nombreProducto: "Caffeine Pills",
//     descripcion: "Caffeine pills for increased energy and alertness",
//     precio: 9.99,
//     cantidad: 50,
//     masVendido: false,
//     imagen: "https://example.com/caffeine-pills.jpg",
//   },
//   {
//     nombreProducto: "Beta-Alanine",
//     descripcion: "Beta-alanine for improved endurance",
//     precio: 18.99,
//     cantidad: 22,
//     masVendido: false,
//     imagen: "https://example.com/beta-alanine.jpg",
//   },
// ];

// // Guardar en localStorage
// localStorage.setItem("productos", JSON.stringify(productostest));
