const submit = document.querySelector('#submit');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const statusInput = document.querySelector('#status-box');

submit.addEventListener('click', () => {
    if (titleInput.value == "" || authorInput.value == "" || pagesInput.value == "") {
        alert("Please fill out all entries.")
    } else {
        addBookToLibrary(titleInput.value, authorInput.value, parseInt(pagesInput.value), statusInput.checked);
        displayBooks();
        clearInputs();
    }

})

function clearInputs() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    statusInput.checked = false;
}



let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        // create or add div to body of html
        // assigns book display class
        //
    }
}


// sample book below for css help
addBookToLibrary("title", "author", 394, true);
addBookToLibrary("the hobbit", "jrr tolkien", 429, false);
addBookToLibrary("The Witch & the Wardrobe", "Stephen King", 222, true);