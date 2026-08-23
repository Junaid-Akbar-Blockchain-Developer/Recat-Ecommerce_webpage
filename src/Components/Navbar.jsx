import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          Aurèle
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={closeMenu}>Home</Link>
          </li>

          <li>
            <Link to="/Shop" onClick={closeMenu}>Shop</Link>
          </li>

          <li>
            <Link to="/Clothing" onClick={closeMenu}>Clothing</Link>
          </li>

          <li>
            <Link to="/Accessories" onClick={closeMenu}>
              Accessories
            </Link>
          </li>
        </ul>

        {/* Right Icons */}
        <div className="nav-icons">

          <button className="icon-btn" aria-label="Search">
            <IoSearch />
          </button>

          <button className="icon-btn" aria-label="Account">
            <FiUser />
          </button>

          <button className="icon-btn" aria-label="Shopping bag">
            <HiShoppingBag />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/Shop" onClick={closeMenu}>
            Shop
          </Link>

          <Link to="/Clothing" onClick={closeMenu}>
            Clothing
          </Link>

          <Link to="/Accessories" onClick={closeMenu}>
            Accessories
          </Link>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;