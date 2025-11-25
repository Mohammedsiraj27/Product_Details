import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const Home = ({ searchValue }) => {
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ background: "linear-gradient(90deg, #508a97ff, #401881ff)",WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent",fontSize: "32px",fontWeight: "bold",marginBottom: "20px"}}>Home Page</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
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
