import React from 'react';
import Skills from './Skills';

const About = () => {
  return (
      <div className='flex justify-center'>
        <div className="wrapper w-10/12">
          <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 my-7'>
            <h1 className='uppercase text-center font-bold text-slate-700 text-8xl py-4'>
              About Me
            </h1>
          </div>

          <div className='text-slate-700 mb-5'>
            <h2 className='text-2xl mb-4 font-light'>I'm <span className='font-bold'>Serj Qazi,</span> Frontend Developer / Graphic Designer</h2>

            <p>Frontend Developer with years of experience in building accessible and responsive web pages using React. I have worked with RESTful APIs, Git, and Figma, and have experience in agile methodologies such as Kanban, Jira, and Confluence. Additionally, I have experience with Material-UI, Ant Design, Tailwind, and Firebase, and have worked on projects in small and large team environments.</p>
          </div>

          <div className="grid grid-cols-3">
            
            <div className="col-span-2 bg-slate-700 drop-shadow-lg">
              <Skills />              
            </div>

            <div className="col-span-1 rightSide border-2 border-green-400">

            </div>

          </div>
        </div>
        
      </div>
  )
}

export default About