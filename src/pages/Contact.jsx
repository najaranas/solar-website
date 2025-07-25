import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import { contactScreenData } from "../data/contactScreens";

export default function Contact({ screenType = "contact" }) {
  const navigate = useNavigate();
  const form = useRef();
  const [results, setResults] = useState(null);

  // Get the right data for the screen
  const { secTitle, mainTitle, parag, fields } =
    contactScreenData[screenType] || contactScreenData.contact;

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [secTitle]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9p6vpym",
        "template_e97gsqw",
        form.current,
        "3mMpa1jcYlBBAtSWe"
      )
      .then(
        () => {
          setResults("success");
        },
        (error) => {
          setResults("error");
        }
      );
  };

  useEffect(() => {
    if (results === "success") {
      navigate("/merci");
    }
  }, [results, navigate]);

  return (
    <div className="contact first-section">
      <div className="container section">
        <div className="row flex g-20">
          <div className="col c-1">
            <div className="contact-info">
              <div className="contact-info-title">
                <h3> Sfax, Tunisie</h3>
              </div>
              <div className="contact-info-box flex-column g-20">
                <div className="contact-info-item flex-center g-10">
                  <i className="fa-solid fa-envelope"></i>
                  <a
                    href="mailto:Zorguisolair@gmail.com"
                    className="email line-hover">
                    Zorguisolair@gmail.com
                  </a>
                </div>
                <div className="contact-info-item flex-center g-10">
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:96975772" className="phn-number line-hover">
                    (+216) 95 604 600
                  </a>
                </div>
                <div className="contact-info-item flex-center g-10">
                  <i className="fa-solid fa-location-dot"></i>
                  <span className="location"> Sfax</span>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1UeivhuVWusJ4X-aaVwZAFiaWuC6ApWk&ehbc=2E312F&noprof=1"
                // width="640"
                title="map"
                height="480"></iframe>
            </div>
          </div>
          <div className="col c-2">
            <div className="contact-us-form">
              <div className="section-title flex-column g-10">
                <h3>{secTitle}</h3>
                <h2>{mainTitle}</h2>
              </div>
              <p>{parag}</p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-form form flex-column g-20">
                {fields.map((field, index) => (
                  <div className="form-group" key={index}>
                    <label>
                      {field.label}
                      {field.required && "*"}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        className="form-control"
                        id={field.name}
                        rows={field.rows}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        className="form-control"
                        id={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                      />
                    )}
                  </div>
                ))}
                <div className="form-btn">
                  <div className="contact-form-btn">
                    <button type="submit" className="btn ">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="map"></div>
    </div>
  );
}
