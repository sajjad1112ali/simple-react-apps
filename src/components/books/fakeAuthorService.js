export const authors = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Mark Twain" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "William Shakespeare" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "George Orwell" },
];

export function getAllAuthors() {
  return authors;
}

export function getAuthors() {
  return authors.filter((g) => g);
}
