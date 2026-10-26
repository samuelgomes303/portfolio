"use client";
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript, SiPython, SiReact, SiAngular  } from 'react-icons/si'
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import Tilt from 'react-parallax-tilt'

const skills =[
    {
        name: 'Java',
        icon: <FaJava/>
    }, {
        name: 'C#',
        icon: <TbBrandCSharp/>
    },
    {
        name: 'Python',
        icon: <SiPython/>
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs/>
    },
    {
        name: 'React.js',
        icon: <SiReact/>
    },
    {
        name: 'Angular',
        icon: <SiAngular/>
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs/>
    },
    {
        name: 'JavaScript',
        icon: <SiJavascript/>
    },
    {
        name: 'Typescript',
        icon: <SiTypescript/>
    },
    {
        name: 'TailwindCSS',
        icon: <SiTailwindcss/>
    }
]

export const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16' id="skills">
       <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        My <span className='text-cyan-300'> skills </span>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 mt-16'>
           {skills.map((skill)=> {
                return (
                <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
                    <div className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center
                    justify-center shadow-lg transition hover:scale-105'>
                        <div className='text-5xl mb-4 text-gray-300'>{skill.icon}</div>
                        <p className='text-purple-400 mt-1'>{skill.name}</p>
                    </div>
                </Tilt>
                )   
            })} 
        </div>
    </div>
  )
};

export default Skills;
