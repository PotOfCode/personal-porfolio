import gmail_icon from "./assets/icons/gmail-icon.svg";
import telegram_icon from "./assets/icons/telegram-icon.svg";
import github_icon from "./assets/icons/github-icon.svg";
import linkedin_icon from "./assets/icons/linkedin-icon.svg";
import logo_icon from "./assets/icons/logo.svg";
import profile from "./assets/img/bitron.webp";
import proyects_icon from "./assets/icons/proyects.svg";
import carfix from "./assets/img/carfix.jpg";
import gestor from "./assets/img/gestorAI.jpg";
import text from "./assets/img/texanalizer.jpg";
import about_me from "./assets/icons/about-me.svg";
import photo from "./assets/img/photo.webp";

function App() {
  return (
    <div class="App">
      <header>
        <nav
          class="bg-gradient-to-r from-slate-900 via-gray-800 to-sky-950 h-20 border-b-8 border-b-slate-950 flex flex-row-reverse"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div class="flex flex-row items-center justify-center">
            <a
              href="https://www.linkedin.com/in/miguel-pérez0802"
              target="_blank"
              rel="noopener"
            >
              <img
                src={linkedin_icon}
                alt="Linkedin"
                title="Linkedin"
                class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </a>
            <a
              href="mailto:miguelperezrs28@gmail.com"
              target="_blank"
              rel="noopener"
            >
              <img
                src={gmail_icon}
                alt="Gmail"
                title="Gmail"
                class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500"
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
                class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500"
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
                class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </a>
            <img
              src={logo_icon}
              alt="Logo"
              class="w-8 absolute left-3 top-2.5 mt-3.5 mr-5"
            />
          </div>
          <p class="font-bold font-serif text-2xl absolute top-0 left-4 text-white pt-6 pl-8">
            PotOfCode
          </p>
          <p class="text-white font-bold font-sans pt-7 pr-4">Contacto</p>
        </nav>
      </header>

      <main class="bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen p-8">
        <section class="flex flex-col items-center min-h-96 mb-24">
          <h1 class="font-bold text-[#FFE9AE] text-4xl pb-4">Portfolio</h1>
          <img
            src={profile}
            alt="Perfil"
            class="object-cover rounded-full size-40"
          />
          <h2 class="font-bold text-[#FFE9AE] text-4xl mt-4">
            Saludos, soy PotOfCode
          </h2>
          <p class="text-white p-2 w-1/2 text-left mt-4 font-semibold text-xl">
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
                  class="w-12 pr-4"
                />
                <h3 class="font-bold text-white text-4xl">
                  Proyectos
                </h3>
            </div> 
          </div> 
          <article class="grid grid-cols-2 gap-8 px-32">
            <div class="bg-zinc-900/50 border-black/20 border-2 rounded-lg h-[410px]">
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
                    <img src={github_icon} alt="Github" class="size-10 hover:scale-125 duration-200" />
                  </a>
                  <h4 class="ml-4 text-[#00BD13] text-center text-2xl font-bold">CarFix - E-commerce</h4>
                </div>
            <p class="pt-4 px-4 text-white text-lg text-left font-semibold">Plataforma de venta de repuestos de vehículos de la organización Bufferring. <strong class="text-[#00BD13] font-semibold">Líder del equipo de Frontend</strong> durante su desarrollo.
            </p>
            </div>
            <div class="bg-zinc-900/50 border-black/20 border-2 rounded-lg px-4 h-[410px]">
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
                    <img src={github_icon} alt="Github" class="size-12 hover:scale-125 duration-200" />
                  </a>
                  <h4 class="ml-4 text-[#00BD13] text-left text-xl font-bold">AI Financial Advisor - Gestor de Finanzas</h4>
                </div>
            <p class="pt-4 px-4 text-white text-lg text-left font-semibold">App web que gestiona datos como ingresos o deudas, que incluye un <strong class="text-[#00BD13] font-semibold">ChatBot AI</strong>.
            </p>
            </div>
            <div class="bg-zinc-900/50 border-black/20 border-2 col-span-2 rounded-lg flex flex-row h-[300px]">
              <a 
              href="https://text-analyzer-hpij.onrender.com/"
              target="_blank"
              rel="noopener"
              >
                <img 
                src={text} 
                alt="Carfix" 
                class="ml-4 mt-8 w-[600px] brightness-100 hover:brightness-50 hover:scale-105 duration-300 border-2 border-white/50 shadow-2xl"
                />
              </a>
                <div class="flex flex-col mt-8 ml-12">
                  <div class="flex flex-row items-center">
                    <a 
                  href="https://github.com/PotOfCode/text_analyzer"
                  target="_blank"
                  rel="noopener"
                  >
                      <img src={github_icon} alt="Github" class="size-10 hover:scale-125 duration-200" />
                    </a>
                    <h4 class="ml-4 text-[#00BD13] text-left text-xl font-bold">Analizador de Texto</h4>
                  </div>
                  <p class="pt-4 mr-4 px-4 text-white text-lg text-left font-semibold">Aplicación web segura que permite <strong class="text-[#00BD13] font-semibold">analizar archivos de texto</strong> con estadísticas detalladas.</p>
                </div>
            </div>
          </article>
        </aside>
        <aside>
          <div class="flex flex-col items-center justify-left text-center mt-40">
            <div class="flex flex-row items-center justify-left">
              <img src={about_me} alt="Sobre mi" class="w-16 pr-4" />
              <h5 class="font-bold text-white text-4xl">Acerca de mi</h5>
            </div>
          </div>
          <div class="mt-16">
            <div class="flex flex-row ml-48 w-5/6 h-96 gap-x-36">
              <p class="text-white text-left text-xl font-bold w-1/2">
                Me llamo Miguel Pérez, un estudiante de ingeniería en Sistemas.
                Programando aún sin saber que lo estaba haciendo, aprendiendo
                de prueba y error y descubriendo lo interesante de este mundo.
              <p>Empezando con proyectos de mayor relevancia, pero siempre
                apuntando a mejorar y llegar a dominar por completo el
                desarrollo web.</p>
              </p>
              <img
                src={photo}
                alt="Foto"
                class="h-64 border-4 border-[#253D52] rounded-lg"
              />
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
}

export default App;
