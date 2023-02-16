import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { resume } from '../assets/';

import { AiOutlineLinkedin, RxTwitterLogo, TbBrandGithub, BsFileEarmarkPdf } from 'react-icons/all'


const Social = () => {
  return (
    <div className='' >
      <ul className='w-fit flex flex-col lg:flex-row flex-nowrap justify-center align-middle bg-slate-400 rounded-xl'>
        
        <li className='flex justify-center align-middle w-full cursor-pointer lg:border-r-2 border-slate-700 rounded-tr-lg rounded-tl-lg hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl sm-text-4xl hover:text-yellow-500 px-1 py-5 sm:py-6 lg:px-10 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700 focus:rounded-tr-lg focus:rounded-tl-lg' 
          to='https://www.linkedin.com/in/serjqazi/' target='_blank' rel='noopener noreferrer'>
            <AiOutlineLinkedin/>
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer lg:border-r-2 border-slate-700 hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl sm-text-4xl hover:text-yellow-500 px-1 py-5 sm:py-6 lg:px-10 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700' 
          to='https://github.com/SerjQazi' target='_blank' rel='noopener noreferrer'>
            <TbBrandGithub/>
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer lg:border-r-2 border-slate-700 hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl sm-text-4xl hover:text-yellow-500 px-1 py-5 sm:py-6 lg:px-10 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700' 
          to='https://twitter.com/qazi_serj' target='_blank' rel='noopener noreferrer'>
            <RxTwitterLogo/>
          </Link>
        </li>

        <li className='flex justify-center align-middle w-full cursor-pointer rounded-br-lg rounded-bl-lg hover:bg-slate-700 duration-700'>
          <Link className='text-slate-600 text-3xl sm-text-4xl hover:text-yellow-500 px-1 py-5 sm:py-6 lg:px-10 hover:scale-110 duration-700 focus:text-yellow-500 focus:outline-none focus:bg-slate-700 focus:rounded-br-lg focus:rounded-bl-lg' 
          to={resume} target='_blank' rel='noopener noreferrer'>
            <BsFileEarmarkPdf/>
          </Link>
        </li>


      </ul>
    </div>
  )
}

export default Social