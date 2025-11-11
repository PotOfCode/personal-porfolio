import React from 'react';
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { YugiApi } from "../components/YugiApi.js";
import { useLocation } from "react-router-dom";

export default function AlbumCards() {
  
  const { state } = useLocation();

  if (!state?.apiURL) {
    return <p className="p-4 text-red-500">No se proporcionó la URL de la API.</p>;
  }

  
  return (
    <div class="flex flex-col bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
      <header>
        <Navbar />
      </header>

      <main class="mt-8 mb-8 mx-8 sm:mx-16 md:mx-22 flex-grow">
        <h1 class="text-white text-3xl font-bold mb-4 text-center">Album de Colección</h1>
        <YugiApi URLAPI={state.apiURL}/>
      </main>
      <footer class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <Footer />
      </footer>
    </div>
  );
}
