import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();
  const form = useRef();
  const [results, setResults] = useState(null);

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
    <div className="form-box">
      <form
        className="flex-between-center g-20"
        ref={form}
        onSubmit={sendEmail}>
        <div className="text flex-center g-20">
          <h3>Faites&nbsp;le premier pas</h3>
          <img
            className="icon"
            width={40}
            height={40}
            alt=""
            loading="lazy"
            src="/assets/icons/first-step.png"
          />
        </div>
        <input type="text" name="name" placeholder="Nom Complet*" required />
        <input type="text" name="phone" placeholder="N°Téléphone*" required />
        <input type="text" name="ref" placeholder="Référence STEG*" required />
        <input
          type="text"
          name="lieux"
          placeholder="Lieux des traveaux*"
          required
        />

        <input type="text" name="type" placeholder="Type de projet*" required />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
