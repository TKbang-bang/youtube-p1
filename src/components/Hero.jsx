import React from "react";
import { NavLink } from "react-router-dom";
import "./hero.css";

function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="presentation">
        <div className="right">
          <p className="clasic_title title">
            <span className="status-dot"></span>
            CREADOR DE CONTENIDO DIGITAL
          </p>

          <h1 className="title hero-title big_title">
            NO ES SOLO
            <span>UN JUEGO</span>
            ES MI MUNDO.
          </h1>

          <p className="hero-description">
            Gaming, tecnología y retos sin filtros. Soy Lil Adams y aquí empieza
            todo lo que no cabe en un vídeo.
          </p>

          <div className="hero-actions">
            <NavLink to="/videos" className="btn-primary">
              EXPLORAR VÍDEOS ↗
            </NavLink>

            <NavLink to="/comunidad" className="btn-secondary">
              Unete a la comunidad
            </NavLink>
          </div>

          <div className="hero-stats">
            <div>
              <strong>850K+</strong>
              <span>SUSCRIPTORES</span>
            </div>

            <div>
              <strong>03</strong>
              <span>PATROCINADORES</span>
            </div>
          </div>
        </div>
      </div>

      <img className="hero-person" src="/perfil.png" alt="NEXOR" />
    </section>
  );
}

export default Hero;
