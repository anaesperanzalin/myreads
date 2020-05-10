import React from "react";
import * as booksAPI from "./booksAPI";

const BookList = ({ smallThumbnail }) => {
  return (
    <>
      <p>Books.js</p>
      <img src={smallThumbnail} />
    </>
  );
};

export default BookList;
