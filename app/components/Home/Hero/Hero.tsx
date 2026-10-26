"use client"
import React from 'react'
import Image from 'next/image'
import TyperWritter from 'typewriter-effect'
import { BsArrowBarRight } from 'react-icons/bs'
import ParticlesHero from './ParticleBackground'


const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault()

  const element = document.getElementById('resume')
  element?.scrollIntoView({ behavior: 'smooth' })
}


const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
      <ParticlesHero/>
        <div className='relative z-10 flex flex-col items-center'>
            <Image src={"/images/s1.jpeg"} alt="heroimage" width={150} height={150} className="rounded-full border-8
            border-[#0c0c048aa]" data-aos="fade-up"/>
            <h1 data-aos="fade-up" data-aos-delay="200" className="text-2xl sm:text-4xl md-text-5xl lg:text-6xl mt-6 text-center font-bald tracking-wide">
              Hello, my name is <span className='text-cyan-200'> Samuel Gomes </span> <br/>
              <span className='text-cyan-200'> and I'm a Software Engineer </span> 
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm_text-2xl font-medium flex items-center'>
              SAMUEL GOMES
            <span className='text-cyan-200 font-bold'>
              <TyperWritter options={{
                strings:[
                  "Backend Developer",
                  "Frontend Developer",
                  "Web Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}/>
            </span>
          </h2>
          
          <button onClick={handleClick} data-aos="fade-up" data-aos-delay="600" className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transtion all duration-300
          cursor-pointer rounded-full text-lg font-medium'>
            <span> See my work </span>
            <BsArrowBarRight className='w-5 h-5 ml-2 inline-block'/>
          </button>

        </div>
    </div>
  )
}

export default Hero