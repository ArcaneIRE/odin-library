let library = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, isRead) {
    const newBook = new Book(title, author, isRead);
    library.push(newBook);
}

function renderLibrary () {
    let bookList = document.querySelector('#book-list');
    bookList.innerHTML = '';
    library.forEach((book, index) => {
        bookList.innerHTML +=
            `<div class="book" data-index="${index}">
                <h3 class="title">${book.title}</h3>
                <p class="author">By: ${book.author}</p>
                <label>
                    <input type="checkbox" ${book.isRead ? ' checked' : ''}>
                    Read
                </label>
            </div>`;
    });
}

// Modal
const addBook = document.querySelector('#add-book');
const modal = document.querySelector('#add-book-modal');
const modalClose = document.querySelector('#modal-close');
const modalContent = document.querySelector('#modal-content')

addBook.addEventListener('click', () => modal.classList.add('visible'));

modal.addEventListener('click', () => modal.classList.remove('visible'));
modalClose.addEventListener('click', () => modal.classList.remove('visible'));

modalContent.addEventListener('click', (e) => e.stopPropagation());

const modalAdd = document.querySelector('#modal-add');
modalAdd.addEventListener('click', () => {
    let title = document.querySelector('#modal-form-title').value;
    let author = document.querySelector('#modal-form-author').value;
    let isRead = document.querySelector('#modal-form-read').checked;
    addBookToLibrary(title, author, isRead);
    renderLibrary();
    modal.classList.remove('visible');
    document.querySelector('#modal-form').reset();
});

// Clear Button
const clear = document.querySelector('#clear-books');
clear.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear?')) {
        library = []
        renderLibrary();
    }
})

// Default Book
addBookToLibrary('Working Backwards', 'Bill Carr, Colin Bryar', true);
addBookToLibrary('Atomic Habits', 'James Clear', false);
addBookToLibrary('Mistborn: The Final Empire', 'Brandon Sanderson', true);
addBookToLibrary('Mistborn: The Well of Ascension', 'Brandon Sanderson', true);
renderLibrary();
