import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Header from "./Header";
import "./Home.css";
import CartContext from "./Context";
import { useContext } from "react";
const Home = () => {
  const { val, data, setData } = useContext(CartContext);

  useEffect(() => {
    fetch(
      `https://openlibrary.org/search.json?q=${val}&mode=ebooks&has_fulltext=true`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        // debugger;
      });
  }, []);
  console.log(data.docs);

  return (
    <div className="home">
      <Nav />
      <Header />

      {Object.keys(data).length
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
                        <h4>{item.title}</h4>
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
                        <span id="edition">{item.edition_count} editions</span>{" "}
                        in {item.language?.length}
                        languages
                      </p>
                    </div>
                    <div className="button-box">
                      <button id="borrow">BORROW</button>
                      <button id="read">WANT TO READ</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        : null}
    </div>
  );
};

export default Home;
