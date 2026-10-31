import React from "react";
import Hero from "../../components/Hero";
import Activities from "../../components/activities/Activities";
import LastVideo from "../../components/last_video/LastVideo";
import NewVideos from "../../components/new_videos/NewVideos";

function Home() {
  return (
    <main>
      <Hero />
      <Activities />
      <LastVideo />
      <NewVideos />
    </main>
  );
}

export default Home;
