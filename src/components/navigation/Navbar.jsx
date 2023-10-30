import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-16 bg-gray-400">
      <img className="logo" src="/vite.svg" alt="logo" />
      <div className="navitems">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
