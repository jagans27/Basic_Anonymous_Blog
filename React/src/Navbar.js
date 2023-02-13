import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Anonymous - Blog</h1>
      <div className="links">
        <Link
          style={{
            color: "white",
            borderRadius: "5px",
            backgroundColor: "#f1356d",
          }}
          to="/"
        >
          Home
        </Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
