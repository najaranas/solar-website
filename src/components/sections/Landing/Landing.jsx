import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

export default function Landing({
  title,
  paragraph,
  imgSrc,
  children,
  firstSection,
}) {
  return (
    <div className={"landing" + (firstSection ? " first-section" : "")}>
      <div className="container flex-between-start g-20">
        <div className="content">
          {children ? children[0] : ""}
          <h1>{title}</h1>
          <p>{paragraph}</p>
          {children ? children[1] : ""}
          {children ? (
            children[2]
          ) : (
            <Link to={"/devis"}>
              <button className="primary-btn flex-center g-10">
                <span>Devis Gratuit</span>
                <i className="fa-solid fa-angle-right flex-center-center" />
              </button>
            </Link>
          )}
        </div>
        <img alt="" src={imgSrc} />
      </div>
    </div>
  );
}
