import React from "react";

import Nav from "./Nav";
import Header from "./Header";
import "./Home.css";
import CartContext from "./Context";
import { useContext } from "react";
import Books from "./Books";
const Home = () => {
  const { query, data, isSubmit, setIsSubmit, theme } = useContext(CartContext);

  console.log(data.docs);

  return (
    <div className="home">
      <Nav />
      {!isSubmit ? (
        <>
          {setIsSubmit(false)}
          <Header />
        </>
      ) : query === "" ? (
        <>
          {setIsSubmit(false)}
          <Header />
        </>
      ) : (
        <div
          className="booksPage"
          style={{ backgroundColor: theme.headerBg, color: theme.color }}
        >
          <Books />
        </div>
      )}
    </div>
  );
};

export default Home;
