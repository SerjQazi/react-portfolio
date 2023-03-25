import {React, useState, useEffect} from 'react'

import Experience from './Experience'
import Education from './Education'

const Resume = () => {

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

  return (
      <div className='flex justify-center items-center bg-slate-100'>
        <div className="wrapper w-full md:w-11/12 lg:w-full px-2 md:px-0 lg:px-4 2xl:px-8 phone:h-auto sm:px-4 phone:px-0 phone:pr-2">

          <div className='flex flex-row-reverse justify-between sm:flex-col my-4'>
            <div className='absolute sm:static flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 ml-2 sm:mx-28 xl:mx-48 sm:mb-4 lg:mb-4 xl:mb-8'>
              <h1 className={width < breakpoint ? mobile : desktop}>
                Resume
              </h1>
            </div>
            <div>

              <Experience />
              <Education />
            </div>
          </div>
          {/* end of lower section */}
        </div>
        {/* end of wrapper */}
      </div> 
  )
}

export default Resume