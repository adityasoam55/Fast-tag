// src/components/sections/TopBanner.jsx
import React from "react";

export default function TopBanner({ balance = 0, onAddMoney }) {
  return (
    <div className="rounded-xl bg-cyan-100 p-4 mb-6 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* small toll icon */}
          <div className="bg-white/30 p-2 rounded-md">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              className="text-teal-800"
            >
              <path
                d="M3 12h18"
                stroke="#0f766e"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="text-lg font-semibold text-teal-900">
            FASTag Recharge & Get Exciting Offers on Every Recharge!
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded shadow-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              className="text-teal-700"
            >
              <rect
                x="2"
                y="5"
                width="20"
                height="14"
                rx="2"
                stroke="#0f766e"
                strokeWidth="1.2"
              />
            </svg>
            <span className="font-medium">₹{Number(balance).toFixed(2)}</span>
          </div>

          <button
            onClick={onAddMoney}
            className="bg-teal-700 text-white px-3 py-1 rounded-md"
          >
            Add Money
          </button>
        </div>
      </div>
    </div>
  );
}
