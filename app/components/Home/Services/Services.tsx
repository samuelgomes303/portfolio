import React from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <div className='pt-16 pb-16' id="services">
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            Set of Skills in diferent areas
        </h1>
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServiceCard 
                    icon={"/images/s1.png"} 
                    name="Frontend Development" 
                    description="React.js, Angular, HTML, CSS, JavaScript, TypeScript"/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServiceCard 
                    icon={"/images/s2.png"} 
                    name="Backend Development" 
                    description="C#, Java, Python, Node.js"/>
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServiceCard 
                    icon={"/images/s3.png"} 
                    name="DevOps Infrastructure" 
                    description="Docker, Kubernetes, CI/CD pipelines"/>
            </div>
        </div>
    </div>
  )
}

export default Services