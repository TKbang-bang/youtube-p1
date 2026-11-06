import React from "react";
import "./lastVideo.css";
import { PlayIcon } from "../../svgs/Icons";

function LastVideo() {
  return (
    <section className="container last_video">
      <div className="right">
        <img
          src="/videos/setup.jpg"
          alt="liladams"
          loading="lazy"
          decoding="async"
        />
        <a href="https://youtube.com" target="_blank">
          <PlayIcon />
        </a>
      </div>

      <div className="left">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Ultimo video
        </p>

        <h1 className="title big_title">Mi setup Mejorado 2026</h1>
        <p className="desc">
          La mesa, el PC, el sonido y cada detalle del nuevo espacio{" "}
          <span>
            Lil<span>Adams</span>
          </span>
        </p>
        <a href="https://youtube.com" target="_blank">
          Ver en Youtube ↗
        </a>
      </div>
    </section>
  );
}

export default LastVideo;
