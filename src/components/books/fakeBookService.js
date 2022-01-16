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
    about:
      "The predicament: the discontents of the Gilded Age’ outlines the roots of progressivism. In the mid to late–1880s, harmony was the core value in the still highly agrarian American society. However, in the 1880s, society began to shift towards urbanization, and large corporations began to grow into monopolies, causing the gap between rich and poor to grow",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Following the Equator",
    author: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mark Twain" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    about:
      "Twain was practically bankrupt in 1894 due to investing heavily into the failed Paige Compositor. In an attempt to extricate himself from debt of $100,000 (equivalent of about $2,975,000 in 2020) he undertook a tour of the British Empire in 1895 at age 60, a route chosen to provide numerous opportunities for lectures in English.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Homage to Catalonia",
    author: { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    about:
      "Homage to Catalonia is George Orwell's personal account of his experiences and observations fighting for the POUM militia of the Republican army during the Spanish Civil War. The war was one of the defining events of his political outlook and a significant part of what led him to write in 1946, Every line of serious work that I have written since 1936 has been written, directly or indirectly, against totalitarianism and for Democratic Socialism, as I understand it",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The Winter's Tale",
    author: { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    about:
      "Written toward the end of William Shakespeare’s theatrical career, The Winter’s Tale (1609-1611) is a story of loss and redemption. In a fit of wild and unfounded jealousy, Leontes, the King of Sicily, convinces himself that his pregnant wife is carrying his best friend’s love child. Leontes’s jealousy turns to tyranny as the king proceeds to destroy his entire family and a lifelong friendship. Sixteen long years pass, and we witness one of the most astonishing endings in English literature.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "The Tempest",
    author: { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    about:
      "Give Big Billy Shakespeare a standing ovation: The Tempest is his swan song. It's hard to think of Shakespeare as being 'over' when he’s considered to be the best playwright in English (daaang)—this guy's plays still transcend fashion or style or faddishness. It's as ridiculous to say that Shakespeare's plays are over as it is to say that, oh, picnics or roller coasters or stargazing is over. Some things are immortal.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Romeo and Juliet",
    author: { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    about:
      "Romeo and Juliet is a play written by the English playwright William Shakespeare. It was published for the first time in 1597. Romeo and Juliet is probably the most famous love story of all time. It is a tragic tale depicting the forbidden love shared by two young lovers coming from two feuding families. The story is, along with Hamlet, Shakespeare’s most popular and frequently performed play. Romeo and Juliet is regarded by many experts as a great example of Shakespeare’s early dramatic skill.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Burmese Days",
    author: { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    about:
      "Burmese Days is the first novel by English writer George Orwell, published in 1934. Set in British Burma during the waning days of Empire, when Burma was ruled from Delhi as part of British India, it is 'a portrait of the dark side of the British Raj.' At the centre of the novel is John Flory, 'the lone and lacking individual trapped within a bigger system that is undermining the better side of human nature.'[1] The novel describes 'both indigenous corruption and imperial bigotry' in a society where, 'after all, natives were natives—interesting, no doubt, but finally...an inferior people",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Nineteen Eighty-Four",
    author: { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    about:
      "Nineteen Eighty-four, also published as 1984, novel by English author George Orwell published in 1949 as a warning against totalitarianism. The chilling dystopia made a deep impression on readers, and his ideas entered mainstream culture in a way achieved by very few books. The book’s title and many of its concepts, such as Big Brother and the Thought Police, are instantly recognized and understood, often as bywords for modern social and political abuses.",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Mysterious Stranger",
    author: { _id: "5b21ca3eeb7f6fbccd471818", name: "Mark Twain" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    about:
      "The Mysterious Stranger is a novel attempted by the American author Mark Twain. He worked on it intermittently from 1897 through 1908. Twain wrote multiple versions of the story; each involves a supernatural character called 'Satan'or No. 44. All the versions remained unfinished (with the debatable exception of the last one, No. 44, the Mysterious Stranger).",
  },
];

localStorage.setItem("books", books);

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find((m) => m._id == id);
}

export function saveBook(book) {
  console.log("SAVING BOOK");
  console.log(book);
  let bookInDb = books.find((m) => m._id === book._id) || {};
  bookInDb.title = book.title;
  bookInDb.author = authorsAPI.authors.find((g) => g._id === book.authorId);
  bookInDb.numberInStock = book.numberInStock;
  bookInDb.dailyRentalRate = book.dailyRentalRate;

  if (!bookInDb._id) {
    bookInDb._id = Date.now().toString();
    books.push(bookInDb);
  }

  return bookInDb;
}

export function deleteBook(id) {
  let bookInDb = books.find((m) => m._id === id);
  books.splice(books.indexOf(bookInDb), 1);
  return bookInDb;
}
