import { Link } from 'react-router-dom';
import React from 'react'
import selfPortrait from '../assets/selfPortrait.png'
import selfPortraitYellow from '../assets/selfPortraitYellow.png'
import selfPortraitSlate from '../assets/selfPortraitSlate.png'

import Social from '../components/Social';

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-wrap phone:flex-nowrap bg-slate-100'>
      <div className="relative w-full lg:w-3/4 py-10 phone:py-4 phone:mb-10 pl-10 sm:pl-12 phone:px-8 pr-[60px] sm:pr-20 lg:px-8 xl:pl-20 bg-slate-100">
        <h3 className='uppercase font-sans text-2xl sm:text-3xl phone:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl text-slate-700 font-black leading-8 sm:leading-10 phone:leading-6 2xl:leading-tight'>
          Hi There!
        </h3>
        <div className="flex mb-2 md:mb-4 xl:mb-0">
          <h2 className='font-sans font-black text-3xl sm:text-4xl phone:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl text-slate-700 leading-8 sm:leading-10 phone:leading-6 2xl:leading-tight'>
            I'M
          </h2>
          <h1 className='uppercase font-cursive font-black text-3xl sm:text-4xl phone:text-xl lg:text-3xl xl:text-5xl 2xl:text-6xl phone:ml-2 ml-4 xl:ml-6 leading-8 sm:leading-10 phone:leading-6 2xl:leading-tight text-yellow-500'>
            Serj Qazi
          </h1>
        </div>
        <h3 className='uppercase font-sans font-bold  text-sm phone:text-xs lg:text-sm xl:text-base 2xl:text-lg text-slate-700 bg-yellow-500 w-fit my-3 sm:my-4 phone:my-2 xl:my-3 xl:mb-4 px-2.5 py-0.5 sm:py-1'>
          Frontend Developer
        </h3>

        <div className="font-sans font-thin text-xs sm:text-base phone:text-xs lg:text-sm xl:text-base 2xl:text-lg text-slate-700 mb-4 tracking-wide leading-5 sm:leading-6 phone:leading-4">
          <p>
            A Frontend Developer with a passion for photography and graphic design based out of Guelph, Ontario. Fueled mostly by coffee, I challenge myself everyday to master the tools and concepts of Frontend Development. I am passionate about creating impactful web applications using <span className='font-bold'>React</span>, <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span>, <span className='font-bold'>SASS</span> and <span className='font-bold'>Tailwind</span>. I find myself focused on minimalist clean designs that provide a playful and engaging user experience.
          </p>
        </div>

        <div className=" xl:my-8 w-fit font-bold text-sm sm:text-base phone:text-xs lg:text-sm xl:text-base 2xl:text-lg hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-110 duration-500 cursor-pointer">

          <Link to={"./profile/about"} className="uppercase font-sans font-bold text-slate-700 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-slate-100 focus:text-yellow-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            More About Me
          </Link>
        </div>

        <div className="socialContainer absolute inset-y-1.5 right-2 sm:right-3 phone:inset-x-0 phone:top-[19.2rem] lg:top-[25rem] xl:top-[32.5rem] 2xl:top-[38rem] flex flex-col phone:flex-row justify-center align-middle">

          <Social/>
        </div>

      </div>

      <div className="w-full">
          <img className="img" src={selfPortraitSlate} alt="Self Portrait"/>
      </div>
    </div>
  )
}
export default Home;