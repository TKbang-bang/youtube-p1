import React, { useState } from "react";
import "./events.css";

import events from "../../data/events.json";
import { CloseIcon } from "../../svgs/Icons";

function Events() {
  const [days, setDays] = useState(13);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(33);
  const [activeEvent, setActiveEvent] = useState({});
  const [isEventActive, setIsEventActive] = useState(false);
  const eventDate = new Date(activeEvent.date);

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
        {events.map((event) => {
          const date = new Date(event.date);

          return (
            <article className="event" key={event.id}>
              <div className="one">
                <h1 className="title">
                  {String(date.getDate()).padStart(2, "0")}
                </h1>
                <p className="title clasic_title">
                  {date
                    .toLocaleDateString("es-ES", { month: "short" })
                    .toUpperCase()}
                </p>
              </div>

              <img src={event.image} alt={event.id} />

              <div className="info">
                <p className="title clasic_title">{event.id}</p>
                <h1 className="title">{event.title}</h1>
                <p className="date_info">
                  {event.city} · {event.venue}
                </p>

                <button
                  onClick={() => (
                    setActiveEvent(event),
                    setIsEventActive(true)
                  )}
                >
                  Ver Datalles →
                </button>
              </div>
            </article>
          );
        })}
      </section>

      {isEventActive && (
        <section className="event_shown">
          <div className="event_content">
            <button
              onClick={() => (setActiveEvent({}), setIsEventActive(false))}
            >
              <CloseIcon />
            </button>

            <img src={activeEvent.image} alt="" />

            <div className="info">
              <p className="title clasic_title">{activeEvent.id}</p>
              <h1 className="title">{activeEvent.title}</h1>

              <p className="ms da">
                {eventDate.toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <p className="title clasic_title ab">Sobre el evento</p>

              <h1 className="title">
                Una nueva experiencia con Lil<span>Adams</span>
              </h1>

              <p className="ms">{activeEvent.description}</p>

              <div className="l">
                <p>Establecimiento / Plataforma</p>
                <p className="ms">{activeEvent.venue}</p>
              </div>

              <div className="l">
                <p>Ciudad / Tipo de evento</p>
                <p className="ms">{activeEvent.city}</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Events;
