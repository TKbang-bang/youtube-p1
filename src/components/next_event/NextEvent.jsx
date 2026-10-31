import React from "react";
import { NavLink } from "react-router-dom";
import "./nextEvent.css";

function NextEvent() {
  return (
    <section className="container next_e">
      <div className="event_container">
        <div className="info">
          <p className="title">Proximo evento</p>
          <h1 className="title big_title">
            Lil<span>Adams</span> En españa
          </h1>

          <p className="date">15 de Noviembre - España</p>
        </div>

        <NavLink to="/eventos" className="title">
          Ver evento →
        </NavLink>
      </div>
    </section>
  );
}

export default NextEvent;
