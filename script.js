'use strict';

// SELECTORS
const formModal = document.querySelector('#form');

const overlay = document.querySelector('#overlay');

const btnsOpenForm = document.querySelectorAll('.btn-add');

// const btnCloseForm
// const btnDelete

// const toggleStatus = document.querySelector('#status');

// toggleStatus.addEventListener('click', function () {
//need to access its parent and retrieve data-id and change data on the actual object
//     console.log(this.checked);
// });

// FORM VALUE SELECTORS

// BOOK ARRAY
let LIBRARY = [];

// BOOK CONSTRUCTOR
class Book {
    constructor(id, title, author, pages, date, status) {
        this._id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.date = date;
        this.status = status;
        this.comments = comments;
    }
}

//------------------------------ FUNCTIONS -------------------------------//
// FUNCTION: DISPLAY BOOKS FROM THE ARRAY
//  LOOP THROUGH THE ARRAY OF BOOK OBJECT AND DISPLAY EACH ONE ON A CARD

// FUNCTION: FORM INPUT VALIDATION

// FUNCTION: CREATE A BOOK OBJECT FROM CONSTRUCTOR
//USER CLICKS SUBMIT
//VALIDATE
//IF VALIDATED CREATE AN OBJECT AND ADD TO ARRAY
//ADD DATE-ID ATTRIBUTE
//CALL DISPLAY FUNCTION

// FUNCTION: GENERATE DATA-ID FOR THE BOOK

//------------------------------ BUTTONS -------------------------------//

// ADD-BOOK-BTN: OPEN UP THE FORM TO ADD TO THE LIBRARY
const openForm = function () {
    formModal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
};
// BOOK-READ-STATUS-BTN

// DELETE-BTN TO DELETE THE BOOK FROM THE ARRAY
// ASK THE USER ONE MORE TIME TO MAKE SURE THAT THEY WANT TO DELETE THIS

// BOOK-TITLE-BTN TO OPEN UP THE FORM AGAIN TO BE ABLE TO EDIT THE CARD
//FORM SHOULD ALREADY BE FILLED OUT WITH SAVED DATA

//====EXTRA====//
// ADD FILTERING FUNCTIONALITY THAT DISPLAYS BOOK BASED ON READ AND UNREAD STATUS
//OPTIONS
//ALL
//READ
//UN-READ
// ADD SORTING FUNCTIONALITY THAT DISPLAYS BOOK CARDS IN THE ALPHABETIZED ORDER (BY TITLE OR AUTHOR)

//------------------------------ EVENT HANDLER FUNCTIONS -------------------------------//
// FUNCTION: ADD-BOOK-BTN: OPEN UP THE FORM TO ADD TO THE LIBRARY
btnsOpenForm.forEach((btnOpen) => {
    btnOpen.addEventListener('click', openForm);
});

// FUNCTION: BOOK-READ-STATUS-BTN
//TOGGLES THE BOOK OBJECTS STATUS DATA

// FUNCTION: DELETE-BTN TO DELETE THE BOOK FROM THE ARRAY
// ASK THE USER ONE MORE TIME TO MAKE SURE THAT THEY WANT TO DELETE THIS
// IF TRUE, REMOVE THE BOOK FROM THE ARRAY
// DISPLAY UPDATED ARRAY TO THE SCREEN

// FUNCTION: BOOK-TITLE-BTN TO OPEN UP THE FORM AGAIN TO BE ABLE TO EDIT THE CARD
//FORM SHOULD ALREADY BE FILLED OUT WITH SAVED DATA
//USE THE SAME FOR AS ADD-BOOK BUTTON
