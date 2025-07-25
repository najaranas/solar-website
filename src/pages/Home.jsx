import React, { useEffect, useContext } from "react";
import "./Home.css";
import Features from "../components/sections/Features/Features.jsx";
import Form from "../components/sections/Form/Form.jsx";
import Reviews from "../components/sections/Reviews/Reviews.jsx";
import Process from "../components/sections/Process/Process.jsx";
import Team from "../components/sections/Team/Team.jsx";
import Projects from "./Projects.jsx";
import Faq from "../components/sections/Faq/Faq.jsx";
import Landing from "../components/sections/Landing/Landing.jsx";
import { ImgContext } from "../context/img-popup.js"; // adjust path as needed

export default function Home() {
  const { data } = useContext(ImgContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  useEffect(() => {
    if (data.status === "active") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Clean up in case the component unmounts while popup is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [data.status]);

  return (
    <div className="home-page">
      <Landing
        firstSection={true}
        title={"Dites au revoir aux coûts énergétiques élevés!"}
        paragraph={
          " Rejoignez ceux qui utilisent l'énergie solaire pour réduire leurs factures, augmenter leur autonomie énergétique, valoriser leurs propriétés et protéger l'environnement."
        }
        imgSrc={"/assets/home-img.png"}
      />
      <Features />
      <Form />
      <Reviews />

      <Projects
        data={[
          {
            ImgSrc:
              "https://www.solarinstallco.com.au/wp-content/uploads/2023/10/Projects-Gallery-9.jpg",
          },
          {
            ImgSrc:
              "https://tse2.mm.bing.net/th/id/OIP.4bLLADTk98g1S2yWi0j9lgHaF7?r=0&w=1500&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3",
          },
          {
            ImgSrc:
              "https://tse3.mm.bing.net/th/id/OIP.ANRl2utS-reoOaN-OGK3KwHaFj?r=0&w=2001&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3",
          },
          {
            ImgSrc:
              "https://tse3.mm.bing.net/th/id/OIP.E6xqRUejXSUIMjJneeuo0gHaJV?r=0&w=1256&h=1582&rs=1&pid=ImgDetMain&o=7&rm=3",
          },
        ]}
      />

      <Team />

      <Process />

      <Faq />
    </div>
  );
}
