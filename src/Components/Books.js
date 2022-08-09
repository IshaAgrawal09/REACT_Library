import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Books = () => {
  const { data, theme } = useContext(CartContext);

  const borrow = () => {
    alert("Book has been added to your cart!");
  };

  return Object.keys(data).length
    ? data.docs.map((item, index) => {
        return (
          <>
            <div className="book-box">
              <div className="image-box">
                <Link to={`/page/${index}`}>
                  <img
                    src={`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="content-box">
                <div className="details">
                  <Link to={`/page/${index}`}>
                    <h4 style={{ color: theme.anchorColor }}>{item.title}</h4>
                  </Link>
                  By{" "}
                  {item.author_name?.map((item) => {
                    return (
                      <>
                        <span>{item} </span>
                      </>
                    );
                  })}
                  <p id="publish">
                    First Published in {item.first_publish_year}
                  </p>
                  <p id="edition-language-para">
                    <span id="edition">{item.edition_count} editions</span> in{" "}
                    {item.language?.length}&nbsp; languages
                  </p>
                </div>
                <div className="button-box">
                  <button id="borrow" onClick={borrow}>
                    BORROW
                  </button>
                  <Link to={`/page/${index}`}>
                    <button id="read">WANT TO READ</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })
    : null;
};

export default Books;
