// Funcio
let negretaFuncio = () =>
  (document.getElementById("negretaF").style.fontWeight = "900");

let italicaFuncio = () =>
  (document.getElementById("negretaF").style.fontStyle = "italic");

// Classe
class estils {
  constructor(tamanyNegreta, italica) {
    this.tamanyNegreta = tamanyNegreta;
    this.italica = italica;
  }
  negretaClasse = () =>
    (document.getElementById("negretaC").style.fontWeight =
      this.tamanyNegreta);
  italicaClasse = () =>
    (document.getElementById("negretaC").style.fontStyle =
      this.italica);
}
// Instancio la classe
let estil = new estils("900", "italic");
