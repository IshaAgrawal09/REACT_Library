import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [theme, setTheme] = useState({
    color: "black",
    backgroundColor: "#3d6270",
    headerBg: "#eee",
    anchorColor: "Black",
    detailsColor: "gray",
    offers: "#0d4e68",
  });

  // SEARCH OPTION
  const submit = (event) => {
    setIsSubmit(false);
    // event.preventDefault();
    if (event.key === "Enter") {
      fetch(
        `https://openlibrary.org/search.json?q=${query}&mode=ebooks&has_fulltext=true`
      )
        .then((response) => response.json())
        .then((actualData) => {
          // console.log(actualData.docs[0].lending_edition_s);
          setData(actualData);
        });
      setIsSubmit(true);
    }
  };

  // ENBLE DARK MODE
  const mode = (event) => {
    if (event.target.checked) {
      setTheme({
        color: "white",
        backgroundColor: "#063547",
        headerBg: "#38697c",
        sectionBg: "#063547",
        anchorColor: "white",
        detailsColor: "white",
        offers: "#df9b9b",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#3d6270",
        headerBg: "#eee",
        sectionBg: "#fff",
        anchorColor: "Black",
        detailsColor: "gray",
        offers: "#0d4e68",
      });
    }
  };
  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        query,
        setQuery,
        theme,
        setTheme,
        mode,
        submit,
        isSubmit,
        setIsSubmit,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
