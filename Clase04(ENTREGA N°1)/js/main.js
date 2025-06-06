function saludar(){
    alert("Hola, para crear una cuenta aqui deberas ingresar tus datos");
}
saludar();
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let usuario;
let usuarioIngresado;
let contraseña;
let contraseñaIngresada;


do {
    usuario = prompt("Ingrese su nombre de usuario");
    usuarioIngresado = prompt("Ingrese nuevamente su usuario para confirmarlo");

    contraseña = prompt("Ingrese su contraseña");
    contraseñaIngresada = prompt("Ingrese nuevamente su contraseña para confirmarla");

    if(usuario != usuarioIngresado  || contraseña != contraseñaIngresada){
        alert("No se ha podido crear la cuenta por usuario o contraseña incorrectas. Vuelva a intentarlo");
    }
} while (usuario != usuarioIngresado || contraseña != contraseñaIngresada);

alert("Su cuenta ha sido creada correctamente");

console.log("Su nombre es " +nombre,". Su apellido es " +apellido,", su nombre de usuario es " + usuarioIngresado," y su contraseña es " +contraseñaIngresada);