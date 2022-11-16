import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";
import FullInfo from "./pages/FullInfo";

const App = () => {
  const [theme, settheme] = useState(false);

  return (
    <div className={`${theme ? "bg-dark" : "bg-light"}`}>
      <Navbar theme={theme} settheme={settheme} />
      <Routes>
        <Route path="/" element={<Countries theme={theme} />} />
        <Route path="/country/:name" element={<FullInfo theme={theme} />} />
      </Routes>
      <p style={{padding:'25px'}}>Made By Me With 💚 :)</p>
    </div>
  );
};

export default App;
