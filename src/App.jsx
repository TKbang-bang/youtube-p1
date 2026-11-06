import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./views/home/Home";
import Footer from "./components/footer/Footer";
import Videos from "./views/videos/Videos";
import Events from "./views/eventos/Events";
import Drop from "./views/drop/Drop";
import Community from "./views/community/Community";
import Brands from "./views/brands/Brands";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/drop" element={<Drop />} />
        <Route path="/comunidad" element={<Community />} />
        <Route path="/marcas" element={<Brands />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
