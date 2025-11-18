import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if(!product) return <p>Product not found</p>;

  return (
    <div style={{padding:"20px"}}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "150px", height: "250px", objectFit: "cover" }} />
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
