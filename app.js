
import { question } from 'readline-sync';
import Library from './model/library.js'
import Book, { PhysicalBook, EBook } from './model/book.js'
import User from './model/user.js';
const library = new Library('Berio')

console.log('benvenuti in super library')

const user1 = new User('1', 'Mario');
const user2 = new User('2', 'Luigi');
const user3 = new User('3', 'Toad');
library.addUser(user1);
library.addUser(user2);
library.addUser(user3);

const book1 = new PhysicalBook('111', 'Il signore degli anelli', 'Tolkien', 'A1');
const book2 = new PhysicalBook('222', 'Lo Hobbit', 'Tolkien', 'A2');
const book3 = new PhysicalBook('333', 'Il Silmarillion', 'Tolkien', 'A3');

const book4 = new EBook('444', 'Il signore degli anelli-La compagnia dell\'anello', 'Tolkien', 'pdf');
const book5 = new EBook('555', 'Il signore degli anelli-Le due torri', 'Tolkien', 'pdf');
const book6 = new EBook('666', 'Il signore degli anelli-Il ritorno del re', 'Tolkien', 'pdf');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);


while (true) {

    const introString = "ecco le funzionalita':\n" +
        "1. aggiungi utente\n" +
        "2. rimuovi utente\n" +
        "3. aggiungi libro\n" +
        "4. rimuovi libro\n" +
        "5. lista utenti\n" +
        "6. lista libri\n" +
        "7. prendi in prestito un libro\n" +
        "8. esci\n" +
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
            borrowBook();
            break;

        case "8":
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

    const user = new User(id, name); //crea un nuovo utente
    library.addUser(user);
    console.log(`l'utente ${name} è stato inserito con successo`)
}

function removeUser() {
    const id = question("qual e' il tuo numero di tessera?")
    library.removeUserById(id)
    console.log(`l'utente è stato rimosso con successo`)
}

function addBook() {
    const isbn = question("qual e' il codice isbn del libro?")
    const title = question("qual e' il titolo del libro?")
    const author = question("qual e' l'autore del libro?")

    const typeOfBook = question("che tipo di libro e'? (fisico/elettronico)")
    let book;
    if (typeOfBook === 'fisico') {
        const shelfLocation = question("in quale scaffale si trova?")
        book = new PhysicalBook(isbn, title, author, shelfLocation); //crea un nuovo libro fisico
    } else if (typeOfBook === 'elettronico') {
        const fileFormat = question("in quale formato e'?")
        book = new EBook(isbn, title, author, fileFormat); //crea un nuovo libro elettronico
    } else {
        console.log('tipo di libro non valido')
        return;
    }

    library.addBook(book)
    console.log(`il libro ${title} è stato inserito con successo`)
}

function removeBook() {
    const isbn = question("qual e' il codice isbn del libro?")
    library.removeBookByIsbn(isbn)
    console.log(`il libro ${book.title} è stato rimosso con successo`)
}

function listUser() {
    library.listUsers()
}

function listBook() {
    library.listBooks()
}

function borrowBook() {
    const userId = question("qual e' il tuo numero di tessera?")
    const isbn = question("qual e' il codice isbn del libro?")
    const user = library.getUserById(userId)
    const book = library.getBookByIsbn(isbn)

    if (!user) {
        console.log('utente non trovato')
        return;
    }

    if (!book) {
        console.log('libro non trovato')
        return;
    }

    library.borrowBook(user, book)
    console.log(`il libro ${book.title} è stato preso in prestito con successo`)
}

