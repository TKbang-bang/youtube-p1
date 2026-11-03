import React, { useEffect, useState } from "react";
import "./videos.css";

import allVideos from "../../data/allVideos.json";

function Videos() {
  const [categories, setCategories] = useState([]);
  const [current, setCurrent] = useState("Todos");
  const [videos, setVideos] = useState([]);

  const changeCategory = (e, category) => {
    document.querySelectorAll(".videos_categories li").forEach((li) => {
      li.classList.remove("active");
    });

    e.target.classList.add("active");
    setCurrent(category);
  };

  const getCategories = async () => {
    let cats = [];

    allVideos.map((video) => {
      if (!cats.includes(video.about)) {
        cats.push(video.about);
      }
    });

    setCategories([...cats]);
  };

  const getVideos = () => {
    if (current === "Todos") {
      setVideos(allVideos);
    } else {
      const filteredVideos = allVideos.filter(
        (video) => video.about === current,
      );
      setVideos(filteredVideos);
    }
  };

  useEffect(() => {
    getCategories();
    getVideos();
  }, []);

  useEffect(() => {
    getVideos();
  }, [current]);

  return (
    <main className="videos">
      <section className="container fs">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Archivo de Lil Adams
        </p>

        <h1 className="title big_title">
          Mejores videos de Lil<span>Adams</span>
        </h1>
      </section>

      <ul className="videos_categories container">
        <li className="active" onClick={(e) => changeCategory(e, "Todos")}>
          Todos
        </li>
        {categories.map((category, index) => (
          <li key={index} onClick={(e) => changeCategory(e, category)}>
            {category}
          </li>
        ))}
      </ul>

      <section className="container videos_container">
        <div className="videos_list">
          {videos.map((v, index) => {
            return (
              <article key={index}>
                <div className="video_container">
                  {v.image_url ? (
                    <img src={v.image_url} alt="" />
                  ) : (
                    <div className="no">
                      <img src="/no-content.png" className="no_content" />
                    </div>
                  )}
                  <span>{v.duration}</span>
                </div>

                <div className="info">
                  <p className="title clasic_title about">{v.about}</p>
                  <h2 className="title">{v.title}</h2>
                  <p className="views">{v.views} Visualizaciones</p>
                </div>

                <a href={`${v.url}`} target="_blank">
                  Ver en Youtube ↗
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="container last_container">
        <div className="last">
          <div className="right">
            <p className="clasic_title title">Exploracion ampliada</p>

            <h1 className="title big_title">
              Mas videos de Lil<span>Adams</span> en Youtube
            </h1>
          </div>

          <a href="https://youtube.com" className="title" target="_blank">
            Ver en Youtube ↗
          </a>
        </div>
      </section>
    </main>
  );
}

export default Videos;
