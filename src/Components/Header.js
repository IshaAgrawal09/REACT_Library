import React from "react";
import CartContext from "./Context";
import { useContext } from "react";
import "./Header.css";

const Header = () => {
  const { theme } = useContext(CartContext);
  console.log(theme);
  return (
    <>
      {/* <Nav /> */}
      <div
        className="header"
        style={{ backgroundColor: theme.headerBg, color: theme.color }}
      >
        <div className="content">
          <h1>For All Your Reading Needs</h1>
          {/* <h1>Reading Needs</h1> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam
            velit saepe dolorem deserunt quo quidem ad optio.
          </p>
          <button style={{ backgroundColor: theme.backgroundColor }}>
            Read More
          </button>
        </div>
        <div className="pic">
          <img
            src="https://html.design/demo/bostorek/images/slider-img.png"
            alt=""
          />
        </div>
      </div>
      <div
        className="main"
        style={{ backgroundColor: theme.sectionBg, color: theme.color }}
      >
        <div
          className="videoSection"
          style={{ backgroundColor: theme.sectionBg, color: theme.color }}
        >
          <video
            id="video"
            // controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            <source src="video.mp4" type="video/mp4" />
          </video>
          <p>
            Finding new stories has never been easier with Bostorek. Enjoy
            access to Bostorek exclusive titles you won't find anywhere else.
            Prime members have unlimited access to hundreds of books and more.
            Try Bostorek{" "}
            <span style={{ color: theme.offers }}>
              <b>
                <i>Unlimited free for 30 days</i>
              </b>
            </span>
            &nbsp; and get access to thousands of titles.
          </p>
        </div>

        <div className="section">
          <div className="section-left">
            <h2>Pack Lighter,</h2>
            <h2>Travel further</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
          </div>
          <div className="section-right">
            <img src="example.jpg" alt="" />
          </div>
        </div>
        <div className="section">
          <div className="section-right picture">
            <img src="firepic.jpg" alt="" />
          </div>
          <div className="section-left">
            <h2>Wi-Fi or</h2>
            <h2>Cellular Connectivity</h2>
            <p>
              <b>Wi-Fi</b> is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
