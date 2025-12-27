import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 lg:px-56'>
      <h1 className='font-extrabold text-center mt-10 
        text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight'>
        <span className="text-[#f56551] block">
          Discover Your Next Adventure with AI:
        </span>
        <span className="block mt-5">
          Personalized Itineraries at your Fingertips
        </span>
      </h1>
      <p className='mt-6 text-center text-gray-500 font-medium text-sm sm:text-base md:text-lg whitespace-nowrap overflow-hidden text-ellipsis'>
        your personal trip planner and curator, creating custom itineraries taillored to your intrests and bidget
      </p>
      <Link to={'/create-trip'}>
        <button className='box mt-5'>Get Started, It's Free</button>
      </Link>
    </div>
  )
}

export default Hero
