// lista delle email autorizzate
var email = ['sabfon@hotmail.it', 'email@gmail.com', 'email@outlook.it'];

// chiedo all'utente la sua email
var userEmail = prompt('Scrivi il tuo indirizzo email');

// numero random da 1 a 6 per il computer
var computerNumber = Math.floor(Math.random() * 6) +1;

// numero random da 1 a 6 per l'utente
var userNumber = Math.floor(Math.random() * 6) +1;

var result = document.getElementById('output');

// // VALIDAZIONE EMAIL AVVENUTA?
var emailValidation = false;

for(var i = 0; i <= email.length; i++) {
  if (userEmail === email[i]) {
    emailValidation = true;
  }
}

// SE E' AUTORIZZATO PROCEDE AL GIOCO, ALTRIMENTI LO FERMO
if (emailValidation) {
  alert('Giochiamo!');
  if (computerNumber > userNumber) {
  result.innerHTML = 'Il numero del computer è ' + computerNumber + '<br>Il tuo numero è ' + userNumber + '<br>HAI PERSO';
  } else if (computerNumber < userNumber) {
    result.innerHTML = 'Il numero del computer è ' + computerNumber + '<br>Il tuo numero è ' + userNumber + '<br>HAI VINTO!';
  } else {
    result.innerHTML = 'Il numero del computer è ' + computerNumber + '<br>Il tuo numero è ' + userNumber + '<br>SIETE PARI';
  }
} else {
  alert ('Indirizzo email errato. Riprova');
}
