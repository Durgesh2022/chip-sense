import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ComingSoon from "./comingsoon";
import Navbar from "./Navbar";
import Footer from "./footer";
import ContactForm from "./contactUs";
import Home from "./Home";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/contact-us" element={<ContactForm />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
