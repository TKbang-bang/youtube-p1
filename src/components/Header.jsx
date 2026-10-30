import React from "react";
import { NavLink } from "react-router-dom";
import { CloseIcon, MenuIcon, UpRightIcon } from "../svgs/Icons";

function Header() {
  return (
    <header>
      <a href="/">
        <h1>
          <span className="lil">Lil</span>
          <span className="adams">Adams</span>
        </h1>
      </a>

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

        <a href="https://youtube.com" about="_blank">
          <span>Youtube</span>
          <UpRightIcon />
        </a>
      </div>
    </header>
  );
}

export default Header;
