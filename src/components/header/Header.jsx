import React, { useEffect, useState, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { CloseIcon, MenuIcon } from "../../svgs/Icons";
import "./header.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={` ${scrolled ? "is-scrolled" : ""}`} ref={headerRef}>
      <Link to="/" className="title_a">
        <h1 className="title">
          <span className="lil">Lil</span>
          <span className="adams">Adams</span>
        </h1>
      </Link>

      <div className={`menu ${isOpen ? "open" : ""}`}>
        <span className="menu_icon" onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </span>
        <span className="close_icon" onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </span>
      </div>

      <div className={`links_container ${isOpen ? "open" : ""}`}>
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
