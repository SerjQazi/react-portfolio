import {React, useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GoMailRead, FaLinkedin, FiPhone, IoMdPaperPlane } from 'react-icons/all'

const ContactBox = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 640;
  const xlBreakpoint = 1280;
  const iPadPro = 1366;
  const xxlBreakpoint = 1536;
  const xxxlBreakpoint = 1550;

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
      <div className='flex flex-col justify-center items-center text-slate-700 phone:w-1/2 lg:w-7/12'>

        <form name="contact" method='post' className='flex flex-col justify-center items-center w-full'>

            <input type="hidden" name='form-name' value='contact' />

            <label htmlFor="name" className='sr-only'>enter your name</label>
              <input 
              required
              type='text'
              id='name' 
              name='name' 
              placeholder='name' 
              className='w-full px-3 py-2 phone:py-1 lg:py-2 sm:p-4 mb-0 phone:mb-0 sm:mb-2 text-base phone:text-xs sm:text-xl lg:text-[1rem] xl:text-sm 2xl:text-lg bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500'
              />

            <label htmlFor="email" className='sr-only'>enter your email address</label>
              <input 
              required
              type='email' 
              id='email' 
              name='email' 
              placeholder='email@example.com' 
              className='mt-2 w-full px-3 py-2 phone:py-1 lg:py-2 sm:p-4 mb-0 phone:mb-0 sm:mb-2 text-base phone:text-xs sm:text-xl lg:text-[1rem] xl:text-sm 2xl:text-lg bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 invalid:border-red-500 invalid:border-2'
              />

            {
              width < breakpoint ?
              <>
                <label htmlFor="message" className='sr-only'>enter your message</label>
                <textarea 
                required
                type='text' 
                id='message' 
                name='message' 
                placeholder='message' 
                cols="30" 
                rows="8"
                className='mt-2 w-full px-3 py-2 phone:py-1 lg:py-2 sm:p-4 text-base xl:text-sm 2xl:text-lg bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none'
                />
              </>
              : width == xlBreakpoint || width == xxlBreakpoint || width == iPadPro || width >= xxxlBreakpoint ?
              <>
                <label htmlFor="message" className='sr-only'>enter your message</label>
                <textarea 
                type='text' 
                id='message' 
                name='message' 
                placeholder='message' 
                cols="30" 
                rows="6"
                className='mt-2 w-full px-3 py-2 phone:py-1 lg:py-2 sm:p-4 text-base bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none'
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
                className='mt-2 w-full px-3 py-1 text-base phone:text-xs sm:text-xl lg:text-[1rem] bg-slate-100 border border-slate-500 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none'
                />
              </>
              
            }

            <div className="buttonContainer flex justify-center">
              <button type='submit' className='px-5 py-1 sm:px-8 sm:py-3 phone:px-5 phone:py-1 lg:py-2 lg:px-6 2xl:py-3 2xl:px-10 mt-4 phone:mt-2 sm:mt-8 lg:mt-3 xl:mt-4 2xl:mt-5 bg-yellow-500 rounded-md uppercase font-bold tracking-widest flex justify-center items-center text-base phone:text-sm sm:text-2xl xl:text-sm 2xl:text-xl'>Send<IoMdPaperPlane className='ml-1 sm:ml-3 phone:ml-1 text-base sm:text-2xl'/> </button>
            </div>
        </form>

      </div>
  )
}

export default ContactBox