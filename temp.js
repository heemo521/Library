// //Array to store book data object
// Book Array

// //Book constructor

// When user submits form
// 1. VALIDATE INPUT
// 2. Take input value AND call book constructor to create an object and give
// 3. Push the book object into the books array
// 4. When new book is pushed into the array, call display book function
// 5. Display function takes the array and loops through go display on the page
// - create an element to show book and give each data-attribute as an id

// Button
// 1. Slider: each book allows to change from read to unread and back to read.
// 2. X clicking on X on the corner of the book object will ask the user to make sure that they want to delete the file
// 3. Double click: allows user to change details of the book
// 4. Open form to add a book to the library
// 5. Filter method to filter read and unread books to display
// 6. Sort method to show the list in alphabetized order by title, by author

// GOOGLE
// 1. How to save info on local storage
// 2. Login Validation
// 3. How to drag an element to reorder

// Icons
// -Heroicon
// -add icons to the form page
// -ADD ICONS TO THE CARD LABELS
// - add label color for heading for each book
// -stroke & fill
// - margin-bottom
// -option key and select

// Shadows (flat design 2.0)

//comments max 120 characters

//resize title if longer than 12 characters

//Date not working

//Form Validation
//enable summary when read

//format date;

// delete button
// remove book from the array

// edit button
// another modal for edit button
// should be able to remove book, edit/read comment, change read status

//sidebar render information
//number of books
//number of completed books
//total number of pages
//total completed pages

//filtering button to view read/not-read/all

//save information via local storage

//login

// let myLibrary = [
//     {
//         author: 'Jay Wengrow',
//         title: 'Data Structure and Algorithms',
//         status: true,
//         date: new Date(),
//         pages: 473,
//         comments: '',
//         //use date to create unique id?
//     },
//     {
//         author: 'Jay Wengrow',
//         title: 'Data Structure and Algorithms',
//         status: true,
//         date: new Date(),
//         pages: 473,
//         comments: '',
//     },
//     {
//         author: 'Jay Wengrow',
//         title: 'Data Structure and Algorithms',
//         status: true,
//         date: new Date(),
//         pages: 473,
//         comments: '',
//     },
//     {
//         author: 'Jay Wengrow',
//         title: 'Data Structure and Algorithms',
//         status: true,
//         date: new Date(),
//         pages: 473,
//         comments: '',
//     },
// ];

// const Book = function (title, author, pages, status, date, comments) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
//     this.data = date;
//     this.comments = comments;
// };

// Book.prototype.info = function () {
//     return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'already read' : 'not read yet'}`;
// };

// // Buttons
// const closeBtn = document.querySelectorAll('.btn-close');
// const openBtn = document.querySelector('.btn-add');
// const addBook = document.querySelector('.add-book');
// // const removeBooksBtn = document.querySelectorAll('.btn-delete');

// // Select Target
// const overlay = document.querySelector('.overlay');
// const modal = document.querySelector('.modal');
// const booksCtn = document.querySelector('.books');

// //Open & Close Form
// const openForm = () => {
//     overlay.classList.remove('hidden');
//     modal.classList.remove('hidden');
// };
// const closeForm = () => {
//     overlay.classList.add('hidden');
//     modal.classList.add('hidden');
// };

// for (let i = 0; i < closeBtn.length; i++) {
//     //rewrite using forEach method
//     closeBtn[i].addEventListener('click', closeForm);
//     overlay.addEventListener('click', closeForm);

//     openBtn.addEventListener('click', openForm);

//     document.addEventListener('keydown', (event) => {
//         if (event.key === 'Escape' && !modal.classList.contains('.hidden')) {
//             closeForm();
//         }
//     });
// }

// function displayBook(books) {
//     booksCtn.innerHTML = '';
//     //input of an object containing book data;
//     books.forEach((book, i) => {
//         const author = book.author;
//         const title = book.title;
//         const status = book.status;
//         const date = book.date;
//         const pages = book.pages;
//         const dataID = i;

//         const bookHtml = `
//         <div class="book" data-id="${dataID}">
//             <h3 class="title">${title}</h3>
//             <div class="book-info">
//                 <div class="author">By: ${author}</div>
//                 <div class="status">Status: ${status === 'true' ? 'Read' : 'Not Read'}</div>
//                 <div class="pages">Pages: ${pages}</div>
//                 <div class="date-added">Date-Added: ${date}</div>
//             </div>
//             <div class="btn-books">
//                 <button type="button" class="btn btn-edit">Edit</button>
//                 <button type="button" class="btn btn-delete">Delete</button>
//             </div>
//         </div>`;

//         booksCtn.insertAdjacentHTML('beforeend', bookHtml);
//     });
// }
// displayBook(myLibrary);

// function statusRadio() {
//     const selectedStatus = document.getElementsByName('status');
//     return [...selectedStatus].filter((ele) => ele.checked)[0].value;
// }

// function addBookToLibrary(e) {
//     e.preventDefault();
//     const inputTitle = document.querySelector('#title').value;
//     const inputAuthor = document.querySelector('#author').value;
//     const inputPages = document.querySelector('#pages').value;
//     const inputComments = document.querySelector('#comments').value;
//     const inputStatus = statusRadio();
//     const createDate = new Date()

//     const newBook = new Book(inputTitle, inputAuthor, inputPages, inputStatus, createDate, inputComments);

//     myLibrary.push(newBook);
//     closeForm();
//     displayBook(myLibrary);
// }

// addBook.addEventListener('click', addBookToLibrary);

// function removeBookFromLibrary() {
//     //Each book has a button to remove the book from the library
//     // Add a button on each book’s display to remove the book from the library.
//     //drag to a trashcan and erase? or save the trashcan info on another array?
//     // use filter method to create new array and assign it to the library;
//     console.log('Hello');
// }

// // for (let i = 0; i < removeBooksBtn.length; i++) {
// //     removeBooksBtn[i].addEventListener('click', removeBookFromLibrary);
// // }

// function changeReadStatus() {}
// //Another button to change read status
// //Double click on the book card to change its read status.

// //changing read status will change color the card;

// // To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.

// // You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

// // a <p> with red text that says “Hey I’m red!”
// // an <h3> with blue text that says “I’m a blue h3!”
// // a <div> with a black border and pink background color with the following elements inside of it:
// // another <h1> that says “I’m in a div”
// // a <p> that says “ME TOO!”
// // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// var d = document.getElementById('foo0');
// d.parentNode.appendChild(d);
