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

// Prendo dalla pagina l'elemto
const displayElement = document.getElementById('element');

// Genero numeri casuali
const userNumber = Math.floor(Math.random() * 7);
const botNumber = Math.floor(Math.random() * 7);

console.log(userNumber, botNumber);

// Dichiaro varibile e le assegno valore di default

let response = 'Pareggio;'

// Confronto numeri estratti e verico chi vince
if (userNumber > botNumber){
    response = 'Evviva! Hai battuto il computer';
} else (userNumber < botNumber){
    response = 'Dannazione! Il computer ti ha battuto'
}