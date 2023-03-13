import React from "react";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import OneItem from "./Components/Sections/OneItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./Pages/Work/Work";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:oneItem" element={<OneItem />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
