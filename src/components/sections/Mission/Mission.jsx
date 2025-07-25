import React from "react";
import "./Mission.css";

export default function Mission() {
  const missions = [
    {
      imgSrc: "/assets/icons/shield.png",
      text: "Notre équipe de spécialistes solaires offre un support rapide et courtois, garantissant une expérience client unique.",
    },
    {
      imgSrc: "/assets/icons/shield.png",
      text: "Nos systèmes répondent aux normes strictes de conception, assurant une installation durable et efficace.",
    },
    {
      imgSrc: "/assets/icons/shield.png",
      text: "Nous utilisons les matériaux les plus fiables, protégés par des garanties solides.",
    },
  ];

  return (
    <div className="mission ">
      <div className="container flex-column-center g-10">
        <span className="title">Nos Mission</span>
        <h2>
          Fournir des systèmes solaires et des services de la plus haute qualité
        </h2>
        <p>
          Grâce à notre expertise locale à Tunisie et nous optimisons chaque
          installation pour réduire vos factures d'électricité et contribuer à
          un avenir plus durable.
        </p>
        <ul className="mission-services flex g-20">
          {missions.map((item, index) => {
            return (
              <li
                className="missions-item flex-column-center g-20 "
                key={index}>
                <img src={item.imgSrc} alt="" loading="lazy" />
                <span className="data">{item.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
