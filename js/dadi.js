/*
Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.

#  Gioco dei dadi
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato.
BONUS
Stampare i risultati in pagina oltre che in console!
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/

// Prendo elemento in pagina

const dadiElement = document.getElementById('dadi');

// Generare numeri da 1 a 6 random

const userNumber = Math.floor((Math.random()*6) + 1); 
console.log(userNumber)

const cpuNumber = Math.floor((Math.random()*6) + 1); 
console.log(cpuNumber);

// Stabilire il vincitore

let message = 'il risultanto è un pareggio';

if (userNumber > cpuNumber){
    message = `L'utente con il numero ${userNumber} ha vinto`
} else if (userNumber < cpuNumber){
    message = `Il computer con il numero ${cpuNumber} ha vinto`
} else {
    message = 'il risultanto è un pareggio';
}



console.log(message);