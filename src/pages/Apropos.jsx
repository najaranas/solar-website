import React, { useEffect } from "react";
import "./Apropos.css";

import Landing from "../components/sections/Landing/Landing";
import Mission from "../components/sections/Mission/Mission";
import Specialists from "../components/sections/Specialists/Specialists";
import { Link } from "react-router-dom";

export default function Apropos() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <>
      <div className="apropos-page ">
        <Landing
          firstSection={true}
          title={"Le choix de confiance en énergie solaire à Sfax"}
          paragraph={
            "Trabelsi Service est une entreprise solaire complète offrant des systèmes solaires de la plus haute qualité, accompagnés d'un support de classe mondiale."
          }
          imgSrc={"/assets/apropos2.jpeg"}
        />
        <Mission />
        <Specialists />
        <Landing
          title={"Contribuer à un avenir durable"}
          paragraph={
            "En tant que client de Trabelsi Service, vous jouez un rôle clé dans la protection de l'environnement en réduisant les impacts négatifs de l'électricité traditionnelle."
          }
          imgSrc={"/assets/environment-img.jpeg"}>
          <h4>Redonner à la communauté</h4>
          <p>
            Pour chaque installation solaire réalisée par Zorgui Energie Solair
            , nous réduisons notre empreinte carbone collective, favorisant un
            avenir plus propre et plus vert. Votre choix soutient non seulement
            vos économies d'énergie, mais aussi la santé de notre planète.
            Ensemble, nous faisons la différence.
          </p>

          <Link
            to={"/devis"}
            className="secondary-btn line-hover flex-center-center g-10">
            <span>Rejoignez-nous dans cette mission verte&nbsp;!</span>
            <i className="fa-solid fa-angle-right flex-center-center" />
          </Link>
        </Landing>
      </div>
    </>
  );
}
