import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [active, setActive] = useState(false)
  return (
    <nav className="flex items-center justify-between h-20 px-16 bg-gray-400">
      <img className="logo" src="/vite.svg" alt="logo" />
      <div className="navitems">
      <Link onClick={() => setActive("Home")} to="/" className={` ${active === "Home" ? "active" : ""}`}>Home</Link>
      <Link onClick={() => setActive("About")} to="/about" className={` ${active === "About" ? "active" : ""}`}>About</Link>
      <Link onClick={() => setActive("Scoreboard")} to="/scoreboard" className={` ${active === "Scoreboard" ? "active" : ""}`}>Scoreboard</Link>
      </div>
    </nav>
  );
};
