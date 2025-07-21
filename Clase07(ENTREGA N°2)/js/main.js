let productos = [];
let pagina = 0;
const limite = 16;
let cargando = false;

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

async function cargarProductos() {
  if (cargando) return;
  cargando = true;

  const skip = pagina * limite;
  const url = `https://dummyjson.com/products?limit=${limite}&skip=${skip}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const nuevosProductos = data.products.map(prod => ({
      id: prod.id,
      nombre: prod.title,
      categoria: prod.category,
      precio: prod.price * 1000,
      imagen: prod.thumbnail
    }));

    productos = productos.concat(nuevosProductos);
    mostrarProductos(productos);
    pagina++;
  } catch (err) {
    console.error("Error al cargar productos:", err);
  } finally {
    cargando = false;
  }
}

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
  const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});
Toast.fire({
  icon: "success",
  title: "Producto agregado al carrito correctamente"
});
}


//Vaciar carrito de compra
vaciarCarrito.addEventListener("click", () => {
  carrito = [];
  localStorage.removeItem("carrito");
  Swal.fire({
    title: "¡El carrito ha sido vaciado!",
    icon: "info"
  })
});


// Mostrar todos los productos del carrito
verCarrito.addEventListener("click", () => {
  if (carrito.length === 0) {
    Swal.fire({
      title: "¡El carrito está vacío!",
      text: "Agrega productos para poder comprarlos.",
      icon: "error"
    });
  } else {
    let resumen = " ";
    let total = 0;
    carrito.forEach((p) => {
      resumen += `${p.nombre} - $${p.precio.toLocaleString()}<br>`;
      total += p.precio
    });

    resumen += `<hr><strong>Total: $${total.toLocaleString()}</strong>`;

    Swal.fire({
      title: "Productos en el carrito",
      html: resumen,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Confirmar compra",
      cancelButtonText: "Seguir comprando"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Compra confirmada!",
          text: "Gracias por tu compra.",
          icon: "success"
        });
        carrito.length = 0; 
      }
    });
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
function darkMode(){
  if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("dark-mode");
  }
  btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const modoActual = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
    localStorage.setItem("modo", modoActual);
  });
}
darkMode();

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    cargarProductos(); 
  }
});
cargarProductos();
