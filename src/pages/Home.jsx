// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PuttiPrism AI – Coming Soon | Private Part Color, Size & Shape Analyzer</title>
        <meta
          name="description"
          content="PuttiPrism is an upcoming private AI tool that analyzes intimate areas by color, size, shape, texture, and vibe with complete privacy. Get ready for judgment-free, accurate insights. Join the waitlist now."
        />
        <meta
          name="keywords"
          content="private AI analyzer, intimate area AI, genital color detection, body part size analysis, adult AI tool, privacy-focused AI, coming soon AI"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abhaya Bikram" />
        <link rel="canonical" href="https://yourdomain.com/" /> {/* ← replace with real domain */}

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="PuttiPrism AI – Coming Soon | See Every Shade & Curve" />
        <meta
          property="og:description"
          content="The future of private body analysis is arriving. AI-powered color, size, shape & vibe detection — 100% private & encrypted. Be the first to know."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" /> {/* add a real 1200×630 teaser image later */}
        <meta property="og:site_name" content="PuttiPrism AI" />

        {/* Twitter / X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PuttiPrism – AI for Every Shade, Curve & Secret" />
        <meta
          name="twitter:description"
          content="Coming soon: judgment-free AI analysis of intimate colors, sizes, shapes & more. Privacy first. Notify me when it launches!"
        />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" />

        {/* Basic viewport & charset (good practice) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-950 to-black text-white flex flex-col">

        {/* Hero / Coming Soon Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-5 py-2 bg-purple-600/30 backdrop-blur-sm rounded-full border border-purple-500/40 text-purple-300 text-sm md:text-base font-medium tracking-wider uppercase">
              Something Naughty is Loading...
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                PuttiPrism
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 text-gray-300 font-bold">
                Coming Soon
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Advanced AI coming soon: analyzes <strong>private body parts</strong> — color tones, exact size measurements, shape details, skin texture, and overall vibe — with total privacy and zero judgment.
            </p>

            {/* Email signup – keep this for conversions */}
            <div className="max-w-md mx-auto mb-16">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-purple-500/40 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 outline-none text-white placeholder-gray-400 transition"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-full font-bold text-lg shadow-lg shadow-purple-900/40 transform hover:scale-105 transition duration-300"
                >
                  Notify Me
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-3">
                Get early access notification – no spam, ever.
              </p>
            </div>

            {/* Features Teaser Grid – good for crawlable content */}
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="sr-only">
                PuttiPrism AI Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
                {[
                  {
                    title: "Precise Color Detection",
                    desc: "Detects every intimate shade — from soft pink to deep tones — with high accuracy.",
                    emoji: "🌈",
                  },
                  {
                    title: "Accurate Size Measurement",
                    desc: "Calculates length, girth, volume and proportions — real metrics, no estimates.",
                    emoji: "📏",
                  },
                  {
                    title: "Shape & Structure Analysis",
                    desc: "Identifies curves, symmetry, flare and unique contours in detail.",
                    emoji: "🧬",
                  },
                  {
                    title: "Skin Texture Scanner",
                    desc: "Recognizes smoothness, veins, bumps and other surface characteristics.",
                    emoji: "🔍",
                  },
                  {
                    title: "Vibe & Mood Insights",
                    desc: "Evaluates temperature, saturation and overall aesthetic feel.",
                    emoji: "🔥",
                  },
                  {
                    title: "Complete Privacy Guarantee",
                    desc: "End-to-end encryption — nothing stored, nothing shared.",
                    emoji: "🔒",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-pink-500/40 transition group"
                  >
                    <div className="text-4xl mb-4">{feature.emoji}</div>
                    <h3 className="text-xl font-bold mb-2 text-purple-300 group-hover:text-pink-400 transition">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-purple-900/30">
          <p>PuttiPrism AI © {new Date().getFullYear()} – Curiosity without judgment • Kathmandu, Nepal</p>
        </footer>
      </div>
    </>
  );
}