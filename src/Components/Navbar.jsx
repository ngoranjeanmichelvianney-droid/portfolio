import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Fonction pour fermer le menu mobile au clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-black text-white shadow-md fixed w-full top-0 left-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-14 sm:h-16 justify-between items-center'>

          {/* Logo */}
          <h1 className='text-lg sm:text-xl font-bold'><span className='text-blue-500'>Niki</span> Dev</h1>

          {/* Menu Desktop */}
          <div className='hidden md:flex space-x-4 lg:space-x-8 items-center ml-auto'>
            <a href="#hero" className='hover:text-blue-500 transition-colors scroll-mt-16 text-sm lg:text-base'>Accueil</a>
            <a href="#about" className='hover:text-blue-500 transition-colors scroll-mt-16 text-sm lg:text-base'>À propos</a>
            <a href="#skills" className='hover:text-blue-500 transition-colors scroll-mt-16 text-sm lg:text-base'>Compétences</a>
            <a href="#projects" className='hover:text-blue-500 transition-colors scroll-mt-16 text-sm lg:text-base'>Projets</a>
            <a href="#contact" className='hover:text-blue-500 transition-colors scroll-mt-16 text-sm lg:text-base'>Contact</a>
          </div>

          {/* Hamburger Mobile */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='focus:outline-none text-2xl mt-2'
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile avec animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='md:hidden px-2 pt-2 pb-3 space-y-1 bg-black transition-all duration-300 ease-in-out'
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={menuVariants}
          >
            <motion.a href="#hero" variants={linkVariants} onClick={handleLinkClick} className='block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-100'>Accueil</motion.a>
            <motion.a href="#about" variants={linkVariants} onClick={handleLinkClick} className='block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-100'>À propos</motion.a>
            <motion.a href="#skills" variants={linkVariants} onClick={handleLinkClick} className='block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-100'>Compétences</motion.a>
            <motion.a href="#projects" variants={linkVariants} onClick={handleLinkClick} className='block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-100'>Projets</motion.a>
            <motion.a href="#contact" variants={linkVariants} onClick={handleLinkClick} className='block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-100'>Contact</motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;