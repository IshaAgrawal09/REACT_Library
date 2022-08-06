import React from "react";
import "./Header.css";
const Header = () => {
  return <div className="header">
      <div className="content">
          <h1>For All Your Reading Needs</h1>
          {/* <h1>Reading Needs</h1> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.</p>
          <button>Read More</button>
      </div>
      <div className="pic">
          <img src="https://html.design/demo/bostorek/images/slider-img.png" alt=""/>
      </div>
  </div>;
};

export default Header;
