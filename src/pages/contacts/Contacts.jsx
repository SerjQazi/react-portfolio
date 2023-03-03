import {React, useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { GoMailRead, FaLinkedin } from 'react-icons/all'

const Contact = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 844;

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
  const desktop = 'uppercase text-center font-black tracking-widest text-slate-700 phone:text-xl 2xl:text-8xl py-6 phone:py-2'

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
      <div className='flex justify-center bg-slate-100 phone:ml-2'>
        <div className="wrapper w-full lg:w-10/12 px-2">

          <div className='flex flex-row-reverse justify-between phone:flex-col mt-4 mb-2'>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 ml-2 phone:mx-28 phone:mb-4 lg:mt-10 lg:mb-8'>
              <h1 className={width < breakpoint ? mobile : desktop}>
                Contact
              </h1>
            </div>
            <div className='text-slate-700 font-thin'>
              <div className="text-2xl lg:text-2xl mb-2 lg:mb-6 font-light tracking-wide leading-5 flex justify-start items-center">

                <h2 className='mb-1 phone:mb-0'>
                  Feel <span className='font-black'>free</span> 
                </h2>
                <h2 className='font-thin ml-1'>
                  to contact me!
                </h2>
              </div>
              <p className='text-base tracking-wide ml-2 mt-5 pr-1 phone:ml-0'>
                It would be my pleasure to discuss any Frontend Development opportunities, I look forward to hearing from you. Thank you for your consideration. 
              </p>
            </div>
          </div>

          <div className='phone:grid grid-cols-2 my-4 text-slate-700'>

            <div className="icon text-6xl phone:text-7xl flex justify-center phone:justify-start items-center">
              <GoMailRead />

              <div className="text-base ml-6 py-8 cursor-pointer hover:scale-110 duration-300 ease-in-out">
                <Mailto email="sirajum.qazi@gmail.com" subject="Development Opportunity" body="Hi Serj," target="_blank">
                  sirajum.qazi@gmail.com
                </Mailto>
              </div>

            </div>
            
            <div className="icon text-6xl phone:text-7xl flex justify-center phone:justify-start items-center">
              <FaLinkedin />
              <div className='text-base ml-6 py-8 cursor-pointer hover:scale-110 duration-300 ease-in-out'>
                <Link to='https://www.linkedin.com/in/serjqazi/' target="_blank">
                  linkedin.com/in/serjqazi/
                </Link>
              </div>
            </div>
          </div>

          <div className='p-4 border-2 border-red-500'>
            <form action="">
              <input className='border-2 border-blue-500' type="text" />
              <input className='border-2 border-blue-500' type="text" />
              <textarea className='border-2 border-blue-500' name="" id="" cols="30" rows="10"></textarea>

              <button>Send</button>
            </form>

          </div>
            {/* end of lower section */}
        </div>
        {/* end of wrapper */}
      </div> 
  )
}

export default Contact