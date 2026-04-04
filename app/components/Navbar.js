"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-stone-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-white font-bold text-xl tracking-widest uppercase">
          Pecorino
        </span>
        <div className="flex gap-8">
          <a href="#cardapio" className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Cardápio
          </a>
          <a href="#localizacao" className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Localização
          </a>
          <a href="#contato" className="text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider">
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}