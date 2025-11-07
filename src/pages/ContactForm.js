import React from 'react';
import { Navbar } from "../components/Navbar.js";
import { FormSubmit } from "../components/FormSubmit.js";
import { Footer } from "../components/Footer.js";

export default function ContactForm() {

  return (
    <div class="flex flex-col bg-gradient-to-b from-slate-900 via-cyan-950 to-gray-900 min-h-screen min-w-full App">
      <header>
        <Navbar />
      </header>

      <main class="mx-8 sm:mx-16 md:mx-22 flex-grow">
        <FormSubmit />
      </main>
      <footer class="text-white bg-gradient-to-l from-slate-900 to-gray-800 py-2 border-t border-gray pl-4 pr-4 z-50">
        <Footer />
      </footer>
    </div>
  );
}
