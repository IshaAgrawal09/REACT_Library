import React from "react";
import { useParams } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
import "./SinglePage.css";
import Nav from "./Nav";

const SinglePage = () => {
  let { id } = useParams();

  const { data, theme, mode } = useContext(CartContext);

  return (
    <>
      <Nav />
      <div
        className="singlePage"
        style={{ backgroundColor: theme.headerBg, color: theme.anchorColor }}
      >
        <p></p>
        <div className="singlePage-image-box">
          <img
            src={`https://covers.openlibrary.org/b/olid/${data.docs[id].cover_edition_key}-M.jpg`}
            alt=""
          />
        </div>
        <div className="content-data">
          <p className="gap italic" style={{ color: theme.detailsColor }}>
            An edition of&nbsp; {data.docs[id].title}&nbsp;&nbsp;(
            {data.docs[id].first_publish_year})
          </p>
          <h2 id="data-title">{data.docs[id].title}</h2>
          <p className="gap italic" style={{ color: theme.detailsColor }}>
            [Book Club ed.]
          </p>
          <p>
            by&nbsp;
            <span className="blue">
              {data.docs[id]?.author_name?.join(",  ") ?? "N/A"}
            </span>
          </p>
          <p id="multipleData">
            62 Ratings&nbsp;&nbsp;|&nbsp;&nbsp;161 Want to
            read&nbsp;&nbsp;|&nbsp;&nbsp; 2 Currently
            reading&nbsp;&nbsp;|&nbsp;&nbsp; 79 Have read
          </p>
          <div className="box" style={{ color: "black" }}>
            <div>
              <h5>Publish Date</h5>
              <p>{data.docs[id].first_publish_year}</p>
            </div>

            <div>
              <h5>Language</h5>
              <span className="blue">
                {data.docs[id].language?.[0] ?? "N/A"}
              </span>
            </div>
            <div>
              <h5>Pages</h5>
              <p>{data.docs[id]?.number_of_pages_median ?? "N/A"}</p>
            </div>
          </div>
          <p>
            Previews available in :{" "}
            <span className="blue">
              {data.docs[id].language?.join(", ") ?? "N/A"}
            </span>
          </p>
          <p className="contentDetailsData">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </p>
          <div className="Contentdetails" style={{ color: theme.detailsColor }}>
            <h2>Book Details</h2>
            <hr />
            <div>
              <p className="gap">Published in</p>
              <p className="detailsData">{data.docs[id].first_publish_year}</p>
            </div>
            <div>
              <p className="gap">Edition Notes</p>
              <p className="detailsData">
                Genre: &#9;{data.docs[id]?.type ?? "N/A"}
              </p>
            </div>
            <div>
              <p className="gap">The Physical Object</p>
              <p className="detailsData">
                Number of pages:&nbsp;&nbsp;
                {data.docs[id].number_of_pages_median}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
