import React from 'react';
import Contract from './Contract';
import Parallax from './Parallax';
import Projects from './Projects/Projects';


function HomeContent(props) {
  return (
    <div>
       <Parallax> </Parallax>
       
     	<Projects> </Projects>
      <Contract> </Contract> 
    
    </div>
  );
}

export default HomeContent;