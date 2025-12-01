import React from 'react';

function Skills() {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'React/Next.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Node.js', level: 70 },
   
  ];

  return (
    <section
      id='skills'
      className='w-full scroll-mt-16 min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-12 sm:py-16'
    >
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center'>
        Mes <span className='text-blue-500'>Compétences</span>
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-5xl'>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className='flex flex-col p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-gray-900 justify-between hover:border hover:border-blue-400 transition-transform duration-300 hover:scale-105'
          >
            <span className='text-base sm:text-lg font-semibold'>{skill.name}</span>

            <div className='mt-3 sm:mt-4 w-full bg-gray-800 rounded h-2 sm:h-3'>
              <div
                className='h-2 sm:h-3 bg-blue-500 rounded-3xl transition-all duration-700'
                style={{ width: skill.level + '%' }}
              ></div>
            </div>

            <span className='text-xs sm:text-sm mt-2 self-end font-semibold'>{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;