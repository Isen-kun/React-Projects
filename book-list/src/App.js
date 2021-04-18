// import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/BookForm";
import ReducerBookContextProvider from "./contexts/ReducerBookContext";

function App() {
  return (
    <div className="App">
      {/* <BookContextProvider> */}
      <ReducerBookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </ReducerBookContextProvider>
      {/* </BookContextProvider> */}
    </div>
  );
}

export default App;
