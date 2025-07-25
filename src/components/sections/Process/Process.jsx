import React from "react";
import "./Process.css";
const processData = [
  {
    step: "Étape 1",
    title: "Planifiez Votre Consultation",
    paragraph:
      "Contactez-nous pour une consultation gratuite avec un expert en énergie solaire. Il sera votre conseiller dédié tout au long du projet.",
    keyText: "Obtenez une étude gratuite du projet.",
    iconSrc: "one.png",
  },
  {
    step: "Étape 2",
    title: "Évaluation Personnalisée",
    paragraph:
      "Notre expert effectuera une évaluation complète de votre propriété pour déterminer la meilleure solution solaire.",
    keyText: "Suivi et garantie de service après-vente.",
    iconSrc: "two.png",
  },
  {
    step: "Étape 3",
    title: "Proposition de Solution",
    paragraph:
      "Après l'évaluation, nous vous proposerons plusieurs options adaptées à votre budget et à vos besoins énergétiques.",
    keyText:
      "Laissez notre équipe de professionnels gérer l'ensemble du processus.",
    iconSrc: "three.png",
  },
  {
    step: "Étape 4",
    title: "Installation Professionnelle",
    paragraph:
      "Une fois la proposition acceptée, nous planifierons et réaliserons l'installation de votre système solaire en 1 à 2 jours.",
    keyText:
      "Assurez-vous de la qualité avec une garantie pouvant aller jusqu'à 25 ans sur les panneaux solaires.",

    iconSrc: "four.png",
  },
  {
    step: "Étape 5",
    title: "Profitez de l'Énergie Solaire",
    paragraph:
      "Bénéficiez immédiatement d'une énergie solaire propre et économique, tout en augmentant la valeur de votre propriété.",
    keyText: "Profitez de votre nouvelle énergie solaire dès maintenant.",
    iconSrc: "five.png",
  },
];
export default function Process() {
  return (
    <div className="process section">
      <div className="container">
        <h2>Votre Nouvelle Installation Solaire en 5&nbsp;Étapes</h2>
        <div className="main-box flex-column g-50">
          {processData.map((item, index) => {
            return (
              <div className="box flex-center " key={index}>
                <img
                  className="step-icon"
                  src={"/assets/icons/" + item.iconSrc}
                  alt=""
                  loading="lazy"
                  width={170}
                  // height={150}
                />
                <div className="process-box flex-column g-15">
                  <span className="step">{item.step}</span>
                  <span className="title">{item.title}</span>
                  <p>
                    {item.paragraph}
                    <span className="key-text"> {item.keyText}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* <img src="/assets/output-onlinegiftools.gif" /> */}
      </div>
    </div>
  );
}
