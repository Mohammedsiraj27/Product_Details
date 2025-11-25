import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";   // ✅ Correct import

const Home = ({ searchValue }) => {
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Home Page</h1>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {filteredProducts.length === 0 && (
          <h2>No products found 😢</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
