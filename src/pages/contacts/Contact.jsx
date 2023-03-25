import {React, useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GoMailRead, FaLinkedin, BsTelephone, IoMdPaperPlane } from 'react-icons/all'
import ContactBox from './ContactBox';

const Contact = () => {

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

  const mobile = 'verticalText uppercase text-center font-black tracking-wide text-slate-700 text-lg py-2 px-1'
  const desktop = 'uppercase text-center font-black tracking-widest text-slate-700 phone:text-xl sm:text-2xl lg:text-6xl xl:text-5xl 2xl:text-6xl py-6 phone:py-2'

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
      <div className='flex justify-center items-center bg-slate-100'>
        <div className="wrapper w-full md:w-11/12 lg:w-full px-2 md:px-0 lg:px-4 2xl:px-8 phone:h-auto sm:px-4 phone:px-0 phone:pr-2">
        <div className='my-4'>
          <div className='flex flex-row-reverse justify-between sm:flex-col mb-2 sm:mb-4 lg:mb-6 xl:mb-4 2xl:mb-6'>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 ml-2 sm:mx-28 xl:mx-48 sm:mb-4 lg:mb-8'>
              <h1 className={width < breakpoint ? mobile : desktop}>
                Contact
              </h1>
            </div>
            <div className='text-slate-700 font-thin'>
              <div className="text-2xl phone:text-sm sm:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl mt-4 phone:mt-0 mb-2 lg:mb-6 xl:mb-2 2xl:mb-6 font-light tracking-wide leading-5 flex justify-start items-center">

                <h2 className='mb-1 phone:mb-0'>
                  Feel <span className='font-black'>free</span> 
                </h2>
                <h2 className='font-thin ml-1'>
                  to contact me!
                </h2>
              </div>
              <p className='text-base phone:text-xs sm:text-lg lg:text-base xl:text-sm 2xl:text-lg tracking-wide ml-2 pr-1 phone:ml-3'>
                It would be my pleasure to discuss any Frontend Development opportunities, I look forward to hearing from you. Thank you for your consideration. 
              </p>
            </div>
          </div>

        <div className="lowerCont phone:flex flex-row-reverse justify-center items-start ">

          <div className='my-4 phone:my-1 sm:my-14 lg:my-2 xl:my-10 2xl:my-12 phone:mx-10 text-slate-700 sm:flex sm:flex-wrap sm:justify-evenly sm:items-center phone:flex-col phone:justify-center phone:items-start'>

            <div className="icon text-5xl phone:text-2xl sm:text-6xl lg:text-4xl xl:text-5xl mb-1 ml-10 sm:ml-0  ml-10 sm:ml-0sm:mb-4 phone:mb-0 lg:mb-2 xl:mb-5 flex phone:justify-start items-center">
              <GoMailRead />

              <div className="text-base phone:text-sm sm:text-lg lg:text-sm xl:text-lg ml-4 py-4 phone:py-3  sm:py-6 cursor-pointer hover:scale-110 duration-300 ease-in-out">
                <Mailto email="sirajum.qazi@gmail.com" subject="Development Opportunity" body="Hi Serj," target="_blank">
                  sirajum.qazi@gmail.com
                </Mailto>
              </div>

            </div>

            <div className="icon text-5xl phone:text-2xl sm:text-6xl lg:text-4xl xl:text-5xl mb-1 ml-10 sm:ml-0 sm:mb-4 phone:mb-0 lg:mb-2 xl:mb-5 flex phone:justify-start items-center">
              <BsTelephone />
              <div className='text-base phone:text-sm sm:text-lg lg:text-sm xl:text-lg  ml-4 py-4 phone:py-3 sm:py-6 cursor-pointer hover:scale-110 duration-300 ease-in-out'>
                <a href="tel:+12265015420">+1 226-501-5420</a>
              </div>
            </div>
            
            <div className="icon text-5xl phone:text-2xl sm:text-6xl lg:text-4xl xl:text-5xl mb-1 ml-10 sm:ml-0 flex phone:justify-start items-center">
              <FaLinkedin />
              <div className='text-base phone:text-sm sm:text-lg lg:text-sm xl:text-lg  ml-4 py-4 phone:py-3 sm:py-6 cursor-pointer hover:scale-110 duration-300 ease-in-out'>
                <Link to='https://www.linkedin.com/in/serjqazi/' target="_blank">
                  linkedin.com/serjqazi
                </Link>
              </div>
            </div>
          </div>

          <ContactBox/>
        </div>
        </div>
          
            {/* end of lower section */}
        </div>
        {/* end of wrapper */}
      </div> 
  )
}

export default Contact