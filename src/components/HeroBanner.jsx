import React from "react";

const HeroBanner = () => {
  return (
    <section className="w-full bg-teal-700 text-white py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Save More on Every{" "}
            <span className="text-yellow-300">FASTag Recharge</span>🚗
          </h2>
          <p className="text-lg text-teal-100 max-w-md">
            Get up to{" "}
            <span className="text-yellow-300 font-semibold">₹100 cashback</span>
            when you recharge using UPI or credit card.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-teal-900 font-semibold px-6 py-3 rounded-lg transition duration-300">
            Recharge Now
          </button>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1">
          <img
            src="/FASTag-hero.png"
            alt="FASTag Offer Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
