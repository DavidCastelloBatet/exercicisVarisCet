// con document.all funcionaria pero està en desuso
// let arrayDom = Object.values(document.all);

// Al metodo values del objeto Object le pasamos como parametros
// todos los tags del documento con document.querySelectorAll('*')
let arrayDom = Object.values(document.querySelectorAll('*'));
console.log(arrayDom);

// Transformarlos en un array
let nameTag = new Array();
for (let i = 0; i < arrayDom.length; i++) {
  nameTag.push(arrayDom[i].localName);
}
console.log(nameTag)

// juntar y contar los elementos
let contador = nameTag.reduce((acumulador, valorActualnameTag) => 
(acumulador[valorActualnameTag] ? 
acumulador[valorActualnameTag] + 1 :
acumulador[valorActualnameTag] = 1, acumulador ), {});
console.log(contador);

// Mostrar los elementos
var text = "";
for(var [etiqueta, cantidad] of Object.entries(contador))
{
    console.log(etiqueta,":",cantidad);
  
}


