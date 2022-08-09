import React from "react";
import CartContext from "./Context";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(CartContext);
  return (
    <>
      <div className="footer" style={theme}>
        <hr />
        Conditions of Use & Sale &copy; 1996-2022, Bostorek.com
      </div>
    </>
  );
};

export default Footer;
