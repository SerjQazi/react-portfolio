import {React, useState, useEffect} from 'react'
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all'

const Resume = () => {

  return (
    <div className=''>
      <div className='border border-dashed border-slate-400 hidden sm:block phone:hidden my-6'>
      </div>
      
      <h3 className='uppercase font-bold text-slate-700 text-base phone:text-base sm:text-2xl lg:text-2xl 2xl:text-3xl lg:leading-6 mb-2 phone:mb-1 mt-4 phone:mt-0 sm:mt-0 lg:mt-2 xl:mt-6 2xl:mt-8'>
        Education
      </h3>

      <div className=''>
        <div className="text-slate-700 phone:flex phone:justify-start phone:items-center">
          <p className='font-thin text-sm phone:text-xs sm:text-base lg:text-base xl:text-lg mb-2 phone:mb-0.5 phone:leading-[0.5rem] phone:mr-4 lg:mr-4'>Juno College Of Technology</p>

          <p className='ml-2 text-xs phone:text-[0.5rem] sm:text-sm lg:text-xs xl:text-sm flex justify-start items-center phone:mt-0 lg:mt-1'><FaReact className='mr-1 xl:text-lg xl:mr-2'/>React Development |<SiJavascript className='mx-1 xl:ml-3 xl:text-lg xl:mr-2'/> JavaScript |<AiFillHtml5 className='mx-1 xl:ml-3 xl:text-lg xl:mr-2'/> HTML5 & CSS3</p>
        </div>
      </div>
    
    </div>
  )
}

export default Resume