import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ImgContextProvider } from "./context/img-popup";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector(".page"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ImgContextProvider>
        <App />
      </ImgContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
