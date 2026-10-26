"use client";
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import { Skills } from './Skils/Skills'
import Contact from './Contact/Contact'
import AOS, { init } from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Education from './Education/Education';

const Home = () => {

  useEffect(()=>{
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration:1000,
        easing:'ease',
        once: true,
        anchorPlacement: "top-bottom",
      })
    };
    initAOS();
  }, []);

  
  return (
    <div id="home" className="overflow-hidden"> 
      <Hero/>
      <Services/>
      <Resume/>
      <Projects/>
      <Education/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default Home