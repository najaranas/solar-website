import React, { useEffect, useRef, useState } from "react";
import "./Reviews.css";

const reviewData = [
  {
    paragraph: `J’ai eu l’occasion de travailler avec la Trabelsi Service à plusieurs reprises et je ne suis que satisfait par le service, la réactivité et le professionnaliTrabelsi Service du personnel. Le service après vente est à la hauteur de leurs valeurs.`,
    userImgSrt:
      "https://th.bing.com/th/id/R.6101b0b6938679c65a8e46e1d8730c18?rik=9hyJCvYZ9DnPbw&pid=ImgRaw&r=0",
    userName: "Achraf J",
  },
  {
    paragraph: `Ils m’ont installé les panneaux depuis 5 ans chez moi. On les a consultés de nouveau pour une extension et le service était agréable comme la première fois. J’apprécie bien le travail sérieux d’une équipe jeune.`,
    userImgSrt: "/assets/user-2.jpg",
    userName: "Makrem E",
  },
  {
    paragraph: `Je recommande vivement la société Trabelsi Service, Je tiens à souligner que mon expérience a été extrêmement positive à tous égards.`,
    userImgSrt: "/assets/user-2.jpg",
    userName: "Nabil M",
  },
];

export default function Reviews() {
  const leftBtnRef = useRef();
  const rightBtnRef = useRef();
  const mainCardsRef = useRef();
  const cardsRef = useRef();
  const [scrollData, setScrollData] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleEvent = (direction) => {
    if (
      (scrollData === 0 && direction === "left") ||
      (scrollData ===
        (cardsRef.current.offsetWidth + 50) *
          -(mainCardsRef.current.children.length - 1) &&
        direction === "right")
    ) {
      return;
    }

    setScrollData((prevData) => {
      return direction === "left"
        ? prevData + cardsRef.current.offsetWidth + 50
        : prevData - cardsRef.current.offsetWidth - 50;
    });
  };

  useEffect(() => {
    if (mainCardsRef.current) {
      mainCardsRef.current.style.transform = `translateX(${scrollData}px)`;
    }

    if (scrollData === 0) {
      leftBtnRef.current.classList.add("not-active");
    } else {
      leftBtnRef.current.classList.remove("not-active");
    }

    if (
      scrollData ===
      (cardsRef.current.offsetWidth + 50) *
        -(mainCardsRef.current.children.length - 1)
    ) {
      rightBtnRef.current.classList.add("not-active");
    } else {
      rightBtnRef.current.classList.remove("not-active");
    }
  }, [scrollData]);

  return (
    <div className="vid-section">
      {videoLoaded && (
        <video autoPlay muted loop>
          <source src="/Videos/vid-test.mp4" />
        </video>
      )}
      <video
        autoPlay
        muted
        loop
        style={{ display: "none" }}
        onLoadedData={() => {
          setVideoLoaded(true);
        }}>
        <source src="/Videos/vid-test.mp4" />
      </video>
      <div className="review">
        <h3>Expériences de succès de nos clients</h3>
        <div className="scroll-data">
          <div className="main-cards flex-center g-50" ref={mainCardsRef}>
            {reviewData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card flex-column g-20"
                  ref={index === 0 ? cardsRef : null}>
                  <p>{item.paragraph}</p>
                  <div className="bottom-card flex-center g-10 ">
                    <img
                      width="80"
                      height="80"
                      src={item.userImgSrt}
                      className="user-img"
                      alt=""
                      loading="lazy"
                    />
                    <span className="user-name">{item.userName}</span>
                    <span className="seperater">|</span>

                    <div className="start flex-center g-5">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="buttons-container flex-end">
          <div className="buttons flex-center g-10">
            <i
              className="fa-solid fa-angle-left flex-center-center"
              ref={leftBtnRef}
              onClick={() => handleEvent("left")}
            />
            <i
              className="fa-solid fa-angle-right flex-center-center"
              ref={rightBtnRef}
              onClick={() => handleEvent("right")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
