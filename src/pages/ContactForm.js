import React from 'react';
import { Link } from 'react-router-dom';
import home_icon from "../assets/icons/home.svg";
import telegram_icon from "../assets/icons/telegram-icon.svg";
import github_icon from "../assets/icons/github-icon.svg";
import linkedin_icon from "../assets/icons/linkedin-icon.svg";
import logo_icon from "../assets/icons/logo.svg";

const ContactForm = () => (
    <div class="flex flex-col bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
      <header>
        <nav
          class="bg-gradient-to-r from-slate-900 via-gray-800 to-sky-950 h-20 border-b-8 border-b-slate-950 flex flex-row-reverse"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div class="flex flex-row items-center justify-center">
            <Link
              to="/"
            >
              <img
                src={home_icon}
                alt="Home"
                title="Home"
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
        <section class="flex justify-center justify-items-center">
          <form action="https://formsubmit.co/potofcode8@gmail.com" method="POST" class="bg-gray-900/60 p-8 rounded-lg shadow-lg border border-gray-600 mt-4 mb-4"> 
            <p class="text-white font-bold text-xl">Nombre</p>
            <input
              type="text"
              name="Nombre"
              placeholder="Jose Andres Da-Silva"
              required
              class="block w-full sm:w-96 md:w-96 max-w-md p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p class="text-white font-bold text-xl">Correo Electronico</p>
            <input
              type="email"
              name="Correo Electronico"
              placeholder="josesilva@gmail.com"
              required
              class="block w-full max-w-md p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p class="text-white font-bold text-xl">Mensaje</p>
            <textarea 
              name="Mensaje" 
              required 
              title="Tu mensaje debe tener entre 20 y 500 caracteres." 
              maxlength="500" 
              minlength="20" 
              class="block w-full max-w-md h-96 p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-le resize-none"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
            <input type="hidden" name="_next" value="http://localhost:3000/Contact"/>
            <input type="hidden" name="_captcha" value="false"/>
            <button
              type="submit"
              class="block w-full max-w-md p-3 mb-4 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >Enviar</button>
          </form>
        </section>
      </main>
      <footer class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <p class="text-xs w-full h-full relative flex flex-row justify-evenly">
          © 2025 PotOfCode
        </p>
      </footer>
    </div>
  );

export default ContactForm;
