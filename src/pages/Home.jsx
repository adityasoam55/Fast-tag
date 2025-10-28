import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQ from "../components/sections/FAQ";
import AboutUs from "../components/sections/AboutUs";
import FastagBanner from "../components/sections/FastagBanner";
import HeroSection from "../components/sections/HeroSection";
import HeroBanner from "../components/sections/HeroBanner";
import ProvidersSection from "../components/sections/ProvidersSection";

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
