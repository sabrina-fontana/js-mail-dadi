// lista delle email autorizzate
var email = ['sabfon@hotmail.it', 'email@gmail.com', 'email@outlook.it'];
// chiedo all'utente la sua email
// var userEmail = prompt('Scrivi il tuo indirizzo email');
// se non è autorizzato lo fermo, altrimenti procede al gioco
// for(var i = 0; i < email.length; i++) {
//   if (userEmail !== email[i]) {
//   }


// numero random da 1 a 6 per il computer
var computerNumber = Math.floor(Math.random() * 6) +1;
// numero random da 1 a 6 per l'utente
var userNumber = Math.floor(Math.random() * 6) +1;

var result = document.getElementById('text');

if (computerNumber > userNumber) {
result.innerHTML = 'Il numero del computer è ' + computerNumber + '<br>Il tuo numero è ' + userNumber + '<br>Hai perso';
} else if (computerNumber < userNumber) {
  result.innerHTML = 'Il numero del computer è ' + computerNumber + '<br>Il tuo numero è ' + userNumber + '<br>Hai vinto!';
} else {
  result.innerHTML = 'Il numero del computer è ' + computerNumber + '<br>Il tuo numero è ' + userNumber + '<br>Siete pari';
}
