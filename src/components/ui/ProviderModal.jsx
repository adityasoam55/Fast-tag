// src/components/ui/ProviderModal.jsx
import React from "react";

export default function ProviderModal({ open, provider, onClose, onSelect }) {
  if (!open || !provider) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="provider-modal-title"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-[92%] max-w-lg bg-white rounded-2xl shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-center gap-4">
          <img
            src={provider.logo}
            alt={provider.name}
            className="h-16 w-16 object-contain rounded-md"
            loading="lazy"
          />
          <div>
            <h3
              id="provider-modal-title"
              className="text-xl font-semibold text-gray-900"
            >
              {provider.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Fastag provider. (Demo info — you can customize this text per
              provider.)
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => {
              onSelect?.(provider);
            }}
            className="flex-1 bg-teal-700 text-white py-2 rounded-md font-medium"
          >
            Select & Recharge
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border bg-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
