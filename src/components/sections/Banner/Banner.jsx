import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

export default function Banner() {
  // const solarCompanies = [
  //   { name: "Pro Energy Solar", phone: "54942016" },
  //   { name: "Mahdi Energie Solaire", phone: "28212465" },
  //   { name: "Trabelsi Service Photovoltaique", phone: "99018612" },
  //   { name: "Photovoltaïque Tunisie", phone: "58701916" },
  //   { name: "Sun Sol Energie", phone: "29515165" },
  //   { name: "Société Groupe Royale SGR", phone: "23800689" },
  //   { name: "EURO SOLAR", phone: "96146081" },
  //   { name: "Top solaire sghaier", phone: "98452134" },
  //   { name: "BM SOLAR", phone: "58062646" },
  //   { name: "Solar Pro Cap-Bon", phone: "25465482" },
  //   { name: "the first energy", phone: "51521577" },
  //   { name: "Energie solaire b.h", phone: "98369724" },
  //   { name: "Essafi", phone: "54308735" },
  //   { name: "SDR PLUS photovoltaique", phone: "25935110" },
  //   { name: "STDS", phone: "28045273" },
  //   { name: "Jdidi Solaires Service", phone: "24543276" },
  // ];

  // const whatsappLinks = solarCompanies.map((company) => {
  //   return `https://wa.me/+216${company.phone}`;
  // });

  // whatsappLinks.forEach((link, index) => console.log(index + "   " + link));

  return (
    <div className="banner">
      <div className="container">
        <div className="content flex-column g-15">
          <h3>
            Votre Propriété de Rêve <br /> Vous Attend!
          </h3>

          <Link to={"/devis"}>
            <button className="primary-btn flex-center g-10">
              <span>Devis Gratuit</span>
              <i className="fa-solid fa-angle-right flex-center-center"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
