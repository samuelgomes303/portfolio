import React from 'react'
import ResumeCard from '../Resume/ResumeCard'
import { IoSchoolOutline } from "react-icons/io5";


const Education = () => {
  return (
    <div className='pt-20 pb-16' id='education'>
        <div className='w-[90%] sm:w-[70%] mx-auto'>
            {/* education dispaly */}
                <h1 className='text-center text-3xl sm:text-4xl font-bold text-white'>
                   My <span className='text-cyan-200'> Education</span>
                </h1>
                <div className='mt-10' data-aos="zoom-out" data-aos-anchor-placement="top-center">
                    <ResumeCard 
                        Icon={IoSchoolOutline}
                        role="Licenciatura em Engenharia Informáica"
                        date="September 2019 - February 2026"
                        description="Throughout my academic journey, I developed skills and practical experience in the following areas:"
                        descriptionPoints={[
                            "Software Development: Object-oriented programming (OOP) using Java and C#, software architecture principles (SOLID and Design Patterns), and coding best practices.",
                            "Databases and ORM: Database management using SQL Server and PostgreSQL, with ORM tools such as Hibernate, JPA, and Prisma.",
                            "Software Infrastructure: Version control, basic containerization, unit testing, and Agile methodologies, particularly Scrum."
                        ]}/>
                </div>
            </div>
        </div>
  )
}

export default Education