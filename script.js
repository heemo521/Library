'use strict';

//NEED TO RESET INPUT RADIO BUTTON TO NO

// BOOK ARRAY
let library = [];

// BOOK CONSTRUCTOR
class Book {
    constructor(id, title, firstName, lastName, pages, genre, date, status, comments) {
        this.id = id;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.authorFullName = `${firstName} ${lastName}`;
        this.pages = pages;
        this.genre = genre;
        this.date = date;
        this.status = status;
        this.comments = comments;
    }
}

const doYouPray = new Book(
    '0',
    'Do You Pray?',
    'J.C.',
    'Ryle',
    67,
    'Christian',
    '03/12/2022',
    'yes',
    `orem ipsum dolor sit, amet consectetur adipisicing elit. Eos delectus sed consequatur impedit. Ad
consectetur delenitid`
);
const doYouPray1 = new Book(
    '1',
    'Do You Pray?',
    'J.C.',
    'Ryle',
    67,
    'Christian',
    '03/12/2022',
    'no',
    `orem ipsum dolor sit, amet consectetur adipisicing elit. Eos delectus sed consequatur impedit. Ad
consectetur delenitid`
);
const doYouPray2 = new Book(
    '2',
    'Do You Pray?',
    'J.C.',
    'Ryle',
    67,
    'Christian',
    '03/12/2022',
    'yes',
    `orem ipsum dolor sit, amet consectetur adipisicing elit. Eos delectus sed consequatur impedit. Ad
consectetur delenitid`
);
const doYouPray3 = new Book(
    '3',
    'Do You Pray?',
    'J.C.',
    'Ryle',
    67,
    'Christian',
    '03/12/2022',
    'yes',
    `orem ipsum dolor sit, amet consectetur adipisicing elit. Eos delectus sed consequatur impedit. Ad
consectetur delenitid`
);

// SELECTORS
const formModal = document.querySelector('#form');
const overlay = document.querySelector('#overlay');
const btnsOpenForm = document.querySelectorAll('.btn-add');
const btnsCloseForm = [document.querySelector('.btn-close'), document.querySelector('.btn-exit'), overlay];
const btnDelete = document.querySelector('.btn-delete');
const booksCtn = document.querySelector('.books-container');
const btnSubmitForm = document.querySelector('.add-book');
const btnToggleStatus = document.querySelector('#status');

//------------------------------ FUNCTIONS -------------------------------//

// FUNCTION: DISPLAY BOOKS FROM THE ARRAY
const emptyDisplay = function () {
    booksCtn.innerHTML = '';
};

const displayBook = function (books) {
    emptyDisplay();

    books.forEach((book) => {
        const { id, title, firstName, lastName, pages, genre, date, status, comments } = book;

        const bookHtml = `
                <div class="book" data-id="${id}">
                <div class="book-top">
                    <h3 class="title"><a href="#" class="btn btn-edit btn-add">${title}</a></h3>
                </div>

                <div class="book-info">
                    <div class="book-info-top">
                        <div class="info">
                            <div class="author">
                                <label class="label author-label">Author:</label>
                                <span class="text author-text">${firstName.toUpperCase()} ${lastName[0].toUpperCase()}.</span>
                            </div>
                            <div class="pages">
                                <label class="label pages-label">Pages: </label>
                                <span class="text pages-text">${pages}</span>
                            </div>
                            <div class="date-added">
                                <label class="label date-label">Date:</label>
                                <span class="text date-text">${date}</span>
                            </div>
                        </div>
                        <div class="read">
                            <!-- <span class="status">Status</span> -->
                            <label class="switch">
                                <!-- read -->
                                <input type="checkbox" id="status" ${status === 'yes' ? 'checked' : ''}/>
                                <span class="slider round"></span>
                            </label>
                        </div>
                    </div>

                    <div class="book-info-bottom">
                        <label class="label comments-label" for="comments">Summary:</label>
                        <span class="text comments-text">${comments}</span>
                    </div>
                </div>

                <div class="book-bottom">
                    <a href="#" class="btn btn-delete"><i class="fas fa-times-circle"></i></a>
                </div>
            </div>`;

        booksCtn.insertAdjacentHTML('beforeend', bookHtml);
    });
};

