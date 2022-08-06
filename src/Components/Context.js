import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [val,setVal] = useState("php")
  return (
    <CartContext.Provider
      value={{
        data,
        setData,
        query,
        setQuery,
        val,
        setVal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
