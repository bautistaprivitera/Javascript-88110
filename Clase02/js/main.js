/*Banco*/

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let usuario = prompt("Ingrese su nombre de usuario");
let usuarioIngresado = prompt("Ingrese de nuevo su usuario para confirmarlo");
let contraseña = prompt("Ingrese su contraseña");
let contraseñaIngresada = prompt("Ingrese de nuevo su contraseña para confirmarla");
let edad = prompt("Ingrese su edad")

if(usuario === usuarioIngresado && contraseña === contraseñaIngresada && edad >= 18){

    console.log("Ya creamos su cuenta bancaria, puede empezar a operar su dinero")
}else{
    console.log("No se ha podido crear debido a falta de informacion");
}


