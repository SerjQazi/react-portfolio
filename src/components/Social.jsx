import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { resume } from '../assets/';

import { AiOutlineLinkedin, RxTwitterLogo, TbBrandGithub, BsFileEarmarkPdf } from 'react-icons/all'


const Social = () => {
  return (
    <div className=''>
      <ul className='w-fit flex flex-col phone:flex-row flex-nowrap justify-center align-middle bg-slate-400 rounded-xl'>
        
        <li className='flex justify-center align-middle w-full cursor-pointer rounded-tr-lg rounded-tl-lg hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:text-yellow-500 px-1 phone:pr-3 phone:pl-5 sm:px-2 py-5 phone:py-1 md:py-6 lg:px-7 2xl:py-2 2xl:px-8 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700 focus:rounded-tr-lg focus:rounded-tl-lg' 
          to='https://www.linkedin.com/in/serjqazi/' target='_blank' rel='noopener noreferrer'>
            <AiOutlineLinkedin/>
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:text-yellow-500 px-1 phone:px-3 sm:px-2 py-5 phone:py-1 md:py-6 lg:px-7 2xl:py-2 2xl:px-8 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700' 
          to='https://github.com/SerjQazi' target='_blank' rel='noopener noreferrer'>
            <TbBrandGithub/>
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:text-yellow-500 px-1 phone:px-3 sm:px-2 py-5 phone:py-1 md:py-6 lg:px-7 2xl:py-2 2xl:px-8 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700' 
          to='https://twitter.com/qazi_serj' target='_blank' rel='noopener noreferrer'>
            <RxTwitterLogo/>
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer rounded-br-lg rounded-bl-lg hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl phone:text-2xl lg:text-3xl 2xl:text-4xl hover:text-yellow-500 px-1 phone:pl-3 phone:pr-5 sm:px-2 py-5 phone:py-1 md:py-6 lg:px-7 2xl:py-2 2xl:px-8 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700 focus:rounded-br-lg focus:rounded-bl-lg' 
          to={resume} target='_blank' rel='noopener noreferrer'>
            <BsFileEarmarkPdf/>
          </Link>
        </li>


      </ul>
    </div>
  )
}

export default Social