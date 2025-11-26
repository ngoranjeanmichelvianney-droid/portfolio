import React from 'react'
import  profil from '../assets/Image/profil.jpeg';

function Hero() {
  return (
    <section id='hero' className='relative scroll-mt-16 bg-black text-white min-h-screen flex flex-col justify-start items-center px-6  pt-20'>

      <div className='container max-w-5xl max-auto z-10'>
        <div className='flex flex-col md:flex-row  items-center justify-between gap-8'>
            <div className='space-y-6 text-center md:text-left md:w-1/2'>
      <h1 className='text-4xl sm:text-white md:text-6xl font-bold mb-4'>Salut, je suis {""}
        <span className='text-poppins whitespace-nowrap'>
         <span className='text-blue-500'>N </span>'goran {""} 
         <span className='text-blue-500'>J</span>ean {""}
         <span className='text-blue-500'>M</span>ichel
        </span>
          </h1>
          <p  className='text-md sm:text-lg md:text-xl text-gray-300 max-w-xl mb-8'>Passionné  par le développement web, je conçois des solutions web moderne et performantes. Avec du code je transforme  vos idées en réalité. </p>
            <button className='px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 border-2  border-blue-400  rounded-4xl font-bold'>Mes projets</button>
            </div>

           
               

             

            <div>
                <img src={profil} alt="photo de profil" className=' w-64 h-64 object-center rounded-full  shadow-lg'/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
