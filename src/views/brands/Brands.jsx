import React from "react";
import "./brands.css";
import brands from "../../data/brands.json";

function Brands() {
  return (
    <main className="brands">
      <section className="container one">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Alidados de LilAdams
        </p>

        <h1 className="title">Estamos en el mismo equipo.</h1>
        <p className="ms">
          Marcas que ayudan a llevar cada vídeo, directo y evento al siguiente
          nivel.
        </p>
      </section>

      <section className="container two">
        {brands.map((brand) => {
          return (
            <article key={brand.id}>
              <div className="top">
                <h1 className="pre title">{brand.name.slice(0, 1)}</h1>
                <h1 className="name title">{brand.name}</h1>
                <p className="title about">{brand.about}</p>
              </div>
              <div className="down">
                <p className="clasic_title title">{brand.title}</p>
                <p className="subtitle">{brand.subtitle}</p>
                <a href="" target="_blank" className="title">
                  Visitar Marca ↗
                </a>
              </div>
            </article>
          );
        })}
      </section>

      <section className="three container">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Colabora con LilAdams
        </p>

        <h1 className="title big_title">Vamos a crear algo juntos</h1>

        <p className="ms">
          Integraciones, campañas, eventos o ideas que aún no existen. Cuéntame
          lo que tienes en mente.
        </p>

        <a href="liladamsejemplo@nexor.example" className="title">
          Envíame un email ↗
        </a>
      </section>
    </main>
  );
}

export default Brands;
