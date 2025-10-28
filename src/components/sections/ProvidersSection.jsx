// src/components/sections/ProvidersSection.jsx
import React from "react";
import providers from "../../data/providers";

const ProvidersSection = () => {
  return (
    <section className="py-12 bg-linear-to-r from-teal-700 to-blue-700">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          FASTag Providers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id || provider.name}
              className="bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col items-center justify-center py-6 px-3 transition-all duration-300"
            >
              <img
                src={provider.logo}
                alt={provider.name}
                className="h-12 w-auto object-contain mb-3"
                loading="lazy"
              />
              <p className="text-gray-800 text-sm font-medium text-center">
                {provider.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvidersSection;
