import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const { query, setData, setQuery, val } = useContext(CartContext);

  const submit = (event) => {
    event.preventDefault();
    if (query === "") {
      fetch(
        `https://openlibrary.org/search.json?q=${val}&mode=ebooks&has_fulltext=true`
      )
        .then((response) => response.json())
        .then((actualData) => {
          // console.log(actualData.docs[0].lending_edition_s);
          setData(actualData);
        });
    } else {
      fetch(
        `https://openlibrary.org/search.json?q=${query}&mode=ebooks&has_fulltext=true`
      )
        .then((response) => response.json())
        .then((actualData) => {
          // console.log(actualData.docs[0].lending_edition_s);
          setData(actualData);
        });
    }
  };
  return (
    <div className="nav">
      <div id="logo">
        <Link to="/">Bostorek</Link>
      </div>
      <div id="search">
        <form onSubmit={submit}>
          <input
            type="text"
            id="search"
            placeholder="Search here .."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
      </div>
      <div>
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Nav;
