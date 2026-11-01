import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="f1">
          <h1 className="title">
            Lil<span>Adams</span>
          </h1>
          <p>Gaming. Tecnología. Comunidad.</p>
        </div>

        <ul className="f2">
          <li>
            <NavLink to="/videos">Videos</NavLink>
          </li>
          <li>
            <NavLink to="/eventos">Eventos</NavLink>
          </li>
          <li>
            <NavLink to="/drop">LilAdams Drop</NavLink>
          </li>
          <li>
            <NavLink to="/comunidad">Comunidad</NavLink>
          </li>
          <li>
            <NavLink to="/marcas">Marcas</NavLink>
          </li>
        </ul>

        <div className="f3">
          <a href="https://yotube.com" target="_blank" title="YouTube">
            YT
          </a>
          <a href="https://twitch.com" target="_blank" title="Twitch">
            TW
          </a>
          <a href="https://instagram.com" target="_blank" title="Instagram">
            IG
          </a>
          <a href="https://discord.com" target="_blank" title="Discord">
            DC
          </a>
        </div>
      </div>

      <div className="dev">
        <p>
          © 2026 LilAdams. DEV{" "}
          <a
            href="https://www.linkedin.com/in/woodley-tk-b209b636b/"
            target="_blank"
          >
            WoodleyTK
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
