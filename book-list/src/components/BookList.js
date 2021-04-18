import { useContext } from "react";
// import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";
import { ReducerBookContext } from "../contexts/ReducerBookContext";

const BookList = () => {
  // const { books } = useContext(BookContext);
  const { books } = useContext(ReducerBookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time</div>
  );
};

export default BookList;
