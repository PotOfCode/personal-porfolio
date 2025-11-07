import { Link, useLocation } from 'react-router-dom';
import gmail_icon from "../assets/icons/gmail-icon.svg";
import telegram_icon from "../assets/icons/telegram-icon.svg";
import github_icon from "../assets/icons/github-icon.svg";
import linkedin_icon from "../assets/icons/linkedin-icon.svg";
import logo_icon from "../assets/icons/logo.svg";
import home from "../assets/icons/home.svg";

export  function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isContactRoute = currentPath === '/Contact';

    const linkTo = isContactRoute ? '/' : '/Contact';
    const Icon = isContactRoute ? home : gmail_icon;
    const linkText = isContactRoute ? 'Volver a Home' : 'Contacto';
    
    return (
        <nav
          class="bg-gradient-to-r from-slate-900 via-gray-800 to-sky-950 h-20 border-b-8 border-b-slate-950 flex flex-row-reverse"
          role="navigation"
          aria-label="Navegación principal"
        >
          <div class="flex flex-row items-center justify-center">
            <Link
              to={linkTo}
            >
              <img
                src={Icon}
                alt={linkText}
                title={linkText}
                class="size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
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
                class="size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
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
                class="size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
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
                class="size-8 md:size-9 mr-4 invert brightness-50 hover:invert-0 hover:brightness-100 transition-all duration-500"
              />
            </a>
            <img
              src={logo_icon}
              alt="Logo"
              class="w-8 absolute left-2 mr-5"
            />
          </div>
          <p class="font-bold font-serif text-xl md:text-2xl absolute top-5 left-4 text-white pl-8">
            PotOfCode
          </p>
        </nav>
    );
}
