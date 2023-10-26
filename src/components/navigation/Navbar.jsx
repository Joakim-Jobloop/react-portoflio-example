import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-400 h-20 flex justify-center items-center">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};
