import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context";
import Home from "./Components/Home";
import SinglePage from "./Components/SinglePage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:id" element={<SinglePage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
