import { useState } from "react";
import { Link } from "react-router-dom";
function Home_Header() {
  const [active, setActive] = useState("All");

  return (
    <header className="Home-header">
      <nav className="Home-header-links">
        <ul className="Home-pages-links">

          <li
            className={`Home_links ${active === "All" ? "active" : ""}`}
            onClick={() => setActive("All")}
          >
            <Link to={"/"}>All</Link>
          </li>

          <li
            className={`Home_links ${active === "Clothing" ? "active" : ""}`}
            onClick={() => setActive("Clothing")}
          >
            <Link to={"/Men_products"}>Men</Link>
          </li>
<li
            className={`Home_links ${
              active === "Accessories" ? "active" : ""
            }`}
            onClick={() => setActive("Accessories")}
          >
            <Link to={'/Women_products'}>Womens</Link>
          </li>
          <li
            className={`Home_links ${active === "Home" ? "active" : ""}`}
            onClick={() => setActive("Home")}
          >
            <Link to={"/Kids_Products"}>Kids</Link>
          </li>
          <li
            className={`Home_links ${
              active === "Wellness" ? "active" : ""
            }`}
            onClick={() => setActive("Wellness")}
          >
            <Link to={"/Accessories"}>Accessories</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Home_Header;
