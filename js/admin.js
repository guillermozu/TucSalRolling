//template o molde de mascotas
class Productos {
    constructor(
      nombreProducto,
      descripcion,
      precio,
      cantidad,
      masVendido,
      imagen,
      
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
  
  // //array o lista de especies
  // let especies = ["perro", "gato", "anfibio", "roedor", "ave", "exótico", "pez"];
  // //array o lista de sexo
  // let sexo = ["macho", "hembra"];
  // //array o lista de estatura o tamaño
  // let estaturas = ["pequeño", "mediano", "grande"];
  
  //capturar elementos del DOM de los selects
  // let listaEspecies = document.querySelector('#especies')
  let nombreProducto = document.querySelector("#nombreProducto");
  let descripcion = document.getElementById("descripcion");
  let precio = document.querySelector("#precio");
  let cantidad = document.querySelector("#cantidad");
  let masVendido = document.getElementById("masVendido");
  let imagen = document.querySelector("#imagen");
  
  // cargar las listas con datos
  // especies.forEach((especie) => {
  //   let option = document.createElement("option");
  //   option.value = especie;
  //   option.innerText = especie;
  //   listaEspecies.append(option);
  
  //   {
  //     /* <select>
  // <option value='perro'>perro</option> 
  // <option value='gato'>gato</option> 
  // </select> */
  //   }
  // });
  
  // sexo.forEach((item) => {
  //   let option = document.createElement("option");
  //   option.value = item;
  //   option.innerText = item;
  //   listaSexo.append(option);
  // });
  
  // estaturas.forEach((item) => {
  //   let option = document.createElement("option");
  //   option.value = item;
  //   option.innerText = item;
  //   listaEstatura.append(option);
  // });
  
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
        imagen.value,
        
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