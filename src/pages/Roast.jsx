// src/pages/Roast.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import roastsData from "../data/roasts.json";
import optionsData from "../data/options.json";

export default function Roast() {
  const { gender } = useParams();
  const navigate = useNavigate();

  const [rang, setRang] = useState("");
  const [size, setSize] = useState("");
  const [akarYaGahiro, setAkarYaGahiro] = useState("");
  const [roastMsg, setRoastMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const maleRoasts = roastsData.male || [];
  const femaleRoasts = roastsData.female || [];
  const rangOptions = optionsData.rang || [];
  const sizeOptions = optionsData.size || [];
  const akarMale = optionsData.akarMale || [];
  const gahiroFemale = optionsData.gahiroFemale || [];

  const roastGar = () => {
    setLoading(true);
    setRoastMsg("");

    setTimeout(() => {
      const roasts = gender === "male" ? maleRoasts : femaleRoasts;
      const template =
        roasts[Math.floor(Math.random() * roasts.length)];

      let msg = template
        .replace(/\${rang}/g, rang || "pheko")
        .replace(/\${size}/g, size || "unknown")
        .replace(/\${akar}/g, akarYaGahiro || "shape")
        .replace(/\${gahiro}/g, akarYaGahiro || "depth");

      setRoastMsg(msg);
      setLoading(false);
    }, 2000);
  };

  const akarOptions =
    gender === "male" ? akarMale : gahiroFemale;

  const baseBtn =
    "p-4 rounded-xl border transition-all duration-200 font-medium";

  const selectedStyle =
    "bg-red-600 text-white border-red-600 shadow-lg scale-105";

  const normalStyle =
    "bg-white text-black border-gray-300 hover:border-red-500 hover:bg-red-50";

  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">

      <button
        onClick={() => navigate("/")}
        className="text-gray-500 hover:text-black underline mb-10"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-black text-red-600 mb-12">
          Customize & Roast
        </h1>

        <div className="space-y-12">

          {/* Rang */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Rang</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {rangOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setRang(opt.value)}
                  className={`${baseBtn} ${
                    rang === opt.value ? selectedStyle : normalStyle
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">Size</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sizeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSize(opt.value)}
                  className={`${baseBtn} ${
                    size === opt.value ? selectedStyle : normalStyle
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Akar / Gahiro */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              {gender === "male" ? "Akar" : "Gahiro"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {akarOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAkarYaGahiro(opt.value)}
                  className={`${baseBtn} ${
                    akarYaGahiro === opt.value
                      ? selectedStyle
                      : normalStyle
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={roastGar}
          disabled={loading}
          className="mt-14 px-16 py-6 bg-red-600 hover:bg-red-500 text-white text-2xl font-black rounded-full transition-all disabled:opacity-50"
        >
          {loading ? "Loading..." : "Roast Gar 💀"}
        </button>

        {roastMsg && (
          <div className="mt-16 p-10 bg-gray-100 border border-red-400 rounded-3xl shadow-lg">
            <p className="text-xl text-black">{roastMsg}</p>
          </div>
        )}
      </div>
    </div>
  );
}