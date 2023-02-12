import { Link } from 'react-router-dom';
import React from 'react'
import selfPortrait from '../../assets/selfPortrait.jpg'

const Home = () => {
  return (
    <div className='flex justify-center items-center flex-wrap lg:flex-nowrap bg-slate-100'>
      <div className="w-full py-8 lg:py-2 xl:py-6 px-16 lg:px-8 xl:pl-20 bg-slate-100">
        <h3 className='uppercase font-sans text-2xl md:text-3xl xl:text-5xl font-bold leading-normal'>
          Hi There!
        </h3>
        <div className="flex mb-2 md:mb-4 xl:mb-6">
          <h2 className='font-sans font-bold text-3xl md:text-4xl xl:text-6xl leading-normal'>
            I'M
          </h2>
          <h1 className='uppercase font-cursive font-bold text-3xl md:text-4xl xl:text-6xl ml-4 xl:ml-6 leading-normal text-yellow-500'>
            Serj Qazi
          </h1>
        </div>
        <h3 className='uppercase font-sans font-bold md:text-sm xl:text-xl bg-yellow-500 w-fit mb-4 px-2.5 py-1'>
          Frontend Developer
        </h3>

        <div className="font-sans font-light text-base mb-4 leading-7">
          <p>
            A Frontend Developer with a passion for photography and graphic design based out of Guelph, Ontario. Fueled mostly by coffee, I challenge myself everyday to master the tools and concepts of Frontend Development. I am passionate about creating impactful web applications using <span className='font-bold'>React</span>, <span className='font-bold'>JavaScript</span>, <span className='font-bold'>HTML</span>, <span className='font-bold'>SASS</span> and <span className='font-bold'>Tailwind</span>. I find myself focused on minimalist clean designs that provide a playful and engaging user experience.
          </p>
        </div>

        <div className="px-4 py-2 xl:mt-10 xl:mb-8 w-fit font-bold rounded-lg bg-yellow-500 
        hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-110 duration-700 cursor-pointer">
          <Link to={"./about"} className="uppercase font-sans font-bold">More About Me</Link>
        </div>
      </div>
      <div className="w-full h-fit">
          <img className="img" src={selfPortrait} alt="Self Portrait" />
      </div>
    </div>
  )
}
export default Home