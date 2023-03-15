import {React, useState, useEffect} from 'react'
import { FaReact, SiJavascript, AiFillHtml5 } from 'react-icons/all'

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
  const desktop = 'uppercase text-center font-black tracking-widest text-slate-700 phone:text-xl 2xl:text-8xl py-6 phone:py-2'

  return (
    <div className='mb-4'>
      <h3 className='uppercase font-bold text-slate-700 text-base phone:text-base sm:text-2xl mb-2 phone:mb-1 mt-4'>
        Education
      </h3>

      <div className=''>
        <div className="text-slate-700">
          <p className='font-thin text-sm phone:text-xs mb-2 phone:mb-0.5'>Juno College Of Technology</p>

          <p className='ml-2 text-xs phone:text-[0.5rem] flex justify-start items-center'><FaReact className='mr-1'/>React Development |<SiJavascript className='mx-1'/> JavaScript |<AiFillHtml5 className='mx-1'/> HTML5 & CSS3</p>
        </div>
      </div>
    
    </div>
  )
}

export default Resume