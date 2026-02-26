// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PuttiPrism AI – Coming Soon | Savage Roast Your Private Parts</title>
        <meta
          name="description"
          content="PuttiPrism is the upcoming savage AI that roasts your intimate areas with zero mercy. Color? Size? Shape? Texture? We'll diss every detail brutally and hilariously. Privacy guaranteed. Get roasted first — join the waitlist."
        />
        <meta
          name="keywords"
          content="savage roast AI, private parts roast, genital diss AI, funny roast your dick, roast vagina AI, brutal intimate analysis, adult roast tool, coming soon roast bot"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Abhaya Bikram" />
        <link rel="canonical" href="https://puttiprismai.vercel.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="PuttiPrism AI – Coming Soon | Get Roasted Down There" />
        <meta
          property="og:description"
          content="AI-powered savage roasts for your privates. Color too pale? Size disappointing? Shape weird? We'll tell you exactly how tragic it is — 100% private & encrypted. Join before we roast the world."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://puttiprismai.vercel.app/" />
        <meta property="og:image" content="https://puttiprismai.vercel.app/og-roast.jpg" /> {/* ← make a fiery/savage teaser image */}
        <meta property="og:site_name" content="PuttiPrism AI" />

        {/* Twitter / X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PuttiPrism – Savage Roasts for Your Secret Shame" />
        <meta
          name="twitter:description"
          content="Coming soon: the AI that brutally roasts your private parts. No filter, no mercy, just facts and burns. Privacy first. Get notified to get cooked!"
        />
        <meta name="twitter:image" content="https://puttiprismai.vercel.app/twitter-roast.jpg" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-red-950 via-purple-950 to-black text-white flex flex-col">

        {/* Hero / Coming Soon Section */}
        <main className="flex-1 flex items-center justify-center px-6 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-5 py-2 bg-red-600/30 backdrop-blur-sm rounded-full border border-red-500/40 text-red-300 text-sm md:text-base font-medium tracking-wider uppercase">
              Your Ego is About to Get Roasted...
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                PuttiPrism
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl mt-3 text-gray-300 font-bold">
                Coming Soon
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              The savage AI roast bot that's about to <strong>destroy</strong> your private parts with brutal honesty.<br />
              Too pink? Too small? Weird curve? Dry texture? We'll roast it harder than your ex ever could — zero filter, full savage mode.
            </p>

            {/* Email signup */}
            <div className="max-w-md mx-auto mb-16">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="your@email.com (so we can roast you first)"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-red-500/40 focus:border-red-500 focus:ring-2 focus:ring-red-500/30 outline-none text-white placeholder-gray-400 transition"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 rounded-full font-bold text-lg shadow-lg shadow-red-900/40 transform hover:scale-105 transition duration-300"
                >
                  Roast Me Later
                </button>
              </form>
              <p className="text-sm text-gray-400 mt-3">
                Get early access — because your bits deserve the smoke. No spam, just burns.
              </p>
            </div>

            {/* Features Teaser Grid – now savage/roast themed */}
            <section aria-labelledby="features-heading">
              <h2 id="features-heading" className="sr-only">
                PuttiPrism Savage Roast Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
                {[
                  {
                    title: "Brutal Color Roast",
                    desc: "From 'baby pink perfection' to 'looks like it lost a fight with a tomato' — we call it like we see it.",
                    emoji: "🔥",
                  },
                  {
                    title: "Size Annihilation",
                    desc: "Length? Girth? We'll measure and then mercilessly clown how it stacks up (spoiler: poorly).",
                    emoji: "📏💀",
                  },
                  {
                    title: "Shape Destruction",
                    desc: "Curved like a question mark? Flared like a mushroom? We'll roast the geometry until it cries.",
                    emoji: "🧬😭",
                  },
                  {
                    title: "Texture Takedown",
                    desc: "Veiny disaster? Bumpy tragedy? Smooth bore? Get read like the sad book you are.",
                    emoji: "🔍🗑️",
                  },
                  {
                    title: "Vibe Check Burn",
                    desc: "Temperature of despair? Saturation of regret? We'll rate your mood and roast it into oblivion.",
                    emoji: "🌡️🔥",
                  },
                  {
                    title: "Total Anonymity",
                    desc: "We roast hard but your identity stays hidden — end-to-end encrypted burns only.",
                    emoji: "🔒😈",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition group"
                  >
                    <div className="text-4xl mb-4">{feature.emoji}</div>
                    <h3 className="text-xl font-bold mb-2 text-red-300 group-hover:text-red-400 transition">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-red-900/30">
          <p>PuttiPrism AI © {new Date().getFullYear()} – We roast, you cry, privacy wins • Kathmandu, Nepal</p>
        </footer>
      </div>
    </>
  );
}