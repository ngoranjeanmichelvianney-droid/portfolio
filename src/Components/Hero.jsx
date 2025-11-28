import React from 'react';
import profil from '../assets/Image/profil.jpg';

function Hero() {
  return (
    <section
      id='hero'
      className='relative scroll-mt-16 bg-black text-white min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] lg:min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-12 sm:py-16'
    >
      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16'>
        {/* Texte */}
        <div className='w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Salut, je suis <span className='text-blue-500'>N'Goran Jean Michel</span>
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0'>
            Passionné par le développement web, je conçois des solutions modernes et performantes.
          </p>
          <div className='pt-2'>
            <button className='px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-bold transition-transform hover:scale-105 text-sm sm:text-base'>
              Mes projets
            </button>
          </div>
        </div>

        {/* Image */}
        <div className='w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto md:mx-0 order-1 md:order-2 '>
          <img
            src={profil}
            alt='Profil'
            className='w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;