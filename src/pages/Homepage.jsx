import React from "react";
import Navbar from "../component/Navbar";
import Section1st from "../component/Section1st";
import Section2nd from "../component/Section2nd";
import Section3rd from "../component/Section3rd";
import Footer from "../component/Footer";
import { useState } from "react";

function Homepage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && (
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-opacity-50 bg-Primary-DarkBlue"></div>
      )}
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Section1st />
      <Section2nd />
      <Section3rd />
      <Footer />
    </div>
  );
}

export default Homepage;
