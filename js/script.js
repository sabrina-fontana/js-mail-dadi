// lista delle email autorizzate
var email = ['sabfon@hotmail.it', 'email@gmail.com', 'email@outlook.it'];
// chiedo all'utente la sua email
// var userEmail = prompt('Scrivi il tuo indirizzo email');
// se non è autorizzato lo fermo, altrimenti procede al gioco
// for(var i = 0; i < email.length; i++) {
//   if (email[i] !== userEmail) {
//     alert('Indirizzo errato. Riprova');
//   }
// }

// numero random da 1 a 6 generato dal computer
var computerNumber = Math.floor(Math.random() * 6) +1;
// numero scelto dall'utente
var userNumber = parseInt(prompt('scegli un numero da 1 a 6'));

var result = document.getElementById('text');

// controllo che l'input dell'utente sia un numero compreso tra 1 e 6
if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
  alert('Valore errato. Riprova');
} else {
  if (computerNumber > userNumber) {
  result.innerHTML = 'Il computer ha scelto ' + computerNumber + '<br>Hai perso';
  } else if (computerNumber < userNumber) {
    result.innerHTML = 'Il computer ha scelto ' + computerNumber + '<br>Hai vinto!';
  } else {
    result.innerHTML = 'Entrambi avete scelto ' + computerNumber + '<br>Siete pari';
  }
}
