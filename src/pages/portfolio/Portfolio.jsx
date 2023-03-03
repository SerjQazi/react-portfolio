import {React, useState, useEffect} from 'react'

const Portfolio = () => {

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

  return (
      <div className='flex justify-center bg-slate-100 phone:ml-2'>
        <div className="wrapper w-full lg:w-10/12 px-2">

          <div className='flex flex-row-reverse justify-between phone:flex-col mt-4 mb-2'>
            <div className='flex justify-center items-center border-2 border-dashed border-slate-700 border-opacity-50 ml-2 phone:mx-28 phone:mb-4 lg:mt-10 lg:mb-8'>
              <h1 className={width < breakpoint ? mobile : desktop}>
                Portfolio
              </h1>
            </div>
            {/* Header Content / UpperSection in here */}
          </div>


          {/* end of lower section */}
        </div>
        {/* end of wrapper */}
      </div> 
  )
}

export default Portfolio