/*
Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.
*/

// Creo array
const usersEmail = ['gino@gmail.com', 'mirko@icloud.com', 'mik@gmail.com', 'j@gmail.com' ]

// Chiedo email al utente

const userEmail = prompt('Inserisci la tua email', 'j@gmail.com')

// Verifico se l'email del utente è nel array

const emailCheck = userEmail.includes('j@gmail.com')
console.log(emailCheck)

// Stampo messagio sul esito del controllo
let text;

if (emailCheck === true){
    text = `Buongiorno ${userEmail}, hai l'autorizzazione per entrare`
} else {
    text = `Spiacenti l'email: ${userEmail} non è autorizzata`
}

console.log(text)