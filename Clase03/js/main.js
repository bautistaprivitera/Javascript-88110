// funciones
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let dni = prompt ("ingrese su dni");
let edad = prompt("Ingrese su edad");

function valores(){
if(edad <= 18){
    alert("Puede pasar a la fiesta")
}else{
    alert("usted es menor de edad y no puede pasar a la fiesta")
}
}
valores();
