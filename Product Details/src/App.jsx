import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <CartProvider>
      <Router>
        <Header onSearch={(val) => setSearchValue(val)} />

        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
