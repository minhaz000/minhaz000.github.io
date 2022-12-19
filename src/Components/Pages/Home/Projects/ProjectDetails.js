import React, { useContext} from 'react';
import { RootContext } from '../../../../Context/RootContext';

function ProjectDetails(props) {
  const {currentProject} = useContext( RootContext)
  console.log( currentProject)
  return (
    <div>
      <div>
      <a className='' href={currentProject.live}>
      <img className=' h-[300px] w-[500px]' src={currentProject.photoURL} alt="" />
      </a>
      </div>
   <p> Project Name: { currentProject.title}</p>
   <p> Project description:{currentProject.description}</p>
   <p> 
    <a className=' text-blue-600' href={currentProject.live}>  Live link</a> <br />
    <a className=' text-blue-600' href={currentProject.client}> Client Code link</a> <br />
    <a className=' text-blue-600' href={currentProject.server}> server Code link</a>
    </p>
    </div>
  );
}

export default ProjectDetails;