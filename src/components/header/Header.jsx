import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CloseIcon, MenuIcon, UpRightIcon } from "../../svgs/Icons";
import "./header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  // const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`container ${scrolled ? "is-scrolled" : ""}`}>
      <Link to="/" className="title_a">
        <h1 className="title">
          <span className="lil">Lil</span>
          <span className="adams">Adams</span>
        </h1>
      </Link>

      <div className="menu">
        <span>
          <MenuIcon />
        </span>
        <span>
          <CloseIcon />
        </span>
      </div>

      <div className="links_container">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/videos">Vídeos</NavLink>
          </li>
          <li>
            <NavLink to="/eventos">eventos</NavLink>
          </li>
          <li>
            <NavLink to="/drop">drop</NavLink>
          </li>
          <li>
            <NavLink to="/comunidad">comunidad</NavLink>
          </li>
          <li>
            <NavLink to="/marcas">Marcas</NavLink>
          </li>
        </ul>

        <a href="https://youtube.com" target="_blank" className="to-yt">
          YouTube ↗
        </a>
      </div>
    </header>
  );
}

export default Header;
