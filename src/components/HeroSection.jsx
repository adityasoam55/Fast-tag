import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section className="w-full bg-linear-to-br from-slate-50 to-slate-100 pt-28 pb-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Recharge Your <span className="text-blue-600">FASTag</span> in
            Seconds
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Enjoy instant FASTag recharge, secure payments, and exciting offers
            — all in one easy platform.
          </p>

          <ul className="space-y-3 mt-6">
            <li className="pl-12 md:pl-0 flex items-center text-gray-700">
              <FiCheckCircle className="text-blue-600 mr-2" size={20} />
              Multiple Payment Options
            </li>
            <li className="pl-12 md:pl-0 flex items-center text-gray-700">
              <FiCheckCircle className="text-blue-600 mr-2" size={20} />
              Exclusive Discounts & Offers
            </li>
            <li className="pl-12 md:pl-0 flex items-center text-gray-700">
              <FiCheckCircle className="text-blue-600 mr-2" size={20} />
              24×7 Customer Support
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE - Recharge Card */}
        <div className="flex-1 w-full max-w-md bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="bg-teal-700 text-white text-lg font-semibold py-3 px-5 flex justify-between items-center">
            FASTag Recharge
            <span className="text-orange-400 font-bold">BharatConnect</span>
          </div>

          <div className="p-6 space-y-5">
            <input
              type="text"
              placeholder="Enter Vehicle Number"
              className="w-full border-2 border-blue-200 focus:border-blue-400 outline-none rounded-lg px-4 py-3 text-gray-700 transition-all duration-200"
            />

            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-lg transition duration-300">
              Proceed
            </button>

            <p className="text-sm text-gray-500 flex items-center justify-center md:justify-start gap-2">
              ⚡ Get the best deals on FASTag Recharge
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
