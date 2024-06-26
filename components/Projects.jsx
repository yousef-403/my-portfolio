import Image from "next/image"
import img1 from "/public/Screenshot_29-5-2024_123134_.jpeg"
import img2 from "/public/Screenshot_30-5-2024_121644_localhost.jpeg"
import img3 from "/public/Screenshot_31-5-2024_163557_localhost.jpeg"
import Link from "next/link"
import './project.css'


const Projects = () => {
  return (
    <>
  
 <div className=" w-3/4 m-auto pt-20" id="projects">
     <h2 className="my-4 text-slate-600 text-2xl">Projects</h2>
     <div className="flex flex-wrap  justify-center">
       <div className=" lg:w-1/2 w-full ">
         <Link href="https://cava-clone.netlify.app" passHref={true} target="blank">
           <Image className=" image w-4/5 shadow-l  hover:p-1" src ={img1} width={500} height={500} alt="project one"/>
           <h3 className="py-3">Html Css Javascript E-Commerce</h3>
         </Link>
       </div>
       <div className="lg:w-1/2 w-full ">
       <Link href="https://github.com/yousef-403/dashbard-reactjs" passHref={true} target="blank">
       <Image className=" image w-4/5 shadow-l  hover:p-1" src ={img2} width={500} height={500} alt="project two"/>
       <h3 className="py-3">React Medical Dashboard </h3>
          </Link>
       </div>
       <div className="lg:w-1/2 w-full">
       <Link href="https://github.com/yousef-403/React-Ecommerce" passHref={true} target="blank">
       <Image className=" image w-4/5 shadow-l  hover:p-1" src ={img3} width={500} height={500} alt="project three"/>
       <h3 className="py-3">React E-Commerce</h3>
          </Link>
       </div>


     </div>
   </div>   

   
    </>
  )
}

export default Projects