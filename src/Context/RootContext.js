import React, { createContext, useState } from 'react';

export const RootContext = createContext({})
function Context({children}) {
  const [parallax , setParallax] = useState(0)
  const [currentProject , setCurrentProject] = useState(JSON.parse(localStorage.getItem('currentProject')))
  const RootContextValue = {parallax,setParallax , currentProject, setCurrentProject}
  return ( <RootContext.Provider value={RootContextValue}>
             { children}
           </RootContext.Provider>
     );
}

export default Context;