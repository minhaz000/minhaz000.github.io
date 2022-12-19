import React from 'react';
import { FaBloggerB, FaBook, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsGearWideConnected } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { NavLink, useLocation } from 'react-router-dom';

function Header(props) {
  const location = useLocation()

  return (
    <>
   <label htmlFor="navigation-menu" className="drawer-overlay"></label> 
    <ul className="menu  w-[300px]  pt-10 theme-background   ">
     <div className='ml-auto text-right px-5 md:px-10 mb-10 md:mb-0 grid grid-cols-4 md:grid-cols-1 '> 
      <div className='row-span-2 mt-3 col-span-1 grid justify-items-end '> 
            <img className='  h-[70px] w-[70px]' src="/images/avatar.jpg" alt="" />
      </div>
    
      <h1 className='col-span-3 mt-5 text-xl font-bold'> Minhaz Rahman</h1>
      <h1 className='col-span-3 mb-8'> MERN stack developer </h1>
     </div>
     
     {location.pathname==='/' ? 
      <li ><a href='#home' className={location.hash==='#home'?'active':''}>  <div className='ml-20 flex '> <span className=' mt-1 mr-3'> <AiFillHome /> </span>  Home</div>  </a> </li>:
      <li ><NavLink href="#home" to='/'>  <div className='flex ml-20 '> <span className=' mt-1 mr-3'> <AiFillHome /> </span>  Home</div>  </NavLink> </li>
    }
      
      <li ><a href='#about' className={location.hash==='#about'?'active':''}>  <div className='ml-20 flex '> <span className=' mt-1 mr-3'> <FaBook /> </span> About Me</div>  </a> </li>
      <li ><a href='#projects' className={location.hash==='#projects'?'active':''}>  <div className='ml-20 flex '> <span className=' mt-1 mr-3'> <AiOutlineProject /> </span>Projects</div>  </a> </li>
      <li ><a href='#connect' className={location.hash==='#connect'?'active':''}>  <div className='ml-20 flex '> <span className=' mt-1 mr-3'> <BsGearWideConnected /> </span>Connect</div>  </a> </li>
      <li ><NavLink to='/blog' >  <div className='ml-20 flex '> <span className=' mt-1 mr-3'> < FaBloggerB /> </span>  Blog</div>  </NavLink> </li>
    
    
      <div className='absolute bottom-5  flex justify-center w-full  text-2xl [&>*]:mx-2'>
<a target='_blank' href=" https://github.com/minhaz000"> <FaGithub /> </a>
<a target='_blank'  href=" https://wa.me/+8801533361322"> <FaWhatsapp /> </a>
<a target='_blank'  href=" https://www.facebook.com/minhaz3301/"> <FaFacebook /></a>
<a target='_blank'  href=" https://www.instagram.com/mrmminhaz/"> <FaInstagram /> </a>
<a target='_blank'  href=" https://www.linkedin.com/in/minhaz000/"> <FaLinkedin /> </a>
      </div>
     
     

    </ul>

   
    </>
  );
}

export default Header;