
"use strict";
var numero1;
var numero2;
var suma;
var nom;
var cognom;
var confirm;
const dies = ['Dilluns', 'Dimarts', 'Dimecres'];
const provaConst = 'Pepe';

numero1 = 10;
numero2 = 5;
nom = "David";
cognom = "Castelló";
suma = numero1 + numero2
confirm = true;

document.getElementById('mostrar').innerHTML = `La suma es: ${suma}`;
numero2 = 10;
suma = numero1 + numero2;
document.getElementById('actualitzar').innerHTML = `La suma es: ${suma}`;
document.getElementById('complert').innerHTML = `El meu nom es ${nom} i el meu cognom ${cognom}. Tinc ${numero1}.`;


let veritat = () => document.getElementById('bool').innerHTML = `El valor de confirm es ${confirm}`;
let mentida = () => document.getElementById('bool').innerHTML = `El valor de confirm es ${confirm}`;
confirm ? veritat() : mentida();
confirm = !true;
confirm ? veritat() : mentida();

dies.push('Dijous'); 
dies[4] = 'Divendres';
//provaConst = 'Manel'
document.getElementById('arrayConst').innerHTML = dies;


