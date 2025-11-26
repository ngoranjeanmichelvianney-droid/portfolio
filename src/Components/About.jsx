import React from 'react'
import{FaCode,FaLaptopCode, FaBookOpen} from "react-icons/fa"
import {motion} from 'framer-motion'

function About() {
  return (
    <section id='about' className=' scroll-mt-16 py-24 w-full min-h-screen flex  flex-col md:flex-row  px-6 bg-gray-900'>

          <motion className='div'
          
            initial={{opacity:0,y:50}}
            animate={{opacity: 0,y:0}}
            transition={{duration:0.6}}
          >

          

            <div className=' max-w-x-6l mx-auto px-6 lg:px-8'>
                <h2 className='text-5xl sm:text-6xl md:text-gray-100 font-bold mb-16 text-center md:text-center underline underline-offset-12 decoration-2 ' >À PROPOS</h2>

                <div className='w-16 h-px'></div>

              <div className='grid lg:grid-cols-2 gap-16 items-start'>


            <div className=' space-y-6  text-gray-100 px-4  ' >
                <p className='text-lg leading-relaxed '>Etudiant en informatique et développeur Front-End, je m'investis dans l'apprentissage et la réalisation de projets concrets répondant à des vrais besoins.</p>
                <p className='text-lg leading-relaxed'>Mon objectif est de concevoir des applications utiles, intuitives  en respectant  les bonnes pratiques de développement</p>

                <div  className='flex flex-wrap gap-2 pt-4 justify-center '>
                  <button className='px-6 py-2 bg-blue-600 text-white transition-all duration-300  hover:transform hover:scale-105 border-2  border-blue-400  rounded-4xl font-bold' onClick={()=> document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>Entrer en contat</button>
                <button className='px-6 py-2 bg-transparent hover:bg-blue-500/20 text-blue-400 rounded-4xl border-2 border-blue-400'>Télécharger le cv</button>

                </div>

              </div>

             <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8' >
              <div className='space-y-6'>

              <div className=' bg-gray-800 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300  hover:transform hover:scale-105 w-64 '>
                <div className='flex items-center  gap-4 '>                              

                 <FaCode className=' w-10 h-10 mb-4  text-blue-400 ' />                 
                 <div className='flex flex-col justify-center flex-1 text-center'>
                 <h3 className='text-lg font-semibold text-white '>Front-End</h3>
                 </div>
                </div>    
                  <p className="text-sm text-gray-400  ">React</p>
               </div>
                  </div>              
               </div>
              </div>
           </div>

          </motion>
         </section>
  )
}

export default About