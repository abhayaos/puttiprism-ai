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
    }, 3000);
  };

  const akarOptions =
    gender === "male" ? akarMale : gahiroFemale;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      <button
        onClick={() => navigate("/")}
        className="text-gray-400 hover:text-white underline mb-10"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl font-black text-red-600 mb-12">
          Customize & Roast
        </h1>

        <div className="space-y-12">

          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Rang</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {rangOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setRang(opt.value)}
                  className="p-4 border border-neutral-700 rounded-xl hover:border-red-500"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">Size</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {sizeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setSize(opt.value)}
                  className="p-4 border border-neutral-700 rounded-xl hover:border-red-500"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              {gender === "male" ? "Akar" : "Gahiro"}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {akarOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAkarYaGahiro(opt.value)}
                  className="p-4 border border-neutral-700 rounded-xl hover:border-red-500"
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
          className="mt-14 px-16 py-6 bg-red-600 hover:bg-red-500 text-2xl font-black rounded-full transition-all"
        >
          {loading ? "Loading..." : "Roast Gar 💀"}
        </button>

        {roastMsg && (
          <div className="mt-16 p-10 bg-neutral-900 border border-red-700 rounded-3xl">
            <p className="text-xl">{roastMsg}</p>
          </div>
        )}
      </div>
    </div>
  );
}