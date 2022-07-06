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