//------------------------------EVENT HANDLER /CALLBACK FUNCTIONS -------------------------------//
//FUNCTION: OPEN THE FORM
const openForm = function () {
    formModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//FUNCTION: CLOSE THE FORM
const closeForm = function () {
    formModal.classList.add('hidden');
    overlay.classList.add('hidden');
    clearForm();
};

const closeForm2 = function (event) {
    if (event.key === 'Escape' && !formModal.classList.contains('hidden')) {
        closeForm();
    }
};

//IF VALIDATED CREATE AN OBJECT AND ADD TO ARRAY

//FORM VALUE SELECTOR
const title = document.querySelector('#book_title');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const date = document.querySelector('#date');
const pages = document.querySelector('#pages');
const comments = document.querySelector('#comments');
const genre = document.querySelector('#genre');

// FUNCTION: GET FORM VALUE
const getFormValues = function () {
    const inputTitle = title.value;

    const inputFirstName = firstName.value;

    const inputLastName = lastName.value;

    const inputDate = date.value;

    const inputPages = pages.value;

    const inputComments = comments.value;

    const inputGenre = genre.value;

    const inputRead = statusRadio();
    console.log(inputRead);

    // constructor(id, title, firstName, lastName, pages, genre, date, status, comments)
    return [inputTitle, inputFirstName, inputLastName, inputPages, inputGenre, inputDate, inputRead, inputComments];
};

// FUNCTION: HELPER => GET READ STATUS VALUE
const statusRadio = function () {
    const selectedStatus = document.getElementsByName('read');
    return [...selectedStatus].filter((ele) => ele.checked)[0].value;
};

// FUNCTION: GENERATE DATA-ID FOR THE BOOK
const generateID = function () {
    const randomID = Math.floor(Math.random() * 1000 + 1) + 1;
    if (library.every((book) => +book.id !== randomID)) {
        return randomID;
    } else {
        generateID();
    }
};

// FUNCTION: FORM INPUT VALIDATION
const validateForm = function () {};

// FUNCTION: CREATE A BOOK OBJECT FROM CONSTRUCTOR
const createBook = function (formValues) {
    const newBook = new Book(generateID(), ...formValues);
    return newBook;
};
// FUNCTION: ADD BOOK TO THE LIBRARY
const addBookToLibrary = function (book) {
    library.push(book);
};

const clearForm = function () {
    title.value = '';
    firstName.value = '';
    lastName.value = '';
    date.value = '';
    pages.value = '';
    comments.value = '';
    genre.value = '';
    //NEED TO RESET INPUT RADIO BUTTON TO NO
};
const submitForm = function (event) {
    event.preventDefault();
    // if (validateForm(event) === false) {
    //     console.log('INVALID FORM ENTRY');
    //     return;
    // }

    const formValues = getFormValues();

    const book = createBook(formValues);

    addBookToLibrary(book);

    displayBook(library);

    closeForm();

    clearForm();
};

const submitForm2 = function (event) {
    if (event.key === 'Enter' && !formModal.classList.contains('hidden')) {
        submitForm(event);
    }
};

// BOOK-READ-STATUS-BTN
const toggleStatus = function (event) {
    // need to access its parent and retrieve data-id and change data on the actual object
    if (event.target.classList.contains('slider')) {
        const id = Number.parseFloat(event.target.closest('.book').dataset.id);
        const changeBookRead = library.findIndex((book) => +book.id === id);
        console.log(changeBookRead);
        library[changeBookRead].status = library[changeBookRead].status === 'yes' ? 'no' : 'yes';
        console.log(library[changeBookRead].status);
    }
};
// DELETE-BTN TO DELETE THE BOOK FROM THE ARRAY
// ASK THE USER ONE MORE TIME TO MAKE SURE THAT THEY WANT TO DELETE THIS
const deleteBook = function (event) {
    if (event.target.classList.contains('fa-times-circle')) {
        const id = Number.parseFloat(event.target.closest('.book').dataset.id);

        library = library.filter((book) => {
            return +book.id !== id;
        });

        displayBook(library);
    }
};

// BOOK-TITLE-BTN TO OPEN UP THE FORM AGAIN TO BE ABLE TO EDIT THE CARD
//FORM SHOULD ALREADY BE FILLED OUT WITH SAVED DATA

//====EXTRA====//
// ADD FILTERING FUNCTIONALITY THAT DISPLAYS BOOK BASED ON READ AND UNREAD STATUS
//OPTIONS
//ALL
//READ
//UN-READ
// ADD SORTING FUNCTIONALITY THAT DISPLAYS BOOK CARDS IN THE ALPHABETIZED ORDER (BY TITLE OR AUTHOR)

//------------------------------ADD EVENT LISTENER  -------------------------------//
//FUNCTION: OPEN THE FORM
btnsOpenForm.forEach((btnOpen) => {
    btnOpen.addEventListener('click', openForm);
});
document.addEventListener('keydown', closeForm2);

//FUNCTION: CLOSE THE FORM
btnsCloseForm.forEach((btnClose) => {
    // console.log(btnClose);
    btnClose.addEventListener('click', closeForm);
});

// FUNCTION: ADD-BOOK-BTN: OPEN UP THE FORM TO ADD TO THE LIBRARY
btnSubmitForm.addEventListener('click', submitForm);
document.addEventListener('keydown', submitForm2);

// FUNCTION: BOOK-READ-STATUS-BTN
//TOGGLES THE BOOK OBJECTS STATUS DATA
booksCtn.addEventListener('click', toggleStatus);

// FUNCTION: DELETE-BTN TO DELETE THE BOOK FROM THE ARRAY
// ASK THE USER ONE MORE TIME TO MAKE SURE THAT THEY WANT TO DELETE THIS
// IF TRUE, REMOVE THE BOOK FROM THE ARRAY
// DISPLAY UPDATED ARRAY TO THE SCREEN

// btnDelete.addEventListener('click', deleteBook);
booksCtn.addEventListener('click', deleteBook);

// FUNCTION: BOOK-TITLE-BTN TO OPEN UP THE FORM AGAIN TO BE ABLE TO EDIT THE CARD
//FORM SHOULD ALREADY BE FILLED OUT WITH SAVED DATA
//USE THE SAME FOR AS ADD-BOOK BUTTON

console.log(doYouPray);
library.push(doYouPray);
library.push(doYouPray1);
library.push(doYouPray2);
library.push(doYouPray3);
displayBook(library);
