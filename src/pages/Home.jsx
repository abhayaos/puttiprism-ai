// src/pages/Gender.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Gender() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">

        {/* Logo / Title */}
        <h1 className="text-5xl font-extrabold tracking-tight text-black mb-3">
          Putti<span className="text-red-600">Prism</span>
        </h1>

        <p className="text-gray-500 text-sm mb-10">
          Select gender to continue
        </p>

        {/* Buttons */}
        <div className="space-y-4">

          <button
            onClick={() => navigate("/roast/male")}
            className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-gray-100 border border-gray-300 hover:border-red-600 hover:bg-gray-200 transition-all duration-200 group"
          >
            <span className="text-lg font-medium text-black">Male</span>
            <span className="text-2xl group-hover:scale-110 transition">
              ♂️
            </span>
          </button>

          <button
            onClick={() => navigate("/roast/female")}
            className="w-full flex items-center justify-between px-6 py-4 rounded-xl bg-gray-100 border border-gray-300 hover:border-red-600 hover:bg-gray-200 transition-all duration-200 group"
          >
            <span className="text-lg font-medium text-black">Female</span>
            <span className="text-2xl group-hover:scale-110 transition">
              ♀️
            </span>
          </button>

        </div>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-12">
          Kathmandu, Nepal
        </p>

      </div>
    </div>
  );
}