import * as authorsAPI from "./fakeAuthorService";

const books = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "The Gilded Age",
    author: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mark Twain" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Following the Equator",
    author: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mark Twain" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Homage to Catalonia",
    author: { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The Winter's Tale",
    author: { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "The Tempest",
    author: { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Romeo and Juliet",
    author: { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Burmese Days",
    author: { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Nineteen Eighty-Four",
    author: { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Mysterious Stranger",
    author: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mark Twain" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
  },
];

localStorage.setItem("books", books);

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((m) => m._id === id);
}

export function saveBook(book) {
  let bookInDb = books.find((m) => m._id === book._id) || {};
  bookInDb.name = book.name;
  bookInDb.genre = authorsAPI.authors.find((g) => g._id === book.genreId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDb._id) {
    bookInDb._id = Date.now();
    books.push(bookInDb);
  }

  return bookInDb;
}

export function deleteBook(id) {
  let bookInDb = books.find((m) => m._id === id);
  books.splice(books.indexOf(bookInDb), 1);
  return bookInDb;
}
