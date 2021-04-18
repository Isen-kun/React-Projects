import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const ReducerBookContext = createContext();

const ReducerBookContextProvider = (props) => {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <ReducerBookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </ReducerBookContext.Provider>
  );
};

export default ReducerBookContextProvider;
