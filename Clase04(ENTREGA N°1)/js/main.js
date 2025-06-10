//Juego de adivinar un numero aleatoria entre el 1 y el 500

let intentos = 10;
const numeroAleatorio = Math.floor(Math.random() * 500);
let numeroIngresado;

function restarIntento() {
    intentos--;
}

while (intentos > 0) {

    numeroIngresado = parseInt(prompt("Ingrese un numero entre el 1 y el 500"));
     
    if (isNaN(numeroIngresado)) {
        alert("Tu numero no es valido, intenta de nuevo.");
        continue;
    }
    
    if(numeroIngresado < 1 || numeroIngresado > 500){
        alert("El numero que ingresaste no es valido porque es mayor a 500, ingrese un numero nuevamente");
        continue;
    }

    if(numeroIngresado === numeroAleatorio){
        alert("Adivinaste el numero, has ganado el juego!!!");
        break;
    }else{
        restarIntento();
    }

    if (intentos == 0) {
        alert("Perdiste el juego. El numero era " + numeroAleatorio);
        break;
    }

    if(numeroIngresado < numeroAleatorio){
        alert("Tu numero es mayor al numero ingresado, intenta de nuevo. Te quedan " + intentos + " intentos");
    }else{
        alert("El numero es menor al numero ingresado, intenta de nuevo. Te quedan " + intentos + " intentos");
    }

}