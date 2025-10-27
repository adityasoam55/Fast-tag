import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";
import FastagBanner from "./FastagBanner";
import HeroSection from "./HeroSection";
import HeroBanner from "./HeroBanner";
import ProvidersSection from "./ProvidersSection";

function Home() {
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

export default Home;
