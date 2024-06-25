import React from 'react'
import Link from 'next/link'
import { FaGithub , FaLinkedinIn ,FaUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

const Hero = () => {
  return (
    <div className=' h-screen text-center' id="home">
    <div className='  flex justify-center items-center flex-col h-full'>
    <span>LET'S BUILD SOMETHING TOGETHER</span>
    <h1 className='  my-2 font-bold leading-relaxed text-4xl'>Hi, I'm <span className='text-[#5651e5]'>Yousef</span> <br/>
    A Front-End Web Developer</h1>
    <p className='text-[#745963] '>I’m focused on building responsive front-end web applications</p>
    <div>
    <ul className='flex pt-4 text-xl flex-wrap justify-center'>
    <Link href='https://github.com/yousef-403' target='blank'><li className='me-5 shadow-xl p-4 text-1xl rounded-3xl hover:scale-110'><FaGithub /></li></Link>
    <Link href='https://www.linkedin.com/in/yousef-maghraby-a555692aa/' target='blank'><li className='mx-5 shadow-xl  p-4 text-1xl rounded-3xl hover:scale-110'><FaLinkedinIn /></li></Link>
   
    </ul>
    </div>
    </div>
    </div>
    
  )
}

export default Hero