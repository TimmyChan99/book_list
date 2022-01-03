let booksList = [];
let bookInfo = { title: '', author: ''};


const bookTitle = document.querySelector('#title');
const authorName = document.querySelector('#author');
const addBtn = document.querySelector('#add_btn');


// Store data in array

function storeData () {

    const newBook = Object.create(bookInfo);
    newBook.title = bookTitle.value;
    newBook.author = authorName.value;

    
    booksList.push(newBook);
    
    
}

// Create A table for books (row: title  author) 

const booksCollection = document.createElement("table");
document.body.appendChild(booksCollection);

const booksCollectionRow = document.createElement("tr");
const booksTitles = document.createElement("th");
const booksAuthors = document.createElement("th");
booksTitles.innerText = 'Title';
booksAuthors.innerText = 'Author';

    
booksCollection.appendChild(booksCollectionRow);
booksCollectionRow.appendChild(booksTitles);
booksCollectionRow.appendChild(booksAuthors);