import React, { useState } from "react";
import "./events.css";

import events from "../../data/events.json";

function Events() {
  const [days, setDays] = useState(13);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(33);

  return (
    <main className="events">
      <section className="container up">
        <div className="right">
          <p className="clasic_title title">
            <span className="status-dot"></span>
            en directo y presencial
          </p>

          <h1 className="title big_title">
            Próximos Eventos con Lil<span>Adams</span>.
          </h1>
        </div>

        <div className="left">
          <div className="time">
            <h1 className="title big_title">{days}</h1>
            <p className="title">Días</p>
          </div>
          <div className="time">
            <h1 className="title big_title">{hours}</h1>
            <p className="title">Horas</p>
          </div>
          <div className="time">
            <h1 className="title big_title">{minutes}</h1>
            <p className="title">Minutos</p>
          </div>
        </div>
      </section>

      <section className="down container">
        {events.map((event) => (
          <article className="event" key={event.id}>
            <div className="one">
              <h1 className="title">{event.date_day}</h1>
              <p className="title clasic_title">
                {event.date_month.slice(0, 3)}
              </p>
            </div>

            <img src={event.image_url} alt={event.title} />

            <div className="info">
              <p className="title clasic_title">{event.subtitle}</p>
              <h1 className="title">{event.title}</h1>
              <p className="date_info">
                {event.location_city}, {event.location_country.slice(0, 2)} ·{" "}
                {event.location_name}
              </p>

              <button>Ver Datalles →</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Events;
