import gmail_icon from './assets/icons/gmail-icon.svg';
import telegram_icon from './assets/icons/telegram-icon.svg';
import github_icon from './assets/icons/github-icon.svg';
import linkedin_icon from './assets/icons/linkedin-icon.svg';
import logo_icon from './assets/icons/logo.svg';
import link from './assets/icons/link.svg';
import proyects_icon from './assets/icons/proyects.svg';
import proyect_1 from './assets/img/proyect-1.webp';
import proyect_2 from './assets/img/proyect-2.webp';
import proyect_3 from './assets/img/proyect-3.webp';
import about_me from './assets/icons/about-me.svg';
import photo from './assets/img/photo.webp';

function App() {
  const githubUsername = "PotOfCode";
  return (
    <div class="App">
      <header>
        <nav 
          class="bg-gradient-to-r from-slate-900 via-gray-800 to-sky-950 h-20 border-b-8 border-b-slate-950 flex flex-row-reverse "
          role="navigation"
          aria-label="Navegación principal"
        >
          <div class="flex flex-row items-center justify-center">
            <a href="https://www.linkedin.com/in/miguel-pérez0802" target= "_blank" rel="noopener noreferrer">
            <img 
              src={linkedin_icon} 
              alt="Linkedin" 
              title="Linkedin" 
              class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500" 
            />
            </a>
            <a href="mailto:miguelperezrs28@gmail.com" target= "_blank" rel="noopener noreferrer">
            <img 
              src={gmail_icon} 
              alt="Gmail" 
              title="Gmail" 
              class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500" 
            />
            </a>
            <a href="https://t.me/PotOfCode" target= "_blank" rel="noopener noreferrer">
            <img 
              src={telegram_icon} 
              alt="Telegram" 
              title="Telegram" 
              class="size-8 mt-3 mr-5 grayscale hover:grayscale-0 transition-all duration-500" 
            />
            </a>
            <a href="https://github.com/PotOfCode" target= "_blank" rel="noopener noreferrer">
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
          <h2 class="font-bold font-serif text-2xl absolute top-0 left-4 text-white pt-6 pl-8">
            PotOfCode
          </h2>
          <p class="text-white font-bold font-sans pt-7 pr-4">
          Contacto
          </p>
        </nav>
      </header>
      
      <main class="bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen p-8">
        <section>
          <div class="flex flex-col items-center justify-left min-h-96">
            <img
              src={`https://github.com/${githubUsername}.png`}
              alt="Perfil" 
              class="object-cover rounded-full size-40"
            />
            <h1 class="font-bold text-[#FFE9AE] pl-4 text-4xl mt-4">
              Saludos, soy PotOfCode
            </h1> 
            <p class="text-white p-2 w-1/2 text-justify mt-4 font-semibold text-xl">
              Estudiante de Ingeniería de Sistemas y desarrollador web. Apasionado por el aprendizaje continuo y la creación de experiencias digitales.
            </p>
          </div> 
        </section>
        <section>
          <div class="flex flex-col items-center justify-left text-center mt-40">
            <div class="flex flex-row items-center justify-left">
                <img 
                  src={proyects_icon} 
                  alt="Proyectos"
                  class="w-12 pr-4"
                />
                <h2 class="font-bold text-white text-4xl">
                  Proyectos
                </h2>
            </div> 
          </div> 
          <div class="flex flex-row mt-16 ms-40">
                <img 
                  src={proyect_1} 
                  alt="AI Financial"
                  class="bg-gradient-to-bl from-blue-950 via-slate-900 via-70% to-rose-950 rounded-lg object-cover border-2 border-gray-700 pt-4 pl-4 w-96 h-48 hover:scale-90 duration-300"
                />
                <div class="ml-4 w-80">
                  <p class="text-2xl text-white text-justify font-bold font-sans">
                    AI Financial Advisor - Gestor de Finanzas
                  </p>
                  <p class="text-white text-base text-justify font-mono">
                    App web para ingresar tus datos como ingresos o deudas, que incluye un chatBot AI.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://github.com/PotOfCode/AI-financial-advisor" target= "_blank" rel="noopener noreferrer">
                      Code
                      <img 
                      src={github_icon} 
                      alt="Github" 
                      class="w-8 ml-0.5"
                      />
                      </a>
                    </span>
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://ai-financial-advisor-zniz.onrender.com/registro" target= "_blank" rel="noopener noreferrer">
                      Preview
                    <img 
                      src={link} 
                      alt="Link" 
                      class="size-8 ml-2.5"
                    />
                      </a>
                    </span>
                  </div>
                </div>
          </div>
          <div class="flex flex-row mt-12 ms-40">
                <img 
                  src={proyect_2} 
                  alt="Carfix"
                  class="bg-gradient-to-bl from-blue-950 via-slate-900 via-70% to-rose-950 rounded-lg object-cover border-2 border-gray-700 pt-4 pl-4 w-96 h-48 hover:scale-90 duration-300"
                />
                <div class="ml-4 w-80">
                  <p class="text-2xl text-white text-justify font-bold font-sans">
                    CarFix - Frontend Leader
                  </p>
                  <p class="text-white text-base text-justify font-mono">
                    Plataforma de venta de repuestos de vehículos. Líder del equipo de Frontend durante su desarrollo.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://github.com/bufferring/carfix-mono" target= "_blank" rel="noopener noreferrer">
                      Code
                      <img 
                      src={github_icon} 
                      alt="Github" 
                      class="w-8 ml-0.5"
                      />
                      </a>
                    </span>
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://www.carfixve.app/" target= "_blank" rel="noopener noreferrer">
                      Preview
                    <img 
                      src={link} 
                      alt="Link" 
                      class="size-8 ml-2.5"
                    />
                      </a>
                    </span>
                  </div>
                </div>
          </div>
          <div class="flex flex-row mt-12 ms-40">
                <img 
                  src={proyect_3} 
                  alt="Analizador de Texto"
                  class="bg-gradient-to-bl from-blue-950 via-slate-900 via-70% to-rose-950 rounded-lg object-cover border-2 border-gray-700 pt-4 pl-4 w-96 h-48 hover:scale-90 duration-300"
                />
                <div class="ml-4 w-80">
                  <p class="text-2xl text-white text-justify font-bold font-sans">
                    Analizador de Texto
                  </p>
                  <p class="text-white text-base text-justify font-mono">
                    Aplicación web segura que permite analizar archivos de texto con estadísticas detalladas.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://github.com/PotOfCode/text_analyzer" target= "_blank" rel="noopener noreferrer">
                      Code
                      <img 
                      src={github_icon} 
                      alt="Github" 
                      class="w-8 ml-0.5"
                      />
                      </a>
                    </span>
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://text-analyzer-hpij.onrender.com/" target= "_blank" rel="noopener noreferrer">
                      Preview
                    <img 
                      src={link} 
                      alt="Link" 
                      class="size-8 ml-2.5"
                    />
                      </a>
                    </span>
                  </div>
                </div>
          </div>
          <div class="flex flex-row mt-12 ms-40">
                <div class="w-96 h-48 flex justify-center items-center bg-black rounded-lg border-2 border-gray-700 hover:scale-90 duration-300">
                    <img 
                      src={logo_icon} 
                      alt="Logo PotOfCode"
                      class="w-24"
                    />
                </div>
                <div class="ml-4 w-80">
                  <p class="text-2xl text-white text-justify font-bold font-sans">
                    Mi Pagina Web
                  </p>
                  <p class="text-white text-base text-justify font-mono">
                    Portafolio personal donde muestro mis proyectos.
                  </p>
                  <div class="flex flex-wrap gap-2 mt-3">
                    <span class="px-3 py-1 bg-slate-700 text-white text-sm font-mono rounded-xl border-2 border-white border-opacity-30 hover:scale-105 duration-300">
                      <a href="https://github.com/PotOfCode/personal-porfolio" target= "_blank" rel="noopener noreferrer">
                      Code
                      <img 
                      src={github_icon} 
                      alt="Github" 
                      class="w-8 ml-0.5"
                      />
                      </a>
                    </span>
                  </div>
                </div>
          </div>
        </section>
        <section>
          <div class="flex flex-col items-center justify-left text-center mt-40">
            <div class="flex flex-row items-center justify-left">
                <img 
                  src={about_me} 
                  alt="Sobre mi"
                  class="w-16 pr-4"
                />
                <h2 class="font-bold text-white text-4xl">
                  Acerca de mi
                </h2>
            </div> 
          </div> 
          <div class="mt-16">
            <div class="flex flex-row ml-48 w-5/6 h-96 gap-x-36">
                <p class="text-white text-justify text-xl font-bold w-1/2">Me llamo Miguel Pérez. soy un estudiante de ingeniería en Sistemas. Programando antes de siquiera saber que lo hacía, aprendiendo con prueba y error y descubriendo lo interesante de este mundo. Recién empezando con proyectos de mayor relevancia, pero siempre apuntando a mejorar y llegar a dominar por completo el desarrollo web.
                </p>
                <img 
                  src={photo} 
                  alt="Foto"
                  class="h-64 border-4 border-[#253D52] rounded-lg"
                />
            </div>
          </div>
        </section>
      </main>
      <div class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <div class="text-xs w-full h-full relative flex flex-row justify-evenly">
        © 2025 PotOfCode
        </div>
      </div>
    </div>
  );
}

export default App;
