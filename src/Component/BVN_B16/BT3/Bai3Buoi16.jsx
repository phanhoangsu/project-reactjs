import React, { useContext } from "react";
import { LanguageCtx } from "./LanguageContext.jsx";
import Home from "./Home.jsx";

const Bai3Buoi16 = () => {
  const { language, toggleLanguage } = useContext(LanguageCtx);
  return (
    <div>
      <h1>{language}</h1>
      <button onClick={toggleLanguage}>Change Language</button>
      <Home />
    </div>
  );
};

export default Bai3Buoi16;
