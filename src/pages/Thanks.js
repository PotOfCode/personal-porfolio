import React from 'react';
import { Link } from 'react-router-dom';
import gmail_icon from "../assets/icons/gmail-icon.svg";
import telegram_icon from "../assets/icons/telegram-icon.svg";
import github_icon from "../assets/icons/github-icon.svg";
import linkedin_icon from "../assets/icons/linkedin-icon.svg";
import logo_icon from "../assets/icons/logo.svg";

export default function Thanks() {

  return (
    <div class="flex flex-col bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
      <header>
        <nav
          class="bg-gradient-to-r from-slate-900 via-gray-800 to-sky-950 h-20 border-b-8 border-b-slate-950 flex flex-row-reverse"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div class="flex flex-row items-center justify-center">
            <Link
              to="/Contact"
            >
              <img
                src={gmail_icon}
                alt="Contacto"
                title="Contacto"
                class="size-6 sm:size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
              />
            </Link>
            <a
              href="https://www.linkedin.com/in/miguel-pérez0802"
              target="_blank"
              rel="noopener"
            >
              <img
                src={linkedin_icon}
                alt="Linkedin"
                title="Linkedin"
                class="size-6 sm:size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
              />
            </a>
            <a
              href="https://t.me/PotOfCode"
              target="_blank"
              rel="noopener"
            >
              <img
                src={telegram_icon}
                alt="Telegram"
                title="Telegram"
                class="size-6 sm:size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
              />
            </a>
            <a
              href="https://github.com/PotOfCode"
              target="_blank"
              rel="noopener"
            >
              <img
                src={github_icon}
                alt="Github"
                title="Github"
                class="size-6 sm:size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
              />
            </a>
            <img
              src={logo_icon}
              alt="Logo"
              class="w-8 absolute left-2 mr-5"
            />
          </div>
          <p class="font-bold font-serif text-2xl absolute top-5 left-4 text-white pl-8">
            PotOfCode
          </p>
        </nav>
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
        <p class="text-xs w-full h-full relative flex flex-row justify-evenly">
          © 2025 PotOfCode
        </p>
      </footer>
    </div>
  );
}
