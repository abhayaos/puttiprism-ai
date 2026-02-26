// src/pages/Gender.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">

        {/* Logo / Title */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-3">
          Putti<span className="text-red-600">Prism</span>
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          Select gender to continue
        </p>

        {/* Buttons */}
        <div className="space-y-4">

          <button
            onClick={() => navigate("/roast/male")}
            className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-600 hover:bg-neutral-800 transition-all duration-200 group"
          >
            <span className="text-lg font-medium">Male</span>
            <span className="text-2xl group-hover:scale-110 transition">
              ♂️
            </span>
          </button>

          <button
            onClick={() => navigate("/roast/female")}
            className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-600 hover:bg-neutral-800 transition-all duration-200 group"
          >
            <span className="text-lg font-medium">Female</span>
            <span className="text-2xl group-hover:scale-110 transition">
              ♀️
            </span>
          </button>

        </div>

        {/* Footer */}
        <p className="text-xs text-gray-600 mt-12">
          Kathmandu, Nepal
        </p>

      </div>
    </div>
  );
}