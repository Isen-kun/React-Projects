import { useContext } from "react";
// import { BookContext } from "../contexts/BookContext";
import { ReducerBookContext } from "../contexts/ReducerBookContext";

const Navbar = () => {
  // const { books } = useContext(BookContext);
  const { books } = useContext(ReducerBookContext);

  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
