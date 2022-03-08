let myLibrary = [];

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `The ${this.title} by ${this.author}, ${numPages} pages, ${this.read ? 'already read' : 'not read yet'}`;
    };
}

function displayBook() {
    //display books in a table or individual cards
    // Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
}

function addBookToLibrary() {}
//NEW BOOK BUTTON
//Clicking will bring up a form
//Users can input the details for the new book
//Author, Title, NumPages, Read or Not Read
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.

function removeBookFromLibrary() {}
//Each book has a button to remove the book from the library
// Add a button on each book’s display to remove the book from the library.

function changeReadStatus() {}
//Another button to change read status
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
