const productos = [
  { id: 1, nombre: "Camisa Blanca", categoria: "camisa", precio: 26000, imagen: "../assets/camisaBlanca.jpg" },
  { id: 2, nombre: "Pantalón Azul", categoria: "pantalon", precio: 32000, imagen: "../assets/pantalonAzul.jpg" },
  { id: 3, nombre: "Vestido Rojo", categoria: "vestido", precio: 48500, imagen: "../assets/vestidoRojo.jpg" },
  { id: 4, nombre: "Camisa Negra", categoria: "camisa", precio: 27000, imagen: "../assets/camisaNegra.jpg" },
  { id: 5, nombre: "Camisa Azul", categoria: "camisa", precio: 26500, imagen: "../assets/camisaAzul.jpg" },
  { id: 6, nombre: "Pantalón Negro", categoria: "pantalon", precio: 34000, imagen: "../assets/pantalonNegro.jpg" },
  { id: 7, nombre: "Vestido Negro", categoria: "vestido", precio: 50000, imagen: "../assets/vestidoNegro.jpg" },
  { id: 8, nombre: "Camisa Celeste", categoria: "camisa", precio: 25000, imagen: "../assets/camisaCeleste.jpg" },
  { id: 9, nombre: "Vestido Blanco", categoria: "vestido", precio: 52000, imagen: "../assets/vestidoBlanco.jpg" },
  { id: 10, nombre: "Pantalón Marron", categoria: "pantalon", precio: 31000, imagen: "../assets/pantalonMarron.jpg" },
  { id: 11, nombre: "Vestido Azul", categoria: "vestido", precio: 48000, imagen: "../assets/vestidoAzul.jpg" },
  { id: 12, nombre: "Camisa Marron", categoria: "camisa", precio: 28000, imagen: "../assets/camisaMarron.jpg" }
];



//LocalStorage
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Llamado al html por IDs
const contenedor = document.getElementById("contenedorProductos");
const buscador = document.getElementById("buscador");
const filtroCategoria = document.getElementById("filtroCategoria");
const filtroPrecio = document.getElementById("filtroPrecio");
const btnModoOscuro = document.getElementById("btnModoOscuro");
const verCarrito = document.getElementById("verCarrito")
const vaciarCarrito = document.getElementById("vaciarCarrito")

// Mostrar productos
function mostrarProductos(lista) {
  contenedor.innerHTML = "";
  if (lista.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }
  lista.forEach(prod => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">
      <h3>${prod.nombre}</h3>
      <p>$${prod.precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}


// Mostrar productos iniciales
mostrarProductos(productos);


// Agregar producto al carrito
function agregarAlCarrito(id) {
  const prod = productos.find(p => p.id === id);
  carrito.push(prod);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert(`${prod.nombre} agregado al carrito, su precio es $${prod.precio}`);
}


//Vaciar carrito de compra
vaciarCarrito.addEventListener("click", () => {
  carrito = [];
  localStorage.removeItem("carrito");
  alert("Carrito vaciado.");
});


// Mostrar todos los productos del carrito
verCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
  } else {
    let resumen = "Carrito:\n";
    carrito.forEach((p) => {
      resumen += `${p.nombre} - $${p.precio.toLocaleString()}\n`;
    });
    alert(resumen);
  }
});


// Filtros
function aplicarFiltros() {
  const texto = buscador.value.toLowerCase();
  const categoria = filtroCategoria.value;
  const precioMax = parseInt(filtroPrecio.value);

  let filtrados = productos.filter(p => p.nombre.toLowerCase().includes(texto));

  if (categoria !== "todos") {
    filtrados = filtrados.filter(p => p.categoria === categoria);
  }

  if (!isNaN(precioMax)) {
    filtrados = filtrados.filter(p => p.precio <= precioMax);
  }

  mostrarProductos(filtrados);
}
buscador.addEventListener("input", aplicarFiltros);
filtroCategoria.addEventListener("change", aplicarFiltros);
filtroPrecio.addEventListener("input", aplicarFiltros);


//Modo oscuro
if (localStorage.getItem("modo") === "oscuro") {
  document.body.classList.add("dark-mode");
}
btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const modoActual = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
  localStorage.setItem("modo", modoActual);
});