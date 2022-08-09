import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
const Nav = () => {
  const { query, setQuery, theme, mode, submit, setIsSubmit } =
    useContext(CartContext);

  const home = () => {
    setIsSubmit(false);
    setQuery("");
  };

  return (
    <div className="nav" style={theme}>
      <div id="logo">
        <Link to="/" onClick={home}>
          Bostorek
        </Link>
      </div>
      <div id="search">
        {/* <form onSubmit={submit}> */}
        <input
          type="text"
          id="search"
          placeholder="Search here .."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyPress={submit}
        />
        {/* </form> */}
      </div>
      <div>
        {/* dark mode  */}
        <label className="switch" title="Reading Mode">
          <input
            type="checkbox"
            id="check"
            onClick={mode}
            checked={theme.color === "white"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default Nav;
