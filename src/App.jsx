import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import FastagBanner from "./components/FastagBanner";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <FAQ />
      <FastagBanner />
      <Footer />
    </div>
  );
}

export default App;
