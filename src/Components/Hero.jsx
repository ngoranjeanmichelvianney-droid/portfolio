import React from 'react';
import profil from '../assets/Image/profil.jpg';

function Hero() {
  return (
    <section
      id='hero'
      // ✅ CORRECTION MAJEURE 1: Padding-top pour éviter le chevauchement avec navbar
      // pt-20 = 80px sur mobile (navbar 56px + 24px d'espace)
      // sm:pt-24 = 96px sur tablette (navbar 64px + 32px d'espace)
      // md:pt-28 = 112px sur desktop (navbar 64px + 48px d'espace)
      // pb-12 sm:pb-16 = padding-bottom séparé
      
      // ✅ CORRECTION 2: min-h-screen au lieu de min-h-[70vh]
      // Plus simple et plus prévisible
      className='relative scroll-mt-16 bg-black text-white min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16'
    >
      {/* ✅ CORRECTION 3: Gap réduit sur mobile */}
      {/* gap-6 (24px) mobile, gap-8 (32px) tablette, gap-10 (40px) desktop */}
      <div className='w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-16'>
        
        {/* Texte - order-2 sur mobile, order-1 sur desktop */}
        <div className='w-full md:w-1/2 text-center md:text-left space-y-3 sm:space-y-4 md:space-y-6 order-2 md:order-1'>
          
          {/* ✅ CORRECTION 4: Titres avec progression très responsive */}
          {/* text-2xl (24px) → text-3xl (30px) → text-4xl (36px) → text-5xl (48px) → text-6xl (60px) */}
          <h1 className='text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            Salut, je suis <span className='text-blue-500'>N'Goran Jean Michel</span>
          </h1>
          
          {/* ✅ CORRECTION 5: Texte avec tailles progressives + leading-relaxed */}
          {/* text-sm (14px) mobile → text-base (16px) → text-lg (18px) → text-xl (20px) */}
          <p className='text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed'>
            Passionné par le développement web, je conçois des solutions modernes et performantes.
          </p>
          
          {/* ✅ CORRECTION 6: Bouton responsive avec padding-top adaptatif */}
          <div className='pt-2 sm:pt-4'>
            {/* px-5 (20px) mobile → px-8 (32px) desktop */}
            {/* py-2 (8px) mobile → py-3 (12px) desktop */}
            {/* text-xs (12px) → text-sm (14px) → text-base (16px) */}
            <button className='px-5 xs:px-6 sm:px-8 py-2 sm:py-2.5 md:py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-bold transition-transform hover:scale-105 text-xs xs:text-sm sm:text-base'>
              Mes projets
            </button>
          </div>
        </div>

        {/* Image - order-1 sur mobile (apparaît en premier), order-2 sur desktop */}
        {/* ✅ CORRECTION 7: Tailles d'image très progressives */}
        {/* Progression: 128px → 160px → 192px → 224px → 288px → 320px */}
        {/* w-32 (128px) mobile */}
        {/* xs:w-40 (160px) très petits écrans */}
        {/* sm:w-48 (192px) tablettes */}
        {/* md:w-56 (224px) desktop */}
        {/* lg:w-72 (288px) grands écrans */}
        {/* xl:w-80 (320px) très grands écrans */}
        
        {/* ✅ CORRECTION 8: Bordure responsive */}
        {/* border-2 (8px) mobile, border-3 (12px) tablette, border-4 (16px) desktop */}
        
        {/* flex-shrink-0 empêche l'image de rétrécir plus que prévu */}
        <div className='w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 mx-auto md:mx-0 order-1 md:order-2 '>
          <img
            src={profil}
            alt="Profil de N'Goran Jean Michel"
            className='w-full h-full object-cover rounded-full border-2 sm:border-3 md:border-4 border-blue-500 shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;