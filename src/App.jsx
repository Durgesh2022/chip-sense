import React from "react";
import Carousel from "./Carousel";
import Aboutus from "./Aboutus";
import Navbar from "./navbar";

 import "./App.css";
import Footer from "./footer";
import Mission from "./missin";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Carousel />
      <Aboutus />
      <Mission />
      
      <Footer />
    </div>
  );
}

export default App;
