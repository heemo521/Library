// need to add id to each book to be able remove them;
// delete button

// edit button
// another modal for edit button

//sidebar render information

//filtering button to view read/not-read/all

let myLibrary = [
    {
        author: 'Jay Wengrow',
        title: 'Data Structure and Algorithms',
        status: true,
        date: new Date(),
        pages: 473,
        comments: '',
        //use date to create unique id?
    },
    {
        author: 'Jay Wengrow',
        title: 'Data Structure and Algorithms',
        status: true,
        date: new Date(),
        pages: 473,
        comments: '',
        //use date to create unique id?
    },
    {
        author: 'Jay Wengrow',
        title: 'Data Structure and Algorithms',
        status: true,
        date: new Date(),
        pages: 473,
        comments: '',
        //use date to create unique id?
    },
    {
        author: 'Jay Wengrow',
        title: 'Data Structure and Algorithms',
        status: true,
        date: new Date(),
        pages: 473,
        comments: '',
        //use date to create unique id?
    },
];

const Book = function (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.data = new Date();
};

Book.prototype.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`;
};

// const bible = new Book('Bible', 'God', 2000, true);
// const twelveRules = new Book('12 Rules For Life', 'J.P.', 500, false);
// Buttons
const closeBtn = document.querySelectorAll('.btn-close');
const openBtn = document.querySelector('.btn-add');
const addBook = document.querySelector('.add-book');

// Select Target
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const booksCtn = document.querySelector('.books');

//Open & Close Form
const openForm = () => {
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
};
const closeForm = () => {
    overlay.classList.add('hidden');
    modal.classList.add('hidden');
};

for (let i = 0; i < closeBtn.length; i++) {
    //rewrite using forEach method
    closeBtn[i].addEventListener('click', closeForm);
    overlay.addEventListener('click', closeForm);

    openBtn.addEventListener('click', openForm);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('.hidden')) {
            closeForm();
        }
    });
}

// author: 'Jay Wengrow',
// title: 'Data Structure and Algorithms',
// status: true,
// date: new Date(),
// pages: 473,
// comments: 'This book is about data efficiency using Big O Notation',

function displayBook(books) {
    booksCtn.innerHTML = '';
    //input of an object containing book data;
    books.forEach((book) => {
        const author = book.author;
        const title = book.title;
        const status = book.status;
        const date = book.date;
        const pages = book.pages;

        const bookHtml = `
        <div class="book">
            <h3 class="title">${title}</h3>
            <div class="book-info">
                <div class="author">By: ${author}</div>
                <div class="status">Status: ${status === 'true' ? 'Read' : 'Not Read'}</div>
                <div class="pages">Pages: ${pages}</div>
                <div class="date-added">Date-Added: ${date}</div>
            </div>
            <div class="btn-books">
                <button type="button" class="btn btn-edit">Edit</button>
                <button type="button" class="btn btn-delete">Delete</button>
            </div>
        </div>`;

        booksCtn.insertAdjacentHTML('beforeend', bookHtml);
    });
}
displayBook(myLibrary);

function statusRadio() {
    const selectedStatus = document.getElementsByName('status');
    return [...selectedStatus].filter((ele) => ele.checked)[0].value;
}

function addBookToLibrary(e) {
    e.preventDefault();
    const inputTitle = document.querySelector('#title').value;
    const inputAuthor = document.querySelector('#author').value;
    const inputPages = document.querySelector('#pages').value;
    const inputComments = document.querySelector('#comments').value;
    const inputRadio = statusRadio();
    console.dir(inputRadio);

    const newBook = {
        author: inputAuthor,
        title: inputTitle,
        status: inputRadio,
        date: new Date(),
        pages: inputPages,
        comments: inputComments,
    };

    myLibrary.push(newBook);
    closeForm();
    displayBook(myLibrary);
}

addBook.addEventListener('click', addBookToLibrary);

//User inputs
//Validation

//If validated create an object and push into the library array;

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

// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says “I’m in a div”
// a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
