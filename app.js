
import { question } from 'readline-sync';
import Library from './model/library.js'

const library = new Library('Berio')

console.log('benvenuti in super library')

while (true) {

    const introString = "ecco le funzionalita':\n" +
        "1. aggiungi utente\n" +
        "2. rimuovi utente\n" +
        "3. aggiungi libro\n" +
        "4. rimuovi libro\n" +
        "5. lista utenti\n" +
        "6. lista libri\n" +
        "7. esci\n" +
        "inserisci il numero della funzionalita' desiderata\n";


    const answer = question(introString)

    switch (answer) {
        case "1":
            addUser()
            break;

        case "2":
            removeUser()
            break;

        case "3":
            addBook()
            break;

        case "4":
            removeBook()
            break;

        case "5":
            listUser()
            break;

        case "6":
            listBook()
            break;

        case "7":
            process.exit(0)
            break;

        default:
            console.log('scelta non valida')
            break;
    }

    console.log('ecco la risposta' + answer)
}

function addUser() {
    const id = question("qual e' il tuo numero di tessera?")
    const name = question("qual e' il tuo nome?")

    const user = { id, name }
    library.addUser(user);
    console.log(`l'utente ${name} è stato inserito con successo`)
}

function addBook() {

}

function listUser() {

}

function listBook() {

}

