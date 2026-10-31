import React from "react";
import Hero from "../../components/Hero";
import Activities from "../../components/activities/Activities";
import LastVideo from "../../components/last_video/LastVideo";

function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <LastVideo />
    </main>
  );
}

export default Home;
