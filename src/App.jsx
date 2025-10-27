import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import AboutUs from "./components/Aboutus";

function App() {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
