let usuario = {
    id: 345,
    nombre: "shampoo",
    precio: 200,
    cantidad: 2,
    subtotal: function () {
        return this.precio * this.cantidad;
    }
}
console.log(usuario);
console.log("Subtotal: " + usuario.subtotal() + "$");

localStorage.setItem("usuario", JSON.stringify(usuario))

const usuarioAlmacenado = JSON.parse(localStorage.getItem("usuario"))

