let productos = [
    {
        nombre: "zapatillas",
        precio: 500,
        cantidad: 20
    },
    {
        nombre: "zapatos",
        precio: 600,
        cantidad: 15
    },
    {
        nombre: "alpargatas",
        precio: 400,
        cantidad: 30
    },
    {
        nombre: "sandalias",
        precio: 550,
        cantidad: 25
    },
    {
        nombre: "chanclas",
        precio: 450,
        cantidad: 40
    }

]

const buscar = productos.find(function(producto){
    return producto.nombre = "sandalias"
})
console.log(buscar);

const menorQue = productos.filter(function(producto){
    return producto.precio < 500
})
console.log(menorQue);

const productosConIVA = productos.map(function(producto){
    return{
        precioConIVA: producto.precio * 1.21
    }
})
console.log(productosConIVA);