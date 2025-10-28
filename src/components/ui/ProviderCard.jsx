// src/components/ui/ProviderCard.jsx
import React from "react";

export default function ProviderCard({ name, logo, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition"
    >
      <img
        src={logo}
        alt={name}
        className="h-10 w-10 object-contain"
        loading="lazy"
      />
      <div className="text-gray-800 font-medium">{name}</div>
    </button>
  );
}
