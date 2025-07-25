import React from "react";
import "./MobileMenu.css";
import { Link } from "react-router-dom";

export default function MobileMenu({ navstatus, setNavStatus }) {
  return (
    <div className={"mobile-nav " + navstatus}>
      <div className="wrapper flex-column g-30">
        <div className="top-nav flex-between-center g-10">
          <Link
            className="logo"
            to={"/"}
            onClick={() => {
              setNavStatus("");
            }}>
            <img
              width={170}
              src="/assets/Trabelsi Service.png"
              alt="Équipe de Trabelsi Service installant des panneaux solaires à  Tunisie"
              title="Panneaux solaires en  Tunisie offrant une énergie propre et durable"
            />

            {/* <div className="text">
              <h2>
                Zorgui <br />
                Energie Solair{" "}
              </h2>
            </div> */}
          </Link>
          <i
            className="fa-solid fa-xmark flex-center-center"
            onClick={() => {
              setNavStatus("");
            }}></i>
        </div>
        <div className="nav-box flex-column g-20">
          <Link
            className="link line-hover"
            to={"/"}
            onClick={() => {
              setNavStatus("");
            }}>
            Acceuil
          </Link>

          <Link
            className="link line-hover"
            to={"/apropos"}
            onClick={() => {
              setNavStatus("");
            }}>
            À-Propos
          </Link>
          <Link
            className="link line-hover"
            to={"/projets"}
            onClick={() => {
              setNavStatus("");
            }}>
            Projets
          </Link>

          <Link
            className="link line-hover"
            to={"/contact"}
            onClick={() => {
              setNavStatus("");
            }}>
            Contact
          </Link>
          <Link
            className="link line-hover"
            to={"/devis"}
            onClick={() => {
              setNavStatus("");
            }}>
            Devis
          </Link>
        </div>
        <div className="nav-box flex-center g-20">
          <a
            onClick={() => {
              setNavStatus("");
            }}
            href="https://www.facebook.com/ZorguiEnergieSolaire"
            className="social-icon line-hover flex-center-center g-10">
            <i className="fa-brands fa-facebook-f "></i>
          </a>
          {/* <a
            href="https://www.facebook.com/ZorguiEnergieSolaire"
            className="social-icon line-hover flex-center-center g-10">
            <i className="fa-brands fa-whatsapp "></i>
            <span>95 604 600

</span>
          </a> */}
          <a
            href="https://www.facebook.com/ZorguiEnergieSolaire"
            className="social-icon line-hover flex-center-center g-10">
            <i className="fa-brands fa-instagram "></i>
            {/* <span>Instagram</span> */}
          </a>
          <a
            href="https://www.facebook.com/ZorguiEnergieSolaire"
            className="social-icon line-hover flex-center-center g-10">
            <i className="fa-brands fa-linkedin "></i>
            {/* <span>Linkedin</span> */}
          </a>
          {/* <a
            href="https://www.linkedin.com/company/Trabelsi Servicephotovoltaique"
            className="social-icon line-hover flex-center-center g-10"
            onClick={() => {
              setNavStatus("");
            }}>
            <i className="fa-brands fa-linkedin-in "></i>
          </a> */}
        </div>
      </div>
    </div>
  );
}
