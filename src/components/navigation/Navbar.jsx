import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center bg-gray-400">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
