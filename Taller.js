
const prompt = require("prompt-sync")();

const Nume1 = parseFloat(prompt("Ingresa el primer numero: "));
const Nume2 = parseFloat(prompt("Ingresa el segundo numero: "));
const Nume3 = parseFloat(prompt("Ingresa el tercer numero: "));
let numeros = [Nume1, Nume2, Nume3];

   if (Nume1 === Nume2 && Nume2 === Nume3) {
        console.log("Los numeros son iguales ");
      }
    else {
    } 

function Mayor(numeros) {
    let mayor = numeros[0];
    if (numeros[1] > mayor) mayor = numeros[1];
    if (numeros[2] > mayor) mayor = numeros[2];
    return mayor;
 }

function menor(numeros) {
    let menor = numeros[0];
    if(numeros[1] < menor) menor = numeros[1];
    if(numeros[2] < menor) menor = numeros[2];
    return menor;
}    

function medio(numeros) {
    let a = Nume1;
    let b = Nume2;
    let c = Nume3;

    if ((a > b && a < c) || (a > c && a < b)) {
        return a;
    } else if ((b > a && b < c) || (b > c && b < a)) {
        return b;
    } else if (a===b) {
       return a ;
    } else if (b===c) {
        return c;
     }
     else {return c

    }
}

let resultado = [Mayor(numeros), medio(numeros), menor(numeros)];
let resultado1= [menor(numeros), medio(numeros), Mayor(numeros)];

console.log(resultado);
console.log(resultado1);




    