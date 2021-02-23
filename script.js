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