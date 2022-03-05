
      // Script per eliminar paraula i insertar un salt de linea
      function envioTelegrama() {
        let telegrama = document.getElementById("stop").innerHTML;
        document.getElementById("stop").innerHTML = telegrama.replaceAll(
          "stop",
          "<br>"
        );
      }
      
      // Script per invertir l'ordre de les paraules d'una frase
      function canviOrdre() {
        //Versio amb PROMT
        //let string = prompt("Introdueix la frase que vols invertir:");
        //let string = document.getElementById("ordre").innerHTML;
        
        // Versio amb INPUT
        let string = document.getElementById("ordre").value;
        console.log(string);
        let auxiliar = string.split(" ");
        console.log(auxiliar);
        let newArray = auxiliar.reverse().toString().replaceAll(",", " ");
        console.log(newArray);
        document.getElementById("ordre2").innerHTML = newArray;
      }
    