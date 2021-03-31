const LibraryBuilder = () => ({
    books: {},
    addBook(book) {
        this.books[bookid] = book;
    },
    modifyReadedStatus(bookId, newStatus) {
        this.books[bookId].readed = newStatus;
    },
    findBookByAuthor(authorName) {
        return Object.values(this.books).find(
            (book) => book.author.name === authorName
        );
    },
    get readedList() {
        return Object.values(this.books).filter((book) => book.readed);
    },
    get notReadedList() {
        return Object.values(this.books).filter((book) => !book.readed);
    },
});