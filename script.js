const submit = document.querySelector('#submit');
const titleInput = document.querySelector('#title-input');
const authorInput = document.querySelector('#author-input');
const pagesInput = document.querySelector('#pages-input');
const statusInput = document.querySelector('#status-box');
const container = document.querySelector('#container');
const deleteAll = document.querySelector('#heading-delete');

deleteAll.addEventListener('click', () => {
    clearBooks();
    myLibrary = [];
});


submit.addEventListener('click', () => {
    if (titleInput.value == "" || authorInput.value == "" || pagesInput.value == "") {
        alert("Please fill out all entries.")
    } else {
        addBookToLibrary(titleInput.value, authorInput.value, parseInt(pagesInput.value), statusInput.checked);
        clearBooks();
        displayBooks();
        clearInputs();
    }

});

titleInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click();        
    }
});

authorInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click();        
    }
});

pagesInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click();        
    }
});



statusInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        submit.click();        
    }
});

function clearInputs() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    statusInput.checked = false;
}



let myLibrary = [];

// USING PLAIN OBJECT CONSTRUCTOR
// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read
// }

// USING class OBJECT CONSTRUCTOR
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}


function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        let bookLine = document.createElement('div');
        bookLine.classList.add('list-class');

        let bookTitle = document.createElement('div');
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add('h-title-class');

        let bookAuthor = document.createElement('div');
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add('h-author-class');

        let bookPages = document.createElement('div');
        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add('h-pages-class');

        let bookStatus = document.createElement('div');
        myLibrary[i].read === true ? bookStatus.textContent = 'Read' : bookStatus.textContent = "Unread";
        bookStatus.classList.add('h-status-class');
        bookStatus.addEventListener('click', () => {
            if (bookStatus.textContent === 'Read') {
                bookStatus.textContent = 'Unread';
                myLibrary[i].read = false;
            } else if (bookStatus.textContent === 'Unread') {
                bookStatus.textContent = 'Read';
                myLibrary[i].read = true;
            }
        })

        let bookDelete = document.createElement('i');
        bookDelete.classList.add('fa', 'fa-trash', 'h-delete-class');
        bookDelete.addEventListener('click', () => {
            bookLine.remove();
            myLibrary.splice(i, 1);

        })


        bookLine.appendChild(bookTitle);
        bookLine.appendChild(bookAuthor);
        bookLine.appendChild(bookPages);
        bookLine.appendChild(bookStatus);
        bookLine.appendChild(bookDelete);
        container.appendChild(bookLine);
    }
}

function clearBooks() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}


