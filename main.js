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


//  Display Data

const form = document.querySelector('#add_books');

form.addEventListener('submit', (e) => {

    e.preventDefault()

    // Add Book Info 

    const addedBook = document.createElement("tr");
    const addtitle = document.createElement("td");
    const addauthor = document.createElement("td");

    addtitle.innerText = bookTitle.value;
    addauthor.innerText = authorName.value;

    booksCollection.appendChild(addedBook);
    addedBook.appendChild(addtitle);
    addedBook.appendChild(addauthor);

}

);

// Store data in locale storage


form.addEventListener('change', () => {

    const newBook = Object.create(bookInfo);
    newBook.title = bookTitle.value;
    newBook.author = authorName.value;


    localStorage.setItem('book', JSON.stringify(newBook));
});
