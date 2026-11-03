import React from "react";
import "./community.css";

function Community() {
  return (
    <main className="community">
      <section className="container one">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Comunidad LilAdams
        </p>

        <h1 className="title">
          La comunidad es muy grande <span>Unetenos</span>.
        </h1>

        <p className="ms">
          Gente que juega, crea, opina y forma parte de todo esto.
        </p>

        <a href="https://discord.com" target="_blank">
          Unete al Discord ↗
        </a>
      </section>

      <section className="container two">
        <p className="clasic_title title">
          <span className="status-dot"></span>
          Estes al tanto
        </p>
        <h1 className="title big_title">Comunidad fuerte.</h1>

        <div className="socials">
          <a href="" target="_blank">
            <h2>YT</h2>
            <div>
              <h1>Youtube</h1>
              <p>850k subs</p>
            </div>
            <span>↗</span>
          </a>

          <a href="" target="_blank">
            <h2>TW</h2>

            <div>
              <h1>Twitch</h1>
              <p>120k follows</p>
            </div>

            <span>↗</span>
          </a>

          <a href="" target="_blank">
            <h2>IG</h2>

            <div>
              <h1>Instagram</h1>
              <p>310k followers</p>
            </div>

            <span>↗</span>
          </a>

          <a href="" target="_blank">
            <h2>DC</h2>

            <div>
              <h1>Discord</h1>
              <p>31k miembros</p>
            </div>

            <span>↗</span>
          </a>
        </div>
      </section>

      <section className="three container">
        <div className="content">
          <p className="title">LilAdmas community</p>
          <h1 className="title big_title">Sé parte de la communidad</h1>
        </div>
      </section>
    </main>
  );
}

export default Community;
