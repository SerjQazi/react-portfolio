import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { GoChevronRight } from 'react-icons/all'
import Social from './Social';
import selfPortraitSlate from '../assets/selfPortraitSlate.png';

const Home = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const breakpoint = 640;

  useEffect(() => {
  const handleResizeWindow = () => setWidth(window.innerWidth);
  const handleHeightResize = () => setWidth(window.innerHeight);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    window.addEventListener("resize", handleHeightResize);
    console.log ("Width: ", width + "px")
    console.log ("Height: ", height + "px")
    // console.log ("Height: ", height)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);


  return (
    <div className='mainCardContainer flex justify-center items-center flex-wrap phone:flex-nowrap bg-slate-100'>
      
      <div className="leftSideContainer flex w-full lg:w-3/4">
        
        <div className="textContainer pl-4 my-10 sm:pl-10 md:pl-14 md:pr-6 phone:pl-10 lg:px-14">
          
          <div className='header uppercase font-sans font-black text-slate-700 mt-0 phone:mt-0 2xl:mt-20 mb-2 lg:mb-4'>
            <h3 className='tracking-wide text-2xl sm:text-3xl phone:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl mb-0'>
              Hi There!
            </h3>
            <div className="flex mb-2 md:mb-4 xl:mb-0">
              <h2 className='tracking-wide text-3xl sm:text-4xl phone:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl'>
                I'M
              </h2>
              <h1 className='tracking-wide font-cursive text-yellow-500 text-3xl sm:text-4xl phone:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl phone:ml-2 ml-4 xl:ml-6'>
                Serj Qazi
              </h1>
            </div>
          </div>


          <h3 className='tracking-wide uppercase font-bold text-sm phone:text-xs lg:text-sm xl:text-base 2xl:text-lg text-slate-700 bg-yellow-500 w-fit mb-2 sm:mb-4 phone:mb-2 xl:mb-4 px-2.5 py-0.5 sm:py-1'>
            Frontend Developer
          </h3>

          <div className="tracking-normal font-thin text-xs sm:text-base phone:text-xs lg:text-sm xl:text-base 2xl:text-lg text-slate-700 mb-4 phone:mb-6 lg:mb-8 2xl:mb-10">
            <p>
              A Frontend Developer with a passion for photography and graphic design based out of Guelph, Ontario. Fueled mostly by coffee, I challenge myself everyday to master the tools and concepts of Frontend Development. I am passionate about creating impactful web applications using <span className='font-bold'>React</span>, <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span>, <span className='font-bold'>SASS</span> and <span className='font-bold'>Tailwind</span>. I find myself focused on minimalist clean designs that provide a playful and engaging user experience.
            </p>
          </div>

          <div className="uppercase font-sans font-bold text-slate-700 w-fit text-sm sm:text-base phone:text-xs lg:text-sm xl:text-base 2xl:text-lg hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 duration-500 cursor-pointer">

            <Link to={"./profile/about"} className="flex justify-center items-center px-4 py-2 lg:px-6 lg:py-2 2xl:px-6 2xl:py-4 bg-yellow-500 rounded-xl">
              More About Me<GoChevronRight className='text-3xl ml-2'/> 
            </Link>

          </div>
        </div>
        
        <div className='socialContainer flex justify-center items-center'>
          <Social/>
        </div>

      </div>

      <div className="w-full lg:w-8/12 xl:w-8/12">
          <img className="img" src={selfPortraitSlate} alt="Self Portrait"/>
      </div>
    </div>
  )
}

export default Home;