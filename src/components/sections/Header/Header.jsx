import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ setNavStatus }) {
  return (
    <header>
      <div className={"container flex-between-center g-40"}>
        <Link className="logo" to={"/"}>
          <img
            width={170}
            src="/assets/Trabelsi Service.png"
            alt="Équipe de Trabelsi Service installant des panneaux solaires à  Tunisie"
            title="Panneaux solaires en  Tunisie offrant une énergie propre et durable"
          />

          <div className="text">
            {/* <h2>
              Zorgui <br />
              Energie Solair{" "}
            </h2> */}
          </div>
        </Link>
        <nav className="nav-list flex-center g-30">
          <Link className="list-item line-hover" to={"/"}>
            Acceuil
          </Link>
          <Link className="list-item line-hover" to={"/apropos"}>
            À-Propos
          </Link>
          <Link className="list-item line-hover" to={"/projets"}>
            Projets
          </Link>

          <Link className="list-item line-hover" to={"/contact"}>
            Contact
          </Link>
        </nav>

        <div className="action flex">
          <a
            href="tel:96975772"
            className="sales line-hover flex-center-center g-10">
            <span>(+216) 95 604 600</span>
            <i className="fa-solid fa-angle-right flex-center-center" />
          </a>
          <Link to={"/devis"}>
            <button className="primary-btn flex-center g-10">
              <span>Devis Gratuit</span>
              <i className="fa-solid fa-angle-right flex-center-center" />
            </button>
          </Link>
        </div>
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            setNavStatus("active");
          }}></i>
      </div>
    </header>
  );
}
