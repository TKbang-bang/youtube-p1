import React from "react";
import "./activities.css";

function Activities() {
  return (
    <section className="container activities">
      <div className="right">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Actividades
        </p>

        <h1 className="title big_title">Contenido y demás</h1>
      </div>

      <div className="left">
        <article>
          <p className="number title">01</p>
          <h2 className="title">Gaming</h2>
          <p className="desc">Partidas, retos y momentos sin guión.</p>
        </article>

        <article>
          <p className="number title">02</p>
          <h2 className="title">tech</h2>
          <p className="desc">Reviews reales de tecnología que sí importa.</p>
        </article>

        <article>
          <p className="number title">03</p>
          <h2 className="title">live</h2>
          <p className="desc">Directos, comunidad y buena conversación.</p>
        </article>
      </div>
    </section>
  );
}

export default Activities;
