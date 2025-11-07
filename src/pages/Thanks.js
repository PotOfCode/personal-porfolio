import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";

export default function Thanks() {

  return (
    <div class="flex flex-col bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
      <header>
        <Navbar />
      </header>

      <main class="mx-8 sm:mx-16 md:mx-22 flex-grow">
        <section class="flex justify-center items-center">
          <div class="w-full max-w-2xl bg-gradient-to-b from-slate-800 via-gray-800 to-slate-900 rounded-lg shadow-lg p-8 mt-12 mb-12 border border-gray-700">
            <div class="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#2ec27e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-mail-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" /><path d="M3 7l9 6l9 -6" /><path d="M15 19l2 2l4 -4" /></svg>
            </div>
            <h2 class="text-3xl font-bold mb-6 text-white text-center">¡Gracias por contactarme!</h2>
            <p class="text-lg text-gray-300 mb-4 text-center">
              He recibido tu mensaje y me pondré en contacto contigo lo antes posible.
            </p>
            <div class="flex justify-center space-x-4">
              <Link
                to="/"
                class="bg-[#00BD13] hover:bg-[#00810D] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
              >
                Página Principal
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <Footer />
      </footer>
    </div>
  );
}
