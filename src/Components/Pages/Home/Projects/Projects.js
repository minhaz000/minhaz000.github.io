import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RootContext } from '../../../../Context/RootContext';
import ProjectCard from './ProjectCard';

function Projects(props) {
  const {setCurrentProject} = useContext( RootContext)
  const [projects,setProjects] = useState()
  useEffect(()=>{ 
    const url = 'projects.json'
  axios.get(url).then(res=>{ setProjects(res.data) })
  },[])
  return (
    <div id='projects' className='py-16 ' style={{background:'rgb(30 109 89)'}} >
      <h1 className=' text-4xl text-center text-white uppercase mb-10'> Projects </h1>

    <div className=' grid grid-cols-1  md:grid-cols-2 mx-8 gap-4'> 
    { projects?.map(item=>{return(
      <Link key={item._id} onClick={()=> {setCurrentProject(item); localStorage.setItem('currentProject', JSON.stringify(item))} } to={`project/${item._id}`}> 
      <ProjectCard  data={item}> </ProjectCard>
      </Link>
    )})

    }
  
    </div>
    
      
    </div>
  );
}

export default Projects;