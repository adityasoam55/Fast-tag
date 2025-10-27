import React from "react";

const providers = [
  { name: "HDFC Bank", logo: "/providers/hdfc.jpg" },
  { name: "ICICI Bank", logo: "/providers/icici.webp" },
  { name: "Axis Bank", logo: "/providers/axis.jpg" },
  { name: "IDFC FIRST Bank", logo: "/providers/idfc.jpg" },
  { name: "State Bank of India", logo: "/providers/sbi.jpg" },
  { name: "Kotak Mahindra Bank", logo: "/providers/kotak.jpg" },
  { name: "Bank of Baroda", logo: "/providers/bob.jpg" },
  { name: "IndusInd Bank", logo: "/providers/indusind.jpg" },
  { name: "Federal Bank", logo: "/providers/federal.jpg" },
  { name: "Paytm Payments Bank", logo: "/providers/paytm.jpg" },
  { name: "Indian Bank", logo: "/providers/indian.jpg" },
  { name: "Union Bank of India", logo: "/providers/union.png" },
];

const ProvidersSection = () => {
  return (
    <section className="w-full bg-linear-to-r from-teal-700 to-blue-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          FASTag Providers
        </h2>

        {/* Providers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white hover:bg-teal-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center py-6 px-3"
            >
              <img
                src={provider.logo}
                alt={provider.name}
                className="h-12 w-auto object-contain mb-3"
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
