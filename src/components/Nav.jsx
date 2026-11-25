import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Quiénes somos', href: '#quienes-somos' },
    { name: 'Preguntas frecuentes', href: '#preguntas-frecuentes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  // Animación para el menú desplegable mobile
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm text-gray-700 sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">
        
        <a href="index.html" className="flex-shrink-0 flex items-center" onClick={closeMenu}>
          <img 
            src="logo-nav.png" 
            alt="Centro Médico Las Trinitarias" 
            className="h-14 md:h-16 w-auto object-contain" 
          />
        </a>

        <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-1 text-[15px] font-medium text-[#4A4A55] hover:text-[#6E3B96] transition-colors duration-200"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#6E3B96] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-3.5">
    
          {/* Botón principal Solicitar Turno */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contacto"
            className="bg-[#6E3B96] hover:bg-[#582E7A] text-white text-[15px] font-medium px-7 py-3 rounded-full shadow-[0_4px_14px_rgba(110,59,150,0.35)] transition-colors duration-200"
          >
            Solicitar Turno
          </motion.a>
        </div>

        {/* Botón Menú Hamburguesa (Mobile / Tablet) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="text-[#4A4A55] hover:text-[#6E3B96] focus:outline-none p-1 transition-colors"
          >
            {isOpen ? (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 pt-4 pb-6 space-y-4">
              <div className="flex flex-col space-y-3 items-end">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="group relative py-1 text-base text-[#4A4A55] hover:text-[#6E3B96] font-medium transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#6E3B96] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center space-x-3">
                <a
                  href="#contacto"
                  onClick={closeMenu}
                  className="w-full text-center bg-[#6E3B96] hover:bg-[#582E7A] text-white text-[15px] font-medium py-3 rounded-full shadow-md transition-colors"
                >
                  Solicitar Turno
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;