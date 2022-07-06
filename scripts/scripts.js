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
                <p class="author">${book.author}</p>
                <label>
                    <input type="checkbox" ${book.isRead ? ' checked' : ''}>
                    Read
                </label>
            </div>`;
    });
}