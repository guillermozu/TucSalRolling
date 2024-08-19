const sportsSupplements = [
      {
        nombreProducto: "Protein Powder",
        descripcion: "High-quality whey protein powder",
        precio: 29.99,
        cantidad: 20,
        masVendido: true,
        imagen: "https://example.com/protein-powder.jpg",
      },
      {
        nombreProducto: "Creatine Monohydrate",
        descripcion: "Pure creatine monohydrate for muscle growth",
        precio: 19.99,
        cantidad: 15,
        masVendido: false,
        imagen: "https://example.com/creatine-monohydrate.jpg",
      },
      {
        nombreProducto: "BCAA",
        descripcion: "Branched-Chain Amino Acids for muscle recovery",
        precio: 24.99,
        cantidad: 30,
        masVendido: true,
        imagen: "https://example.com/bcaa.jpg",
      },
      {
        nombreProducto: "Fish Oil",
        descripcion: "Omega-3 Fish Oil for heart health",
        precio: 14.99,
        cantidad: 25,
        masVendido: false,
        imagen: "https://example.com/fish-oil.jpg",
      },
      {
        nombreProducto: "Multivitamin",
        descripcion: "Daily multivitamin for overall health",
        precio: 12.99,
        cantidad: 40,
        masVendido: true,
        imagen: "https://example.com/multivitamin.jpg",
      },
      {
        nombreProducto: "Glutamine",
        descripcion: "L-Glutamine for muscle recovery",
        precio: 22.99,
        cantidad: 10,
        masVendido: false,
        imagen: "https://example.com/glutamine.jpg",
      },
      {
        nombreProducto: "Casein Protein",
        descripcion: "Slow-digesting casein protein for nighttime recovery",
        precio: 32.99,
        cantidad: 12,
        masVendido: true,
        imagen: "https://example.com/casein-protein.jpg",
      },
      {
        nombreProducto: "Pre-Workout",
        descripcion: "Pre-workout supplement for energy and focus",
        precio: 34.99,
        cantidad: 18,
        masVendido: true,
        imagen: "https://example.com/pre-workout.jpg",
      },
       {
        nombreProducto: "Caffeine Pills",
        descripcion: "Caffeine pills for increased energy and alertness",
        precio: 9.99,
        cantidad: 50,
        masVendido: false,
        imagen: "https://example.com/caffeine-pills.jpg",
      },
      {
        nombreProducto: "Beta-Alanine",
        descripcion: "Beta-alanine for improved endurance",
        precio: 18.99,
        cantidad: 22,
        masVendido: false,
        imagen: "https://example.com/beta-alanine.jpg",
      },
     ];

     const productos = JSON.parse(localStorage.getItem('productos')) || [];
  
     const contenedor = document.getElementById('contenedorTarjeta');
     
     sportsSupplements.forEach(producto => {
       const card = document.createElement('div');
     card.classList.add('card');
     card.style.width = '18rem';
     card.classList.add('m-2');
     card.innerHTML = ` <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombreProducto}"> <div class="card-body"> <h5 class="card-title">${producto.nombreProducto}</h5> <p class="card-text">Precio: $${producto.precio}</p> <a href="#" class="btn btn-primary">Comprar</a> </div> `;
     contenedor.appendChild(card);});
     
     localStorage.setItem('productos1', JSON.stringify(productos));
    
    // // Guardar en localStorage
    // localStorage.setItem("productos", JSON.stringify(productostest));