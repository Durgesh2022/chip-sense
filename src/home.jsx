import React from "react";
import Carousel from "./Carousel";
import Aboutus from "./Aboutus";
import ContactForm from "./contactUs";
import Mission from "./Mission";

import "./App.css";

function Home() {
  return (
    <div className="app">
     
      <main>
        <Carousel />
       
        <Aboutus />
        <Mission />
      </main>
      
    </div>
  );
}

export default Home;
