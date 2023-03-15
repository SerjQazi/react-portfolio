import {React, useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GoMailRead, FaLinkedin, FiPhone, IoMdPaperPlane } from 'react-icons/all'

const ContactBox = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;

  useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
      <div className='flex flex-col justify-center items-center text-slate-700 phone:w-1/2'>

        <form className='flex flex-col justify-center items-center w-full'>
          <label htmlFor="name" className='sr-only'>enter your name</label>
            <input type='text' 
            id='name' 
            name='name' 
            placeholder='name' 
            className='w-full px-3 py-2 phone:py-1 sm:p-4 mb-0 phone:mb-0 sm:mb-2 text-base phone:text-xs sm:text-xl bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
            />

          <label htmlFor="email" className='sr-only'>enter your email address</label>
            <input 
            type='email' 
            id='email' 
            name='email' 
            placeholder='email@example.com' 
            className='mt-2 w-full px-3 py-2 phone:py-1 sm:p-4 mb-0 phone:mb-0 sm:mb-2 text-base phone:text-xs sm:text-xl bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 invalid:border-red-500 invalid:border-2'
            />

          {
            width < breakpoint ?
            <>
              <label htmlFor="message" className='sr-only'>enter your message</label>
              <textarea 
              type='text' 
              id='message' 
              name='message' 
              placeholder='message' 
              cols="30" 
              rows="8"
              className='mt-2 w-full px-3 py-2 phone:py-1 sm:p-4 text-base bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none'
              />
            </>
            :
            <>
              <label htmlFor="message" className='sr-only'>enter your message</label>
              <textarea 
              type='text' 
              id='message' 
              name='message' 
              placeholder='message' 
              cols="30" 
              rows="4"
              className='mt-2 w-full px-3 py-1 text-base phone:text-xs sm:text-xl bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none'
              />
            </>
          }

          <button className='px-5 py-1 sm:px-8 sm:py-3 phone:px-5 phone:py-1 mt-4 phone:mt-2 sm:mt-8 bg-yellow-500 rounded-md uppercase font-bold tracking-widest flex justify-center items-center text-base phone:text-sm sm:text-2xl' type='submit'>Send<IoMdPaperPlane className='ml-1 sm:ml-3 phone:ml-1 text-base sm:text-2xl'/> </button>
        </form>

      </div>
  )
}

export default ContactBox