import React from "react";
import "./newVideos.css";

import newVideos from "../../data/newVideos.json";

function NewVideos() {
  return (
    <section className="container new_videos">
      <p className="clasic_title title">
        <span className="status-dot"></span>
        Nuevos videos
      </p>

      <h1 className="title big_title">Calidad y descubrimiento</h1>

      <div className="videos">
        {newVideos.map((v) => {
          return (
            <article>
              <div className="video_container">
                <img src={v.image_url} alt="" />
                <span>{v.duration}</span>
              </div>

              <div className="info">
                <p className="title clasic_title about">{v.about}</p>
                <h2 className="title">{v.title}</h2>
                <p className="views">{v.views} Visualizaciones</p>
              </div>

              <a href="https://youtube.com" target="_blank">
                Ver en Youtube ↗
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default NewVideos;
