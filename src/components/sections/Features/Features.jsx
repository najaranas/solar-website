import React from "react";
import "./Features.css";
const boxsData = [
  {
    featurName: "Panneaux solaires haute efficacité",
    featurAdvantage: "Convertissent plus de lumière du soleil en électricité.",
    featureBenifits:
      " Réduisez considérablement vos factures d'énergie, maximisant votre retour sur investissement et économisez des milliers de dinars.",
    iconsSrc: "efficiency.png",
  },
  {
    featurName: "Garantie complète",
    featurAdvantage:
      "Couverture longue durée pour les panneaux et l'installation.",
    featureBenifits:
      "Protégez votre investissement et minimisez les coûts de maintenance, assurant la tranquillité d'esprit avec une garantie de performance à long terme.",
    iconsSrc: "guaranteed.png",
  },
  {
    featurName: "Équipe d'installation professionnelle",
    featurAdvantage: "Installateurs certifiés et expérimentés.",
    featureBenifits:
      "Installation sécurisée et de haute qualité, garantissant un fonctionnement fiable et sans tracas de votre système solaire pendant des années.",
    iconsSrc: "professional-services.png",
  },
  {
    featurName: "Solutions de conception personnalisées",
    featurAdvantage: "Adaptées aux besoins spécifiques de votre propriété.",
    featureBenifits:
      "Assurez une performance optimale et une intégration esthétique parfaite, augmentant la valeur et l'attrait de votre propriété.",
    iconsSrc: "conception.png",
  },
];
export default function Features() {
  return (
    <div className="features section">
      <div className="container flex-column g-50">
        <h2>
          Pourquoi choisir Trabelsi Service comme votre fournisseur de solutions
          solaires ?
        </h2>
        <div className="content flex g-20">
          <div className="boxs-content flex-column g-50">
            {boxsData.map((item, index) => {
              return (
                <div className="data-box flex-column g-20 " key={index}>
                  <div className="top-box flex-center g-10">
                    <img
                      className="icon-img"
                      alt=""
                      loading="lazy"
                      src={
                        process.env.PUBLIC_URL +
                        `/assets/icons/${item.iconsSrc}`
                      }
                    />
                    <h4>{item.featurName}</h4>
                  </div>
                  <h3>{item.featurAdvantage} </h3>
                  <p>{item.featureBenifits}</p>
                </div>
              );
            })}
          </div>
          <img
            className="sticky-img"
            alt=""
            loading="lazy"
            src={"/assets/output-onlinegiftools.gif"}
          />
        </div>
      </div>
    </div>
  );
}
