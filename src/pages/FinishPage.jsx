import React, { useEffect } from "react";
import "./FinishPage.css";
import { finishScreenData } from "../data/finishScreens";

export default function FinishPage({ screenType = "merci" }) {
  const { miniTitle, Title, icon, content } =
    finishScreenData[screenType] || finishScreenData.merci;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [miniTitle]);

  return (
    <div className="finish-page section first-section">
      <div className="container flex-column-center g-10">
        <div className=" flex-center g-5">
          {miniTitle === "Merci" ? (
            <h4 className="merci">{miniTitle}</h4>
          ) : (
            <h4>{miniTitle}</h4>
          )}
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <h3>{Title}</h3>
        {content}
      </div>
    </div>
  );
}
