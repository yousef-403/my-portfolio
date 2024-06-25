/* eslint-disable @next/next/no-img-element */
import React from 'react'

const About = () => {
  return (
    <div className=' w-3/4 m-auto  pt-28 mb-56' id="about">
      <div className='flex justify-between  flex-wrap'>
        <div className=' w-2/3 '>
          <h2 className='text-slate-600 text-2xl'>About</h2>
          <h3>Who I Am</h3>
          <p>I am Yousef Maghraby frontend developer, I build simple, beautiful  interface,
          I develop many types of frontends by React, Next,
          I passionate to learn more and more.    </p>
          
        </div>
        <div className='xl:w-1/3 '>
          <img className=' shadow-xl hover:p-2 shadow-black' src='https://portfolio-next-al6d349gf-fireclint.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout.82cd556f.jpg&w=640&q=75' alt='image'/>
        </div>
      </div>
    </div>
  )
}

export default About