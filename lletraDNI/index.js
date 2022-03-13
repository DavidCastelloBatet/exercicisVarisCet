function averigua() {
  const cadena = "TRWAGMYFPDXBNJZSQVHLCKET";

  let valorNumericDniIntroduit = formulario.dni.value.slice(0, 8);
  let lletraDniIntroduit = formulario.dni.value.slice(8, 9).toUpperCase();

  console.log(valorNumericDniIntroduit);
  console.log(lletraDniIntroduit);

  const siEsCorrecte = `El DNI introduit,  ${valorNumericDniIntroduit} - ${lletraDniIntroduit},  es Correcte.`;
  const noEsCorrecte = `El DNI introduit,  ${valorNumericDniIntroduit} - ${lletraDniIntroduit},  no es Correcte. Prova-ho de nou.`;

  let posicio = valorNumericDniIntroduit % 23;
  let lletra = cadena.substring(posicio, posicio + 1);
  console.log(lletra);

  if (lletraDniIntroduit == lletra) {
    document.getElementById("comp").innerHTML = siEsCorrecte;
    console.log("DNI Correcte");
  } else {
    document.getElementById("comp").innerHTML = noEsCorrecte;
    document.formulario.dni.value = "";

    console.log("Error, DNI introduit Incorrecte");
  }
}
