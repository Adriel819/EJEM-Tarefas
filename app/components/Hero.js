"use client";
import { useState, useEffect } from "react";

export default function Hero() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
  setTimeout(() => setVisivel(true), 100);
}, []);
  return (
    <section className="relative h-screen flex items-center justify-center bg-stone-900 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('https://www.saboravida.com.br/wp-content/uploads/2021/04/pecorino-bar-trattoria-chega-ao-morumbi-town-shopping-em-sao-paulo.jpg')",
        }}
      />
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <p className="text-amber-400 uppercase tracking-widest text-sm mb-4">
          Bar & Trattoria — Morumbi Town
        </p>
        <h1 className="text-white text-6xl font-bold mb-6 leading-tight">
          Pecorino
        </h1>
        <p className="text-stone-300 text-lg max-w-xl mx-auto mb-10">
          O melhor da cozinha italiana tradicional, com ingredientes de primeira
          qualidade, na sua maioria importados diretamente da Itália.
        </p>
        
          <a href="#cardapio"
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm transition-colors duration-300"
        >
          Ver Cardápio
        </a>
      </div>
    </section>
  );
}