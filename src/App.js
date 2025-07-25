import { useContext, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./style/App.css";
import "./style/utility.css";
import Header from "./components/sections/Header/Header";
import { ImgContext } from "./context/img-popup";
import Footer from "./components/sections/Footer/Footer";
import Banner from "./components/sections/Banner/Banner";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import MobileMenu from "./components/sections/MobileMenu/MobileMenu";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import FinishPage from "./pages/FinishPage";
import { projectImgData } from "./data/projectImages";

export default function App() {
  const { changedata, data } = useContext(ImgContext);
  const [navstatus, setNavStatus] = useState("");
  const [noBanner, setNoBanner] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setNoBanner(location.pathname === "/devis");
    const styledPath =
      location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);
    switch (location.pathname) {
      case "/":
        document.title =
          "Trabelsi Service | Dites Au Revoir Aux Coûts Energétiques Elevés!";
        break;
      case "/apropos":
        document.title =
          styledPath + " | Trabelsi Service En Savoir Plus sur Nous!";
        break;
      case "/projets":
        document.title =
          styledPath +
          " | Trabelsi Service Découvrez Nos Réalisations Énergétiques!";
        break;
      case "/contact":
        document.title = styledPath + " | Trabelsi Service Entrons en Contact!";
        break;
      case "/devis":
        document.title =
          styledPath +
          " | Trabelsi Service Obtenez Votre Estimation Personnalisée!";
        break;
      case "/merci":
        document.title =
          styledPath +
          " | Trabelsi Service Nous apprécions votre prise de contact!";
        break;
      default:
        document.title =
          "Page Non Trouvée | Trabelsi Service Oups, Cette Page N'existe Pas!";
    }
  }, [location.pathname]);

  useEffect(() => {
    if (data.status === "active") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [data.status]);

  return (
    <div className={"main-page"}>
      <Header setNavStatus={setNavStatus} />
      <MobileMenu navstatus={navstatus} setNavStatus={setNavStatus} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route
          path="/projets"
          element={
            <Projects
              className={"projects section first-section projet-page"}
              data={projectImgData}
            />
          }
        />
        <Route path="/contact" element={<Contact screenType="contact" />} />
        <Route path="/devis" element={<Contact screenType="devis" />} />
        <Route path="/merci" element={<FinishPage screenType="merci" />} />
        <Route path="*" element={<FinishPage screenType="notFound" />} />
      </Routes>

      {!noBanner && <Banner />}

      <Footer />
      <div className={"img-popup " + data.status}>
        <img src={data.Imgsrc} alt="" loading="lazy" />
        <i
          className="fa-solid fa-xmark flex-center-center"
          onClick={() => {
            changedata("", "not-active");
          }}
        />
      </div>
      <div
        className={"overlay " + data.status}
        onClick={(e) => {
          if (e.target.contains(e.target)) {
            changedata("", "not-active");
          }
        }}></div>
    </div>
  );
}
