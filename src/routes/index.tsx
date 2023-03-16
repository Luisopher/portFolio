import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "../Components/Contact";
import Luis from "../Components/Luis";
import About from "../Components/About";
import Work from "../Components/Work";
import Entrance from "../Entrance";
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/luis" element={<Luis />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
