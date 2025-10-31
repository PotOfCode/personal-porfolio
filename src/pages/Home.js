import React from 'react';
import { Link } from 'react-router-dom';
import gmail_icon from "../assets/icons/gmail-icon.svg";
import telegram_icon from "../assets/icons/telegram-icon.svg";
import github_icon from "../assets/icons/github-icon.svg";
import linkedin_icon from "../assets/icons/linkedin-icon.svg";
import logo_icon from "../assets/icons/logo.svg";
import profile from "../assets/img/bitron.webp";
import proyects_icon from "../assets/icons/proyects.svg";
import carfix from "../assets/img/carfix.jpg";
import gestor from "../assets/img/gestorAI.jpg";
import text from "../assets/img/texanalizer.jpg";
import about_me from "../assets/icons/about-me.svg";
import photo from "../assets/img/photo.webp";

const Home = () => (
    <div class="bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
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

      <main class="mx-8 sm:mx-16 md:mx-22">
        <section class="flex flex-col items-center min- mb-24">
          <h1 class="font-bold text-[#FFE9AE] text-4xl pt-4 pb-4">Portfolio</h1>
          <img
            src={profile}
            alt="Perfil"
            class="object-cover rounded-full size-40"
          />
          <h2 class="font-bold text-center text-[#FFE9AE] text-4xl mt-4">
            Saludos, soy PotOfCode
          </h2>
          <p class="text-white text-center mx-4 sm:text-left sm:mx-8 md:mx-16 lg:mx-24 p-2 text-left mt-4 font-semibold text-xl">
            Estudiante de Ingeniería de Sistemas y desarrollador web. Apasionado
            por el aprendizaje continuo y la creación de experiencias digitales.
          </p>
        </section>
        <aside>
          <div class="flex flex-col items-center justify-left text-center">
            <div class="flex flex-row items-center justify-left pb-12">
                <img 
                  src={proyects_icon} 
                  alt="Proyectos"
                  class="size-16 pr-4"
                />
                <h3 class="font-bold text-white text-4xl">
                  Proyectos
                </h3>
            </div> 
          </div> 
          <article class="sm:grid grid-cols-2 grid-flow-row auto-cols-max gap-4">
            <div class="bg-zinc-900/50 border-black/20 border-2 rounded-lg mb-4 p-4">
              <a 
              href="https://www.carfixve.app/"
              target="_blank"
              rel="noopener"
              >
                <img 
                src={carfix} 
                alt="Carfix" 
                class="mx-auto mt-4 w-96 brightness-100 hover:brightness-50 hover:scale-105 duration-300 border-2 border-white/50 shadow-2xl"
                />
              </a>
                <div class="flex flex-row justify-center items-center mt-4">
                  <a 
                  href="https://github.com/bufferring/carfix-mono"
                  target="_blank"
                  rel="noopener"
                  >
                    <img src={github_icon} alt="Github" class="w-8 hover:scale-125 duration-200 mr-4" />
                  </a>
                  <h4 class="text-[#00BD13] text-center text-xl font-bold">CarFix - E-commerce</h4>
                </div>
            <p class="mt-4 mx-4 text-white text-lg text-left font-semibold">Plataforma de venta de repuestos de vehículos de la organización Bufferring. <strong class="text-[#00BD13] font-semibold">Líder del equipo de Frontend</strong> durante su desarrollo.
            </p>
            </div>
            <div class="bg-zinc-900/50 border-black/20 border-2 rounded-lg mb-4 p-4">
              <a 
              href="https://ai-financial-advisor-zniz.onrender.com/registro"
              target="_blank"
              rel="noopener"
              >
                <img 
                src={gestor} 
                alt="Carfix" 
                class="mx-auto mt-4 w-96 brightness-100 hover:brightness-50 hover:scale-105 duration-300 border-2 border-white/50 shadow-2xl"
                />
              </a>
                <div class="flex flex-row justify-center items-center mt-4 px-4">
                  <a 
                  href="https://github.com/PotOfCode/AI-financial-advisor"
                  target="_blank"
                  rel="noopener"
                  >
                    <img src={github_icon} alt="Github" class="w-8 hover:scale-125 duration-200 mr-4" />
                  </a>
                  <h4 class="text-[#00BD13] text-center text-lg font-bold">AI Financial Advisor - Gestor de Finanzas</h4>
                </div>
            <p class="pt-4 px-4 text-white text-lg text-left font-semibold">App web que gestiona datos como ingresos o deudas, que incluye un <strong class="text-[#00BD13] font-semibold">ChatBot AI</strong>.
            </p>
            </div>
            <div class="bg-zinc-900/50 border-black/20 border-2 sm:col-span-2 rounded-lg sm:flex sm:flex-row p-4">
              <a 
              href="https://text-analyzer-hpij.onrender.com/"
              target="_blank"
              rel="noopener"
              >
                <img 
                src={text} 
                alt="Carfix" 
                class="mx-auto mt-8 w-[600px] brightness-100 hover:brightness-50 hover:scale-105 duration-300 border-2 border-white/50 shadow-2xl"
                />
              </a>
                <div class="flex flex-col mt-8">
                  <div class="flex flex-row justify-center items-center">
                    <a 
                  href="https://github.com/PotOfCode/text_analyzer"
                  target="_blank"
                  rel="noopener"
                  >
                      <img src={github_icon} alt="Github" class="w-8 hover:scale-125 duration-200 mr-4" />
                    </a>
                    <h4 class="text-[#00BD13] text-center text-xl font-bold">Analizador de Texto</h4>
                  </div>
                  <p class="pt-4 mr-4 px-4 text-white text-lg text-left font-semibold">Aplicación web segura que permite <strong class="text-[#00BD13] font-semibold">analizar archivos de texto</strong> con estadísticas detalladas.</p>
                </div>
            </div>
          </article>
        </aside>
        <aside>
          <div class="flex flex-col items-center justify-center text-center mt-40">
            <div class="flex flex-row items-center justify-left">
              <img src={about_me} alt="Sobre mi" class="w-16 pr-4" />
              <h5 class="font-bold text-white text-4xl">Acerca de mi</h5>
            </div>
          </div>
          <div class="mt-16 lg:mx-40">
            <div class="sm:flex flex-row">
              <img
                src={photo}
                alt="Foto"
                class="float-left h-64 border-4 border-[#253D52] rounded-lg mr-4 mb-8"
              />
              <p class="text-white text-left text-lg sm:text-lg font-bold max-w-[600px] mb-8 mx-4">
                Me llamo Miguel Pérez, un estudiante de ingeniería en Sistemas.
                Programando aún sin saber que lo estaba haciendo, aprendiendo
                de prueba y error y descubriendo lo interesante de este mundo.
              <p>Empezando con proyectos de mayor relevancia, pero siempre
                apuntando a mejorar y llegar a dominar por completo el
                desarrollo web.</p>
              </p>
            </div>
          </div>
        </aside>
      </main>
      <footer class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <p class="text-xs w-full h-full relative flex flex-row justify-evenly">
          © 2025 PotOfCode
        </p>
      </footer>
    </div>
  );

export default Home;
