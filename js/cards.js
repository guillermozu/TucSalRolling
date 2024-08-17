const sportsSupplements = [
    { nombre: 'Whey Protein', precio: 29.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155810-1600-auto?v=638448264382630000&width=1600&height=auto&aspect=true' },
    { nombre: 'Creatine Monohydrate', precio: 19.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'BCAA', precio: 24.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Pre-Workout', precio: 34.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Fish Oil', precio: 14.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Multivitamin', precio: 12.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Glutamine', precio: 22.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Casein Protein', precio: 32.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Beta-Alanine', precio: 18.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' },
    { nombre: 'Caffeine Pills', precio: 9.99, imagen: 'https://trustdistribution.vtexassets.com/arquivos/ids/155814-1600-auto?v=638448275694430000&width=1600&height=auto&aspect=true' }
  ];
  
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  
  const contenedor = document.getElementById('contenedorTarjeta');
  
  sportsSupplements.forEach(producto => {
    const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '18rem';
  card.classList.add('m-2');
  card.innerHTML = ` <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}"> <div class="card-body"> <h5 class="card-title">${producto.nombre}</h5> <p class="card-text">Precio: $${producto.precio}</p> <a href="#" class="btn btn-primary">Comprar</a> </div> `;
  contenedor.appendChild(card);});
  
  localStorage.setItem('productos', JSON.stringify(productos));