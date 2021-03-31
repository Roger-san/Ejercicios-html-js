describe("Library", () => {
  let library = null;
  let book = null;
  beforeEach(() => {
    library = LibraryBuilder();
    book = {
      id: 0,
      title: "LOTR",
      readed: false,
      author: { name: "J.R", surname: "Tolkien" },
    };
  });
  it("añade un libro", () => {
    library.addBook(book);
    expect(library.books[book.id]).toEqual(book);
  });
  it("modifica el estado de lectura de un libro", () => {
    library.addBook(book);
    library.modifyReadedStatus(book.id, true);
    expect(library.books[book.id].readed).toEqual(true);
  });
  it("retorna la lista de libros leídos", () => {
    library.addBook(book);
    library.modifyReadedStatus(book.id, true);
    expect(library.readedList).toHaveSize(1);
  });
  it("retorna la lista de libros NO leídos", () => {
    library.addBook(book);
    expect(library.notReadedList).toHaveSize(1);
  });
  it("retorna un libro buscado por author", () => {
    library.addBook(book);
    expect(library.findBookByAuthor("J.R")).toEqual(book);
  });
});
