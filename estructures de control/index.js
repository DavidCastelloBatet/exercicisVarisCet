// Variables
let contrasenyaGuardada = 'hola';
let contrasenyaPerill = 'perill';
let contrasenyaPersonal = 'david';

// Entrada i recollida de dades amb PROMT
let contrasenyaIf = prompt('Introdueix contrasenya per l\'IF :');
let contrasenyaSwitch = prompt('Introdueix contrasenya pel Switch:');

// Estructuraa IF
if (contrasenyaIf === contrasenyaGuardada) {
  document.getElementById('if').innerHTML = 'Benvingut a Casa';
  console.log('IF: contrasenya guardada correcte');
} else if (contrasenyaIf === contrasenyaPerill) {
  document.getElementById('if').innerHTML = 'Avisem amb If';
  console.log('IF: contrasenya guardada perill');
} else {
  document.getElementById('if').innerHTML = 'Las cagao..., prova de nou';
  console.log('IF: contrasenya guardada error');
}

// Estructura SWITCH
switch (contrasenyaSwitch) {
  case contrasenyaGuardada:
    document.getElementById('switch').innerHTML = 'Benvingut a Casa';
    console.log('SWITCH: contrasenya guardada correcte');
    break;

  case contrasenyaPersonal:
    document.getElementById('switch').innerHTML = `Joder ${contrasenyaPersonal.toUpperCase()}, ja era hora!`;
    console.log('SWITCH: contrasenya personal correcte');
    break;

  case contrasenyaPerill:
    document.getElementById('switch').innerHTML = 'Avisem discretament amb switch';
    console.log('SWITCH: contrasenya guardada perill');
    break;
  
  default:
    document.getElementById('switch').innerHTML = 'Error, va, prova de nou';
    console.log('SWITCH: contrasenya guardada error');
    break;
}