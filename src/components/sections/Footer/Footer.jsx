import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  // setInterval(() => {
  //   fetchSensorData();
  // }, 2000);

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo flex-column g-20">
            <Link className="logo" to={"/"}>
              <img
                loading="lazy"
                width={170}
                src="/assets/Trabelsi Service.png"
                alt="Équipe de Trabelsi Service installant des panneaux solaires à  Tunisie"
                title="Panneaux solaires en  Tunisie offrant une énergie propre et durable"
              />

              {/* <div className="text">
                {" "}
                <h2>
                  Zorgui <br />
                  Energie Solair{" "}
                </h2>{" "}
              </div> */}
            </Link>
            <div className="box flex-center g-10">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:96975772" className="phn-number line-hover">
                (+216) 95 604 600
              </a>
            </div>
            <div className="box flex-center g-10">
              <i className="fa-solid fa-envelope"></i>
              <a
                href="mailto:Zorguisolair@gmail.com"
                className="email line-hover">
                trabelsiservicesphotovoltaique@gmail.com
              </a>
            </div>
            <div className="box flex-center g-10">
              <i className="fa-solid fa-location-dot"></i>
              <span className="location">Sfax, Tunisie </span>
            </div>
          </div>
          <div className="footer-nav flex g-50">
            <div className="nav-box flex-column g-20">
              <h4>Liens Utiles</h4>
              <Link className="link line-hover" to={"/"}>
                Accueil
              </Link>
              <Link className="link line-hover" to={"/apropos"}>
                À-Propos
              </Link>
              <Link className="link line-hover" to={"/projets"}>
                Projets
              </Link>
              <Link className="link line-hover" to={"/contact"}>
                Contact
              </Link>
              <Link className="link line-hover" to={"/devis"}>
                Devis
              </Link>
            </div>

            <div className="nav-box flex-column g-20">
              <h4>Suivez-nous</h4>

              <a
                href="https://www.facebook.com/ZorguiEnergieSolaire"
                className="line-hover flex-center-center g-10">
                <i className="fa-brands fa-facebook-f "></i>
                <span>facebook</span>
              </a>
              <a
                href="https://www.facebook.com/ZorguiEnergieSolaire"
                className="line-hover flex-center-center g-10">
                <i className="fa-brands fa-instagram "></i>
                <span>Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/ZorguiEnergieSolaire"
                className="line-hover flex-center-center g-10">
                <i className="fa-brands fa-linkedin "></i>
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-terms flex-center">
          <span className="rights">
            &copy;
            {new Date().getFullYear()}
            <b>Trabelsi Service</b>Tous droits réservés
          </span>

          <span className="powred-by">
            Conception du site et référencement par
            <b className="line-hover">
              <a
                href="https://www.linkedin.com/in/anasnajar"
                target="_blank"
                rel="noopener noreferrer">
                Anas&nbsp;Najar
              </a>
              {/*
                The following link uses target="_blank" to open in a new tab.
                rel="noopener noreferrer" is added for security reasons:
                - 'noopener' prevents the new page from accessing window.opener (protects against tabnabbing).
                - 'noreferrer' prevents the browser from sending the referrer and also disables window.opener in most browsers.
              */}
            </b>
          </span>
        </div>
      </div>
    </div>
  );
}
