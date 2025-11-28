import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(form.current);
    const name = formData.get('user_name');
    const email = formData.get('user_email');
    const message = formData.get('message');

    if (!name || !email || !message) {
      setError('Veuillez remplir tous les champs.');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer un email valide.');
      setLoading(false);
      return;
    }

    emailjs
      .sendForm('service_p25hxlu', 'template_fnzqyjn', form.current, 'K4EG4Pq9My8lp11Hj')
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        () => {
          setError('Erreur lors de l’envoi. Réessayez.');
          setLoading(false);
          setTimeout(() => setError(''), 5000);
        }
      );
  };

  return (
    <section id='contact' className='w-full flex flex-col items-center px-4 sm:px-6 py-20 bg-gray-900 text-white'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>
          Entrer en <span className='text-blue-500'>contact</span>
        </h2>
        <p className='text-gray-100 max-w-xl mx-auto'>Vous avez un projet ou souhaitez collaborer ? N'hésitez pas à me contacter.</p>
      </div>

      <div className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Infos */}
        <div className='flex flex-col space-y-6'>
          <div className='flex items-center space-x-3'>
            <AiOutlineMail className='text-2xl text-gray-400' />
            <a href='mailto:ngoranjeanmichelvianney@gmail.com' className='text-base font-semibold hover:text-blue-400 transition'>
              ngoranjeanmichelvianney@gmail.com
            </a>
          </div>
          <div className='flex items-center space-x-3'>
            <FaGithub className='text-2xl text-blue-400' />
            <a href='https://github.com/ngoranjeanmichelvianney-droid' className='text-base font-semibold hover:text-blue-400 transition'>
              github.com/ngoranjeanmichelvianney-droid
            </a>
          </div>
          <div className='flex items-center space-x-3'>
            <BsTelephone className='text-2xl text-gray-400' />
            <a href='tel:‪+2550767369525‬' className='text-base font-semibold hover:text-blue-400 transition'>
              ‪+255 0767369525‬
            </a>
          </div>
        </div>

        {/* Formulaire */}
        <div className='bg-gray-800 p-6 rounded-lg shadow-lg mx-auto w-full max-w-md'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
            <input type='text' name='user_name' placeholder='Votre nom' className='p-3 w-full rounded bg-black text-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500' required />
            <input type='email' name='user_email' placeholder='Votre email' className='p-3 w-full rounded bg-black text-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500' required />
            <textarea name='message' rows='5' placeholder='Votre message' className='p-3 w-full rounded bg-black text-gray-300 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none' required />
            <button type='submit' disabled={loading} className='px-4 py-2 bg-blue-600 text-white rounded-3xl font-bold hover:scale-105 transition-transform'>
              {loading ? 'Envoi...' : 'Envoyer le message'}
            </button>
            {success && <p className='text-green-500 text-center mt-2'>Message envoyé !</p>}
            {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
