import React from "react";
import "./drop.css";
import drops from "../../data/drops.json";

function Drop() {
  return (
    <section className="container drop">
      <div className="one">
        <h1 className="title big_title">
          Lil<span>Adams</span> Drop
        </h1>

        <a href="" target="_blank">
          Visitar tienda ↗
        </a>
      </div>

      <div className="two">
        {drops.map((drop) => {
          return (
            <article key={drop.id}>
              <img src={drop.image} alt={drop.name} />

              <div className="info">
                <h2 className="title">{drop.name}</h2>
                <p>{drop.price}</p>

                <a href="" target="_blank">
                  Comprar ↗
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Drop;
