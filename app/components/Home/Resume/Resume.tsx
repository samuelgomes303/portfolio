import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'

const Resume = () => {
  return (
    <div className='pt-20 pb-16' id='resume'>
        <h1 className='text-center text-3xl sm:text-4xl font-bold text-white'>
            Projects <span className='text-cyan-200'> Developed </span>
        </h1>
        <div className="w-[90%] sm:w-[70%] lg:w-[80%] mx-auto">
            {/* work dispaly */}
            <div>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen}
                        role="Financial Asset Management System"
                        description="Developed a web application using C#/.NET Core, ASP.NET Core MVC and Blazor
                        for financial asset management, implementing profit and tax calculations, role-based authentication
                        with ASP.NET Identity, and data persistence using Entity Framework Core and PostgreSQL."/>
                    <ResumeCard Icon={FaReact} 
                        role="Audio transcription and analysis system with LLM"
                        description="Developed a web solution for local audio processing and multi-speaker transcription using
                        Pyannote.audio and Vosk, with a React frontend and Flask backend. Integrated Ollama to automatically summarize
                        transcriptions using a local LLM."/>
                    <ResumeCard Icon={BsDatabase} 
                        role="DevOps Project - ToDo List Application"
                        description="Developed a web application focused on DevOps and SDLC practices, implementing a CI/CD pipeline with GitHub Actions,
                        SonarCloud and Docker. Automated deployment to Microsoft Azure and configured Kubernetes manifests for scalable application deployment."/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume