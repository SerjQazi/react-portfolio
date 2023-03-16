import {React, useState, useEffect} from 'react'
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all'

const Resume = () => {

  return (
    <div className=''>
      <div className='border border-dashed border-slate-400 hidden sm:block phone:hidden my-6'>
      </div>
      
      <h3 className='uppercase font-bold text-slate-700 text-base phone:text-base sm:text-2xl mb-2 phone:mb-1 mt-4 phone:mt-1 sm:mt-0'>
        Education
      </h3>

      <div className=''>
        <div className="text-slate-700">
          <p className='font-thin text-sm phone:text-xs sm:text-base mb-2 phone:mb-0.5'>Juno College Of Technology</p>

          <p className='ml-2 text-xs phone:text-[0.5rem] sm:text-sm flex justify-start items-center'><FaReact className='mr-1'/>React Development |<SiJavascript className='mx-1'/> JavaScript |<AiFillHtml5 className='mx-1'/> HTML5 & CSS3</p>
        </div>
      </div>
    
    </div>
  )
}

export default Resume