import React, { useState } from 'react';

function ProjectCard({data}) {
  const [state,setState] =useState(false)

  return (
    <div className='' >
      <div onMouseOver={()=>setState(true)} onMouseLeave={()=>setState(false)} className=" grid grid-cols-2  shadow-xl  bg-slate-800 text-white rounded-md cursor-pointer  ">
  <div className="px-5 col-span-1 self-center ">
    <h2 className="text-2xl text-center font-bold">{data.title}</h2>
    
  </div>
   <div className=' col-span-1 my-5 mx-8 '>
   
    <img src={data.photoURL}  className={` h-[130px] w-[238px] rounded-lg cursor-pointer ${state? 'projectImg' :'' }`} alt={data.title}/>

    </div>
</div>
    </div>
  );
}

export default ProjectCard;