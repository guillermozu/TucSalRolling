// const sportsSupplements = [
//     { nombre: 'Whey Protein', precio: 29.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Creatine Monohydrate', precio: 19.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'BCAA', precio: 24.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Pre-Workout', precio: 34.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Fish Oil', precio: 14.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Multivitamin', precio: 12.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Glutamine', precio: 22.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Casein Protein', precio: 32.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Beta-Alanine', precio: 18.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
//     { nombre: 'Caffeine Pills', precio: 9.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' }
//   ];
  
//   const productos1 = JSON.parse(localStorage.getItem('productos1')) || [];
  
//   const contenedor = document.getElementById('contenedorTarjeta');
  
//   sportsSupplements.forEach(producto => {
//     const card = document.createElement('div');
//   card.classList.add('card');
//   card.style.width = '18rem';
//   card.classList.add('m-2');
//   card.innerHTML = ` <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"> <div class="card-body"> <h5 class="card-title">${producto.nombre}</h5> <p class="card-text">Precio: $${producto.precio}</p> <a href="#" class="btn btn-primary">Comprar</a> </div> `;
//   contenedor.appendChild(card);});
  
//   localStorage.setItem('productos1', JSON.stringify(productos1));

const sportsSupplements = [
  {
    nombreProducto: "Protein Powder",
    descripcion: "High-quality whey protein powder",
    precio: 29.99,
    cantidad: 20,
    masVendido: true,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Creatine Monohydrate",
    descripcion: "Pure creatine monohydrate for muscle growth",
    precio: 19.99,
    cantidad: 15,
    masVendido: false,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "BCAA",
    descripcion: "Branched-Chain Amino Acids for muscle recovery",
    precio: 24.99,
    cantidad: 30,
    masVendido: true,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Fish Oil",
    descripcion: "Omega-3 Fish Oil for heart health",
    precio: 14.99,
    cantidad: 25,
    masVendido: false,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Multivitamin",
    descripcion: "Daily multivitamin for overall health",
    precio: 12.99,
    cantidad: 40,
    masVendido: true,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Glutamine",
    descripcion: "L-Glutamine for muscle recovery",
    precio: 22.99,
    cantidad: 10,
    masVendido: false,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Casein Protein",
    descripcion: "Slow-digesting casein protein for nighttime recovery",
    precio: 32.99,
    cantidad: 12,
    masVendido: true,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Pre-Workout",
    descripcion: "Pre-workout supplement for energy and focus",
    precio: 34.99,
    cantidad: 18,
    masVendido: true,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
   {
    nombreProducto: "Caffeine Pills",
    descripcion: "Caffeine pills for increased energy and alertness",
    precio: 9.99,
    cantidad: 50,
    masVendido: false,
    imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
  {
    nombreProducto: "Beta-Alanine",
    descripcion: "Beta-alanine for improved endurance",
    precio: 18.99,
    cantidad: 22,
    masVendido: false,
    imagen:'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true',
  },
 ];

 if (!localStorage.getItem("productos")){

  localStorage.setItem('productos', JSON.stringify(sportsSupplements));
 }
 const productos = JSON.parse(localStorage.getItem('productos')) || [];

 const contenedor = document.getElementById('contenedorTarjeta');
 
 productos.forEach(producto => {
   const card = document.createElement('div');
 card.classList.add('card');
 card.style.width = '18rem';
 card.classList.add('m-2');
 card.innerHTML = ` <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombreProducto}"> <div class="card-body"> <h5 class="card-title">${producto.nombreProducto}</h5> <p class="card-text">Precio: $${producto.precio}</p> <a href="./pages/detalle_productos.html?nombreProducto=${producto.nombreProducto}" class="btn btn-primary">Comprar</a> </div> `;
 contenedor.appendChild(card);});
 
 

// // Guardar en localStorage
// localStorage.setItem("productos", JSON.stringify(productostest));