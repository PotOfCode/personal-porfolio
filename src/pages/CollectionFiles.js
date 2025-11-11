import React from "react";
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
import { Link } from 'react-router-dom';
import archetypes from "../data/archetypes.json";

export default function CollectionFiles() {
  return (
    <div class="flex flex-col bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
      <header>
        <Navbar />
      </header>

      <main class="mt-8 mb-8 mx-8 sm:mx-16 md:mx-22 flex-grow">
        <h1 class="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
          Archivos de Coleccionista
        </h1>
        <div class="flex flex-col sm:grid grid-cols-3 gap-4 text-center items-center content-center">
          {archetypes.map((e) => (
            <Link
              key={e.label}
              to="/Album"             
              state={{ apiURL: e.apiURL }}
              class="flex flex-col items-center bg-gradient-to-b from-slate-800 via-cyan-900 to-gray-800 rounded-lg p-4 m-2 hover:scale-105 transform transition duration-300 border border-gray-700 shadow-lg w-48 lg:w-72"
            >
                <img
            src={e.cover}
            alt={e.label}
            className="h-44 sm:h-68 lg:h-72 mt-1 mx-auto mb-2"
                />  

              <span className="font-semibold text-lg text-white">{e.label}</span>
            </Link>
          ))}
        </div>
      </main>
      <footer class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <Footer />
      </footer>
    </div>
  );
}
