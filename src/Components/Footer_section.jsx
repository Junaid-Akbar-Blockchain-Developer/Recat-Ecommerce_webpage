import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer_section() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box footer-brand">
          <h2>Aurèle</h2>

          <p>
            A curated collection of well-made goods for everyday living.
            Designed to last, made to be loved.
          </p>
        </div>

        {/* Shop */}
        <div className="footer-box">
          <h3>Shop</h3>

          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Clothing">Clothing</Link>
          <Link to="/Accessories">Accessories</Link>
        </div>

        {/* Company */}
        <div className="footer-box">
          <h3>Company</h3>

          <Link to="/about">About us</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/shipping">Shipping & returns</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Social */}
        <div className="footer-box">
          <h3>Follow Us</h3>

          <div className="social-links">

            <a
              href="#"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://github.com/Junaid-Akbar-Blockchain-Developer"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/junaid-akbar-shaikh-58b255382/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Junaid Akbar Shaikh. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer_section;