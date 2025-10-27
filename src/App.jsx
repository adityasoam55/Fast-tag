import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import AboutUs from "./components/AboutUs";
import FastagBanner from "./components/FastagBanner";
import HeroSection from "./components/HeroSection";
import HeroBanner from "./components/HeroBanner";
import ProvidersSection from "./components/ProvidersSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HeroBanner />
      <ProvidersSection />
      <AboutUs />
      <FAQ />
      <FastagBanner />
      <Footer />
    </div>
  );
}

export default App;
