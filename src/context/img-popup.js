import { createContext, useState } from "react";

const ImgContext = createContext(null);

function ImgContextProvider({ children }) {
  const [data, setData] = useState({ Imgsrc: "", status: "" });
  const changedata = (Imgsrc, status) => {
    setData({ Imgsrc: Imgsrc, status: status });
  };

  return (
    <ImgContext.Provider value={{ data, changedata }}>
      {children}
    </ImgContext.Provider>
  );
}
export { ImgContext, ImgContextProvider };
