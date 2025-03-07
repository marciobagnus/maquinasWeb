import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Importa useLocation de react-router-dom
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { WhatsappButton } from "./components/whatsappButton";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import ReactGA from 'react-ga4'; // Importa react-ga4


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const location = useLocation(); // Usa useLocation para obtener la ubicación actual

  useEffect(() => {
    // Realiza un seguimiento cada vez que cambie de ruta
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]); // Este useEffect se ejecutará cada vez que cambie la ruta

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      {/*
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
    */}
      <Contact data={landingPageData.Contact} />
      <WhatsappButton data={landingPageData.WhatsappButton} />
    </div>
  );
};

export default App;
