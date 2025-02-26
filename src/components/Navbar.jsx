import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Post</Link></li>
        <li><Link to="/about">Chi Siamo</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;