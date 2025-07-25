import React from "react";
import "./Faq.css";
const faqData = [
  {
    question:
      "Quels types de panneaux solaires sont les meilleurs pour les foyers à  Tunisie ?",
    response:
      "Les panneaux solaires monocristallins sont idéaux pour les foyers à  Tunisie en raison de leur haute efficacité et de leur longue durée de vie.",
  },
  {
    question:
      "Quelle est la durée de vie des panneaux solaires installés à  Tunisie ?",
    response:
      "Nos panneaux solaires ont une durée de vie de 25 ans ou plus, garantissant une production d'énergie fiable et durable.",
  },
  {
    question:
      "Quelles économies puis-je espérer réaliser avec l'énergie solaire?",
    response:
      "En moyenne, nos clients voient une réduction de 50% sur leurs factures d'électricité, ce qui signifie des économies importantes à long terme.",
  },
  {
    question: "Combien de temps dure l'installation des panneaux solaires?",
    response:
      "L'installation de panneaux solaires prend généralement 1 à 2 jours, minimisant les interruptions pour votre quotidien.",
  },
  {
    question:
      "L'installation de panneaux solaires nécessite-t-elle beaucoup de maintenance?",
    response:
      "Les panneaux solaires nécessitent très peu de maintenance, avec une simple inspection annuelle pour assurer leur performance optimale.",
  },
];
export default function Faq() {
  const handerEvent = (element) => {
    Array.from(element.parentElement.children).forEach((el) => {
      if (el !== element) {
        el.classList.remove("active");
      }
    });
    element.classList.toggle("active");
  };

  return (
    <div className="faq section">
      <div className="container flex-column-center g-5">
        <h4>Questions Populaires</h4>
        <h3>Obtenez les Réponses Que Vous Cherchez</h3>
        <div className={"faq-box flex-column  g-50"}>
          {faqData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={(e) => {
                  handerEvent(e.target);
                }}
                className={"faq-item fle-column g-20"}>
                <div className="top flex-between-start g-10">
                  <h3 className="question">{item.question}</h3>
                  <div className="plus-icon"></div>
                </div>
                <div className="response">
                  <p>{item.response}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
