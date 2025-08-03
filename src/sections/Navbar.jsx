import { useState } from 'react';
import { motion } from 'framer-motion';

function Navigation() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center text-neutral-300 ">
      <li>
        <a
          className="hover:text-white transition-colors"
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors"
          href="#about"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          About
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors"
          href="#work"
          onClick={(e) => handleNavClick(e, 'work')}
        >
          Work
        </a>
      </li>
      <li>
        <a
          className="hover:text-white transition-colors"
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" w-full backdrop-blur-lg bg-primary/40 rounded-b-2xl shadow-md ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 hover:text-white hidden sm:block"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ARYAN
          </a>

          <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-neutral-400 hover:text-white focus:outline-none hidden sm:block"
        >
          <img
            src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
            className="w-6 h-6"
            alt="menu"
          />
        </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden bg-primary/90 rounded-b-2xl px-4 py-4 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Navigation />
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
