import React from 'react'

const About = () => {
  return (
      <div className='flex justify-center'>
        <div className="wrapper w-10/12">
          <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 my-8'>
            <h1 className='uppercase text-center font-bold text-slate-700 text-8xl py-6'>
              About Me
            </h1>
          </div>

          <div className='text-slate-700 mb-6'>
            <h2 className='text-2xl mb-4'>I'm <span className='font-bold'>Serj Qazi,</span> <span className='font-light'>Frontend Developer / Graphic Designer</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi officiis distinctio officia recusandae molestiae vitae id temporibus amet magnam. Temporibus magnam nam error beatae dolore veritatis praesentium, accusantium accusamus maxime!</p>
          </div>

          <div className="grid grid-cols-3 h-[25vh]">
            
            <div className="col-span-2 leftSide border-2 border-blue-500">

            </div>

            <div className="col-span-1 rightSide border-2 border-green-400">

            </div>

          </div>
        </div>
        
      </div>
  )
}

export default About