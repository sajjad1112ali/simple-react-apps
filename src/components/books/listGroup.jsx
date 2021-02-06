import React from "react";

const ListGroup = (props) => {
  const {
    authors,
    textProperty,
    valueProperty,
    onAuthorSelect,
    selectedAuthor,
  } = props;
  return (
    <ul className="list-group">
      {authors.map((author) => (
        <li
          key={author[valueProperty]}
          onClick={() => {
            onAuthorSelect(author);
          }}
          className={
            author === selectedAuthor
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {author[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
