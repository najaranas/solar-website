import React, { useContext, useEffect } from "react";
import "./Project.css";
import { ImgContext } from "../context/img-popup";
import { Link, useLocation } from "react-router-dom";

export default function Projects({ data }) {
  const { changedata } = useContext(ImgContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  // Use internal constants
  const className = "projects section first-section projet-page";

  return (
    <div className={className}>
      <div className="container flex-column-center g-10">
        <h4>Nos Projets</h4>
        <h3>Du Soleil À L'Économie</h3>
        <div className="box-item flex-center g-30">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="project flex-center-center"
                onClick={(e) => {
                  changedata(
                    e.currentTarget.querySelector("img").getAttribute("src"),
                    "active"
                  );
                }}>
                <img src={item.ImgSrc} alt="" />
                <i className="fa-solid fa-plus flex-center-center"></i>
              </div>
            );
          })}
        </div>
        {location.pathname === "/" ? (
          <Link to={"/projets"}>
            <button className="primary-btn flex-center g-10">
              <span>Voir plus de projets</span>
              <i className="fa-solid fa-angle-right flex-center-center" />
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
