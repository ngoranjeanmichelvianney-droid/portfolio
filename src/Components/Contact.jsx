import React, {useRef,useState} from 'react'
import{AiOutlineMail} from 'react-icons/ai'
import{BsTelephone} from 'react-icons/bs'
import { FaGithub} from "react-icons/fa";
import emailjs from '@emailjs/browser'

function Contact() {

   const form=useRef()
   const [loading,setLoading]=useState(false);
   const [succes,setSucces]=useState(false);
   const [error, setError]=useState(false);

   const sendEmail=(e) =>{
    e.preventDefault();
    setLoading(true);

    preventDefault();

  const formData = new FormData(form.current);
  const name = formData.get("user_name");
  const email = formData.get("user_email");
  const message = formData.get("message");

  // ✅ Vérification des champs
  if (!name || !email || !message) {
    setError("Veuillez remplir tous les champs.");
    return; // arrête l’envoi
  }

  // ✅ Vérification de l’email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("Veuillez entrer un email valide.");
    return; // arrête l’envoi
  }

    emailjs.sendForm(
         'service_p25hxlu',
         'template_fnzqyjn',
         form.current,
         'K4EG4Pq9My8lp11Hj'

    )

    .then (
        (result) =>{
            console.log(result.text);
        
            setSucces(true)
            setLoading(false);
            form.current.reset();
            setTimeout(()=>setSucces(false),5000 )
        },

        (error)=>{
            console.log(error.text)
            setError(true)
            setLoading(false)
            setTimeout(()=>setError(false),5000)
        }
    )
   }

  return (
    <section  id='contact' className='w-full   min-h-screen  items-center px-6 flex flex-col py-20 text-white bg-gray-900'>
        <div className='w-full text-center mb-20'>
        <h2  className='text-4xl font-bold mb-4'>Entrer en <span className='text-blue-500'>contact</span></h2>
        <p  className='text-gray-100 text-base mx-auto max-w-xl '>Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter. Je suis toujours ouvert à la discussion de nouvelles opportunités, voici comment me joindre</p>

        </div>

        <div className='w-full max-w-4xl justify-between grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='flex flex-col space-y-6'>

                <div className='flex items-center space-x-3'>

                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-700'>
                    <AiOutlineMail className='text-2xl text-gray-400'/>
                    </div>

                <a href="mailto:ngoranjeanmichelvianney@gmail.com" className='flex items-center space-x-3 hover:text-blue-400 transition'>
                    <p className='text-base font-semibold'>ngoranjeanmichelvianney@gmail.com</p>
                </a>


                </div>

                
                 <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 '>
                    < FaGithub className=' text-blue-400 text-2xl'/>
                    </div>

                <a href="https://github.com/ngoranjeanmichelvianney-droid" className='flex items-center space-x-3 hover:text-blue-400 transition'>
                    <p className='text-base font-semibold'>github.com/ngoranjeanmichelvianney-droid</p>
                </a>

                </div>



                <div className='flex items-center space-x-3'>
                <div className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-700' >
                    < BsTelephone className=' text-2xl text-gray-400'/>

                </div>
                <a href="tel:+255XXXXXXXXXX" className='flex items-center space-x-3 hover:text-blue-400 transition'>
                    <p className='text-base font-semibold'>+255 0767369525</p>
                </a>
                </div>
                </div>

                <div className='bg-gray-800 p-6 w-full max-w-[380px] md:mt-0 md:mx-0 mt-16 md:w-100 md:self-auto rounded-lg shadow-lg mx-auto '>
                    <form  
                          ref={form}
                          onSubmit={sendEmail}                                            
                        className='flex flex-col space-y-4'>

                        <div>
                            <label className='block mb-2 text-center text-gray-200 text-base'>Votre nom:</label>
                        <input
                            type="text"
                            required
                            name='user_name'
                            placeholder='nom...'
                            className='p-3 w-full rounded bg-black
                            focus:ring-2 text-gray-300  font-semibold focus:outline-none focus:ring-blue-500'        
                        />
                        </div>
                        <div>
                            <label className='block mb-2 text-center text-gray-200 text-base'>Votre adresse e-mail:</label>
                        <input
                            type="email"
                            required
                            name='user_email'
                            placeholder='E-mail...' 
                            className='p-3 rounded bg-black font-semibold focus:outline-none 
                            focus:ring-2 focus:ring-blue-500 w-full text-gray-300'       
                        />
                        </div>

                        <div>
                            <label className='block mb-2 text-center text-gray-200 text-base'>Votre message:</label>
                        <textarea 
                                rows='5'
                                name='message'
                            placeholder='Saisissez votre message...'   
                            className=  "   text-gray-300 resize-none w-full p-3 rounded bg-black focus:outline-none focus:ring-2 font-semibold focus:ring-blue-500 "
                               
                            required     
                        />
                        </div>
                        <button type='submit' disabled={loading} className='px-4 py-1 bg-blue-600 text-gray-300 transition-all duration-300  hover:transform hover:scale-105 border-2  border-blue-400  rounded-4xl font-bold'>Envoyez un message</button>

                        {succes && <p className='text-shadow-green-500 text-center mt-2'>Message envoyé avec succès !</p> }
                        {error && <p className='text-red-600 text-center mt-2'>Erreur lors de l'envoi. Réessayez.</p> }

                    </form>

                </div>



            </div>



    </section>
  )
}


export default Contact