
import React from 'react'
import Link from 'next/link'
import { FaGithub , FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  return (
    <div className='w-3/4 m-auto mt-3 pt-20 mb-20' id='contact'>
        <h2 className='text-2xl text-slate-600'>Contact Me</h2>
        <div>
        <div className='p-5 shadow-md '>
        <p>Phone: <span className=' text-blue-400'>+20 01154764252</span></p>
      </div>

      <div className='p-5 shadow-md '>
      <p>Email: <span className=' text-blue-400'>yousefmaghraby401@gmail.com</span></p>
    </div>

    <div className='p-5 shadow-md '>
    <p>Soical Media: <span className=' text-blue-400 text-2xl flex gap-4 mt-2'>
    
    <Link href="https://github.com/yousef-403" target='blank' className='hover:text-slate-600'><FaGithub /></Link>
    
    <Link href="https://www.linkedin.com/in/yousef-maghraby-a555692aa/" target='blank' className='hover:text-slate-600'><FaLinkedinIn /></Link>
    
    </span></p>
  </div>

        </div>
      </div>
      
  
       

  )
}

export default Contact
