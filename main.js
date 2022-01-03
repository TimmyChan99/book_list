const bookTitle = document.querySelector('#title');
const authorName = document.querySelector('#author');
const addBtn = document.querySelector('#add_btn');
const books = document.querySelector('.books');

const savedData = localStorage.getItem('savedInput');

let booksList = [];

if(savedData && savedData !== null) {
    booksList = JSON.parse(savedData);
}

const displayData = () => {
    books.innerHTML = '';
    booksList.forEach((value, index) => {
        books.innerHTML += `
        <div class="books">
        <ul>
            <li class="title">${value.name}</li>
            <li class="author">${value.author}</li>
        </ul>
         <button id="remove" onclick="removeBook(${index});">remove</button>
         <hr>
       </div>`;
    });
};

displayData();

const saveData = () => localStorage.setItem('savedInput', JSON.stringify(booksList));

const removeBook = (index) => {
    if(index !== null && index !== undefined) {
        booksList.splice(index, 1);
        saveData();
        displayData();
    }
};

removeBook();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        name: bookTitle.value,
        author: authorName.value,
    };

    booksList.push(newData);
    saveData();
    displayData();
});
