import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { resume } from '../assets';

import { AiOutlineLinkedin, RxTwitterLogo, TbBrandGithub, BsFileEarmarkPdf } from 'react-icons/all'

// px-1 phone:pr-3 phone:pl-5 sm:px-2 py-5 phone:py-1 md:py-6 lg:px-7 2xl:py-2 2xl:px-8

const Social = () => {
  return (
    <div className='w-full h-full ml-2 sm:ml-4 mr-1 sm:mr-4 3xl:mr-6'>
      <ul className='w-full h-5/6 my-10 flex flex-col justify-center items-center rounded-lg bg-yellow-500'>
        
        <li className='flex justify-center items-center w-full h-full px-1 sm:px-2 cursor-pointer rounded-tr-lg rounded-tl-lg border-b-2 border-dashed border-slate-700  hover:bg-slate-700 duration-300 text-slate-600 hover:text-yellow-500'>
          
          <Link className='flex justify-center items-center w-full h-full py-1 2xl:py-2 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:scale-105 duration-300 focus:text-yellow-500 focus:outline-none focus:bg-slate-700 focus:rounded-bl-lg focus:rounded-tl-lg' 
          to='https://www.linkedin.com/in/serjqazi/' target='_blank' rel='noopener noreferrer'>
            <AiOutlineLinkedin/>
          </Link>
        
        </li>

        <li className='flex justify-center items-center w-full h-full px-1 sm:px-2 cursor-pointer border-b-2 border-dashed border-slate-700  hover:bg-slate-700 duration-300 text-slate-600 hover:text-yellow-500'>
          <Link className='flex justify-center items-center w-full h-full py-1 2xl:py-2 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:scale-105 duration-300 focus:text-yellow-500 focus:outline-none focus:bg-slate-700' 
          to='https://github.com/SerjQazi' target='_blank' rel='noopener noreferrer'>
            <TbBrandGithub/>
          </Link>
        </li>

        <li className='flex justify-center items-center w-full h-full px-1 sm:px-2 cursor-pointer border-b-2 border-dashed border-slate-700  hover:bg-slate-700 duration-300 text-slate-600 hover:text-yellow-500'>
          <Link className='flex justify-center items-center w-full h-full py-1 2xl:py-2 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:scale-105 duration-300 focus:text-yellow-500 focus:outline-none focus:bg-slate-700' 
          to='https://twitter.com/qazi_serj' target='_blank' rel='noopener noreferrer'>
            <RxTwitterLogo/>
          </Link>
        </li>

        <li className='flex justify-center items-center w-full h-full px-1 sm:px-2 cursor-pointer rounded-br-lg rounded-bl-lg  hover:bg-slate-700 duration-300 text-slate-600 hover:text-yellow-500'>
          <Link className='flex justify-center items-center w-full h-full py-1 2xl:py-2 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:scale-105 duration-300 focus:text-yellow-500 focus:outline-none focus:bg-slate-700 focus:rounded-br-lg focus:rounded-bl-lg' 
          to={resume} target='_blank' rel='noopener noreferrer'>
            <BsFileEarmarkPdf/>
          </Link>
        </li>


      </ul>
    </div>
  )
}

export default Social