import React from 'react'
import Image from 'next/image'



const Projects= () => {
  return (
    <div className="pt-16 pb-16" id="projects">
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            A smal selection of 
            <span className='text-cyan-300'> working projects </span>
        </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
            {/* 1ºprojeto */}
            <div>
                <a href="https://github.com/samuelgomes303/MongoDb"
                    target="_blank"
                    rel="noopener noreferrer">
                <Image src="/images/p1.jpg" alt="img" width={800} height={650} className='rounded-lg' />
                </a>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Renting Platform for Properties
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>
                    APPS, UI/UX
                </h1>
            </div>
            {/* 2ºprojeto */}
            <div>
                <a href="https://github.com/samuelgomes303/MongoDb"
                    target="_blank"
                    rel="noopener noreferrer">
                <Image src="/images/p2.jpg" alt="img" width={800} height={650} className='rounded-lg'/>
                </a>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Workout Tracker Application
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>
                    APPS, UI/UX
                </h1>
            </div>
            {/* 3ºprojeto */}
            <div>
                <a href="https://github.com/samuelgomes303/MongoDb"
                    target="_blank"
                    rel="noopener noreferrer">
                <Image src="/images/p2.jpg" alt="img" width={800} height={650} className='rounded-lg'/>
                </a>
                <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                    Repository for films and series
                </h1>
                <h1 className='pt-2 font-medium text-white/80'>
                    APPS, UI/UX
                </h1>
            </div>
        </div>  
    </div>
  )
}

export default Projects