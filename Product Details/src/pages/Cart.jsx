import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* 🟢 Add product image here */}
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />

          <div>
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;
