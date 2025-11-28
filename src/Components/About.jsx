import React from 'react';
import { FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id='about'
      className='scroll-mt-16 py-16 sm:py-20 md:py-24 w-full min-h-screen flex flex-col px-4 sm:px-6 lg:px-12 bg-gray-900'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-6xl mx-auto flex flex-col w-full'
      >
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-gray-100 underline underline-offset-8 decoration-2'>
          À PROPOS
        </h2>

        <div className='flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center lg:items-start'>
          {/* Texte */}
          <div className='flex-1 text-center lg:text-left space-y-3 sm:space-y-4 w-full'>
            <p className='text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed'>
              Étudiant en informatique et développeur Front-End, je m'investis dans l'apprentissage et la réalisation de projets concrets répondant à de vrais besoins.
            </p>
            <p className='text-sm sm:text-base md:text-lg text-gray-100 leading-relaxed'>
              Mon objectif est de concevoir des applications utiles, intuitives en respectant les bonnes pratiques de développement.
            </p>

            <div className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-2 justify-center lg:justify-start pt-4 sm:pt-6'>
              <button
                className='px-5 sm:px-6 py-2 sm:py-2.5 bg-blue-600 text-white hover:scale-105 border-2 border-blue-400 rounded-full font-bold transition-all duration-300 text-sm sm:text-base w-full sm:w-auto'
                onClick={() =>
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }
              >
                Entrer en contact
              </button>
              <button className='px-5 sm:px-6 py-2 sm:py-2.5 bg-transparent hover:bg-blue-500/20 text-blue-400 rounded-full border-2 border-blue-400 text-sm sm:text-base w-full sm:w-auto'>
                Télécharger le CV
              </button>
            </div>
          </div>

          {/* Cartes compétences */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 justify-center flex-1 w-full'>
            <div className='bg-gray-800 p-5 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-xs mx-auto w-full'>
              <div className='flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center'>
                <FaCode className='w-8 h-8 sm:w-10 sm:h-10 text-blue-400 ' />
                <h3 className='text-base sm:text-lg font-semibold text-white'>Front-End</h3>
              </div>
              <p className='text-xs sm:text-sm text-gray-400 text-center'>React/Next.js</p>
            </div>

            <div className='bg-gray-800 p-5 sm:p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:scale-105 max-w-xs mx-auto w-full'>
              <div className='flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 justify-center'>
                <FaLaptopCode className='w-8 h-8 sm:w-10 sm:h-10 text-blue-400 ' />
                <h3 className='text-base sm:text-lg font-semibold text-white'>Back-End</h3>
              </div>
              <p className='text-xs sm:text-sm text-gray-400 text-center'>Node.js</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;