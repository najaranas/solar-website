import React from "react";
import "./Team.css";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="our-team section">
      <div className="container flex-center g-50">
        <img src="/assets/team-img.png" alt="" loading="lazy" />
        <div className="content flex-column g-20">
          <h2>Une Équipe Expérimentée pour Votre Tranquillité d'Esprit!</h2>
          <p>
            Chez <b className="comp-name">Trabelsi Service</b>, notre mission
            est de fournir un service client exceptionnel. Notre équipe a
            travaillé avec des centaines de clients satisfaits, grâce à notre
            expertise, notre éthique de travail et notre approche honnête.
            Découvrez pourquoi tant de clients nous font confiance pour leurs
            projets solaires. Contactez-nous dès aujourd'hui pour commencer
            votre transition vers l'énergie solaire!
          </p>

          <div className="buttons flex-center g-20">
            <Link to={"/devis"}>
              <button className=" flex-center g-5">
                <span>Devis Gratuit</span>
                <i className="fa-solid fa-angle-right flex-center-center" />
              </button>
            </Link>
            <a href="tel:96975772" className="flex-center g-5">
              <span>(+216) 95 604 600</span>
              <i className="fa-solid fa-angle-right flex-center-center" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
