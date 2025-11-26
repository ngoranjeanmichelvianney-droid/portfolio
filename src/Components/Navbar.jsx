import React from 'react'
import { useState,useEffect } from 'react'
import{FaBars,FaTimes} from "react-icons/fa"
import {motion, AnimatePresence} from 'framer-motion'


function Navbar() {
      

    const [isOpen, setIsOpen]= useState(false)

    const menuVariants={
        hidden: {opacity:0},
        visible : {
            opacity:1,
            transition:{
                staggerChildren:0.15,
            },
        },
    }
    const linkVariants={
        hidden:{opacity:0, y:20},
        visible:{opacity:1, y:0 }
    };

  return (

    <nav className='bg-black text-white dark:bg-gray-200 dark:text-white shadow-md fixed w-full top-0 left-0 z-50' >
    <div className='max-w-7xl max-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex  h-16 justify-between'>
            <div className=' flex items-center justify-between'>
      <h1 className='text-xl font-bold' ><span className='text-blue-700'>Niki</span> Dev</h1>
            </div>

            <div className='hidden md:flex space-x-8 items-center ml-auto'>
               
                <a  href="#hero" className='hover:text-blue-500 transition-colors scroll-mt-16'>Accueil</a>
                <a  href="#about"  className='hover:text-blue-500 scroll-mt-16transition-colors'>À propos</a>
                <a href="#skills" className='hover:text-blue-500 transition-colors'>Compétences</a>
                <a  href="#projects" className='hover:text-blue-500 scroll-mt-16 transition-colors'>Projets</a>
                <a  href="#contact" className='hover:text-blue-500 scroll-mt-16transition-colors'>Contact</a>

            
                
            
              
            </div>

            <div className='md:hidden'>
                <button onClick={()=>setIsOpen(!isOpen)} className='focus:outline-none md:hidden text-2xl mt-2'>
                    {isOpen ? (
                        <FaTimes size={20}/>
                    ) : (
                        <FaBars size={20} />
                    )
                }
                </button>
            </div>
        </div>
    </div>


   <AnimatePresence>
    {isOpen && (

        <motion.div className='md:hidden  px-2 pt-2 pb-3 space-y-1 bg-black  transition-all duration-300 ease-in-out ' initial='hidden' animate='visible' exit='hidden' variants={menuVariants}>
            <motion.a href="#hero" variants= {linkVariants}  className='block px-3 py-2 text-white hover:text-blue-400  transition-colors duration-100'>Accueil</motion.a>
            <motion.a href="#about" variants= {linkVariants} className='block px-3 py-2 text-white hover:text-blue-400 transition-colors duration-100 '>À propos</motion.a>
            <motion.a href="#skills" variants= {linkVariants} className=' block px-3 py-2 text-white hover:text-blue-400  transition-colors duration-100'>Compétences</motion.a>
            <motion.a href="#projects" variants= {linkVariants} className='block px-3 py-2 text-white hover:text-blue-400  transition-colors duration-100'>Projets</motion.a>
            <motion.a href="#contact" variants= {linkVariants} className='block px-3 py-2 text-white hover:text-blue-400  transition-colors duration-100'>Contact</motion.a>

        </motion.div>
    )}
     </AnimatePresence>
    </nav>
  )
}

export default Navbar
