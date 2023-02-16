import { Link } from 'react-router-dom';
import React from 'react'
import selfPortrait from '../../assets/selfPortrait.png'
import selfPortraitSlate from '../../assets/selfPortraitSlate.png'
import selfPortraitYellow from '../../assets/selfPortraitYellow.png'

import Social from '../../components/Social';

const Home = () => {
  return (
    <div className='2xl:h-[68.6vh] flex justify-center items-center flex-wrap lg:flex-nowrap bg-slate-100'>
      <div className="relative w-full lg:w-3/4 sm:h-[42vh] py-10 lg:py-0 pl-10 pr-[60px] sm:pr-20 lg:px-8 xl:pl-20 bg-slate-100">
        <h3 className='uppercase font-sans text-2xl sm:text-3xl xl:text-5xl text-slate-900 font-bold leading-8 sm:leading-10'>
          Hi There!
        </h3>
        <div className="flex mb-2 md:mb-4 xl:mb-6">
          <h2 className='font-sans font-bold text-3xl sm:text-4xl xl:text-6xl text-slate-900 leading-8 sm:leading-10'>
            I'M
          </h2>
          <h1 className='uppercase font-cursive font-bold text-3xl sm:text-4xl xl:text-6xl ml-4 xl:ml-6 leading-8 sm:leading-10 text-yellow-500'>
            Serj Qazi
          </h1>
        </div>
        <h3 className='uppercase font-sans font-bold  text-sm xl:text-xl text-slate-900 bg-yellow-500 w-fit my-3 sm:my-4 px-2.5 py-0.5 sm:py-1'>
          Frontend Developer
        </h3>

        <div className="font-sans font-light text-xs sm:text-sm text-slate-900 mb-4 leading-5">
          <p>
            A Frontend Developer with a passion for photography and graphic design based out of Guelph, Ontario. Fueled mostly by coffee, I challenge myself everyday to master the tools and concepts of Frontend Development. I am passionate about creating impactful web applications using <span className='font-bold'>React</span>, <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span>, <span className='font-bold'>SASS</span> and <span className='font-bold'>Tailwind</span>. I find myself focused on minimalist clean designs that provide a playful and engaging user experience.
          </p>
        </div>

        <div className=" xl:mt-10 xl:mb-8 w-fit font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-110 duration-500 cursor-pointer">

          <Link to={"./about"} className="uppercase font-sans font-bold text-slate-900 px-4 py-2 rounded-lg bg-yellow-500 hover:bg-slate-100 focus:text-yellow-500 focus:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
            More About Me
          </Link>
        </div>

        <div className="socialContainer absolute inset-y-1.5 right-2 flex flex-col  justify-center align-middle">

          <Social/>
        </div>

      </div>

      <div className="w-full">
          <img className="img" src={selfPortraitSlate} alt="Self Portrait"/>
      </div>
    </div>
  )
}
export default Home