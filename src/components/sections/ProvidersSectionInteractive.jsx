import React, { useState } from "react";
import providersData from "../../data/providers";
import ProviderModal from "../ui/ProviderModal";
import ProviderCard from "../ui/ProviderCard";

export default function ProvidersSectionInteractive() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = query
    ? providersData.filter((p) =>
        p.name.toLowerCase().includes(query.trim().toLowerCase())
      )
    : providersData;

  const openProvider = (p) => {
    setSelected(p);
    setModalOpen(true);
  };

  const handleSelectProvider = (p) => {
    setModalOpen(false);
    sessionStorage.setItem("selected_provider", p.id || p.name);
    // demo action (you can replace this with navigation or a recharge flow)
    alert(`${p.name} selected (demo)`);
  };

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <img src="/logo.png" className="mx-auto h-12 mb-3" alt="logo" />
        <h3 className="text-xl text-center font-semibold mb-4">
          Select your FasTag Providers
        </h3>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Providers..."
              className="w-full rounded-full border border-gray-200 px-6 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              🔎
            </span>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProviderCard
              key={p.id || p.name}
              name={p.name}
              logo={p.logo}
              onClick={() => openProvider(p)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No providers found.</p>
        )}
      </div>

      <ProviderModal
        open={modalOpen}
        provider={selected}
        onClose={() => setModalOpen(false)}
        onSelect={handleSelectProvider}
      />
    </section>
  );
}
