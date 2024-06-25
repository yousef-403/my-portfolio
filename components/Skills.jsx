import { FaHtml5,FaCss3,FaBootstrap ,FaReact  } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <div className=" w-3/4 m-auto pt-20 mb-36 " id="skills">
        <h3 className=" text-slate-600 text-2xl">Skills</h3>
        <div className="flex items-center gap-3 justify-between flex-wrap">
            <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full">
           <span> <FaHtml5 size={50}/></span>
               <span> HTML</span> 
            </div>
            <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full">
            <span> <FaCss3 size={50}/></span>
                <span> Css</span> 
             </div>
             <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full gap-3">
               <span> <FaBootstrap  size={50}/></span>
                   <span> Bootstrap</span> 
                </div>
                <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full gap-3">
                <span> <SiTailwindcss  size={50}/></span>
                    <span> Tailwind</span> 
                 </div>
             <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full gap-3">
             <span> <IoLogoJavascript size={50}/></span>
                 <span> Javascript</span> 
              </div>
              <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full gap-3">
              <span> <FaReact  size={50}/></span>
                  <span> ReactJs</span> 
               </div>
               <div className=" p-5 shadow-xl flex items-center xl:w-1/5 md:w-1/3 w-full gap-3">
               <span> <TbBrandNextjs size={50}/></span>
                   <span> NextJs</span> 
                </div>
               
               
        </div>


    </div>
  )
}

export default Skills