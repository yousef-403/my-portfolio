"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaGithub , FaLinkedinIn ,FaUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

const NavBar = () => {
  const [nav,setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav)
  }
  return (
    <div className=' py-4  fixed  w-full shadow-md bg-slate-100'>
        <div className=' flex justify-between items-center px-11 w-[88%] m-auto'>
            <h1 className='text-5xl font-light'><Link href="/#home">YM</Link></h1>
           
            <ul className=' md:flex hidden justify-between gap-5 uppercase text-sm'>
              <Link href='/#home'> <li>Home</li></Link>
              <Link href='/#about'> <li>About</li></Link>
              <Link href='/#skills'> <li>Skills</li></Link>
              <Link href='/#projects'> <li>Projects</li></Link>
              <Link href='/#contact'> <li>Contact</li></Link>
            </ul>
            <div className=' md:hidden'>
            <CiMenuBurger size={25} onClick={handleNav}/>
            </div>
        </div>
        <div className={nav ? "md:hidden fixed top-0 left-0 bg-black/70 w-full h-screen " : ""}>
          <div className={nav ? "fixed top-0 left-0 w-[65%]  h-screen text-[#745963] bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 ease-in duration-500"}>
           <div className='flex justify-between'>
           <h1 className='text-5xl font-light'>YM</h1>
           <IoIosCloseCircleOutline  onClick={handleNav} size={30}/>
           </div>
              <p className='pt-5 '>Let's build something legendary together</p>
            
            <ul className=' uppercase text-sm flex flex-col gap-4 py-10 px-1'>
              <Link href='/#home'> <li>Home</li></Link>
              <Link href='/#about'> <li>About</li></Link>
              <Link href='/#skills'> <li>Skills</li></Link>
              <Link href='/#projects'> <li>Projects</li></Link>
              
              <Link href='/'> <li>Contact</li></Link>
            </ul>
            <div className='fixed bottom-10'>
              <p>LET'S CONNECT</p>

              <ul className='flex pt-4 text-xl'>
              <Link href='/'><li className='me-5 shadow-xl p-2 rounded-lg'><FaGithub /></li></Link>
              <Link href='/'><li className='mx-5 shadow-xl p-2 rounded-lg'><FaLinkedinIn /></li></Link>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default NavBar