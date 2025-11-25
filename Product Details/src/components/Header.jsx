import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Header = ({ onSearch }) => {
  const { cartItems } = useContext(CartContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value); // send value to Home.jsx
  };

  return (
    <header
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 25px",
    borderBottom: "1px solid #ccc",
    background: "#f7f7ff",   // 🔥 light violet background
    position: "sticky",
    top: 0,
    zIndex: 100,
  }}
>

      {/* LEFT: LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img 
  src="/logo.png" 
  alt="Website Logo" 
  style={{ width: "100px", height: "100px", objectFit: "contain" }} 
/>

      </div>

      {/* CENTER: TITLE + SEARCH */}
      <div style={{ textAlign: "center", flexGrow: 1 }}>
        <h2
        style={{fontSize: "30px",fontWeight: "800",background: "linear-gradient(to right, #8ccddbff, #6f29dfff)",WebkitBackgroundClip: "text",color: "transparent",margin: "0",letterSpacing: "1px",}}>ShopNexa</h2>

        <input
          type="text"
          placeholder="Search for products..."
          value={searchValue}
          onChange={handleSearch}
          style={{
          padding: "10px 15px",
          width: "320px",
          borderRadius: "30px",
          border: "1px solid #ddd",
          outline: "none",
          fontSize: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "0.3s",
  }}
          onFocus={(e) => (e.target.style.boxShadow = "0 0 6px #4f46e5ff")}
          onBlur={(e) => (e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)")}
        />

      </div>

      {/* RIGHT: NAV LINKS */}
      {/* RIGHT: NAV LINKS */}
<div style={{ display: "flex", gap: "25px" }}>
  
  <Link
    to="/"
    style={{
      fontSize: "18px",
      textDecoration: "none",
      color: "#333",
      fontWeight: "600",
      padding: "5px 0",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
    onMouseLeave={(e) => (e.target.style.color = "#333")}
  >
    Home
  </Link>

  <Link
    to="/cart"
    style={{
      fontSize: "18px",
      textDecoration: "none",
      color: "#333",
      fontWeight: "600",
      padding: "5px 0",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
    onMouseLeave={(e) => (e.target.style.color = "#333")}
  >
    Cart ({cartItems.length})
  </Link>

</div>


    </header>
  );
};

export default Header;
