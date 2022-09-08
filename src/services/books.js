const booksJSON = require('../../tests/livros.json');

const { books } = booksJSON;

const findBooks = (keyword = '') => {
  const searchBooks = [];
  keyword.toLowerCase();

  books.forEach((book) => {
    if (book.title.toLowerCase().includes(keyword)) {
      const bookFormat = {
        name: book.title,
        description: book.subtitle,
        price: book.price,
        image: book.image,
      };
      searchBooks.push(bookFormat);
    }
  });

  return searchBooks;
};

exports.jsonReturn = (keyword = '') => {
  const booksSearched = findBooks(keyword);
  const total = booksSearched.length;
  const json = {};

  json.total = total;
  json.books = booksSearched;

  if (json.total === 0) return false;
  return json;
};
