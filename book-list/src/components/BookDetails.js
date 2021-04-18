import { useContext } from "react";
// import { BookContext } from "../contexts/BookContext";
import { ReducerBookContext } from "../contexts/ReducerBookContext";

const BookDetails = ({ book }) => {
  // const { removeBook } = useContext(BookContext);
  const { dispatch } = useContext(ReducerBookContext);
  return (
    // <li onClick={() => removeBook(book.id)}>
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
