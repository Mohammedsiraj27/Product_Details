import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <header style={{display:"", justifyContent:"space-between", padding:"10px", borderBottom:"1px solid #ccc"}}>
      <center><h2>Siraj E-Commerce Website</h2></center>
      <Link to="/" style={{ marginRight: "30px" }}>Home</Link>
      <Link to="/cart">Cart ({cartItems.length})</Link>
      
    </header>
  );
};

export default Header;
