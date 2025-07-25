import React from "react";
import "./Specialists.css";
import { Link } from "react-router-dom";

export default function Specialists() {
  const data = [
    {
      text: "Répondra à toutes vos questions.",
    },
    {
      text: "Vous tiendra informé chaque semaine avec des mises à jour sur l'avancement.",
    },
    {
      text: "Gèrera tout, de la conception à l'installation et au-delà.",
    },
    {
      text: "S'assurera que votre système fonctionne bien et vous satisfait.",
    },
  ];
  return (
    <div className="specialists section">
      <div className="container flex g-50">
        <img
          alt=""
          loading="lazy"
          src="/assets/spacialist.jpeg"
          className="main-img"
        />
        <div className="content">
          <h1>Rencontrez vos spécialistes solaires</h1>
          <p>
            Pour réaliser notre mission de fournir des systèmes solaires et un
            service de la plus haute qualité, chaque client Volta se voit
            attribuer une équipe opérationnelle qui :
          </p>
          <ul className="specialists-services flex-column g-20">
            {data.map((item, index) => {
              return (
                <li className="specialists-item flex-center g-10 " key={index}>
                  <img
                    src={"/assets/icons/verified.png"}
                    alt=""
                    loading="lazy"
                    width={50}
                  />
                  <span className="data">{item.text}</span>
                </li>
              );
            })}
          </ul>
          <Link to={"/devis"}>
            <button className="primary-btn flex-center g-10">
              <span>Rencontrez notre équipe !</span>
              <i className="fa-solid fa-angle-right flex-center-center"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
