import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Blog from './Components/Pages/Blog/Blog';
import HomeContent from './Components/Pages/Home/HomeContent';
import Main from './layouts/Main';
import ProjectDetails from './Components/Pages/Home/Projects/ProjectDetails';
function App(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main> </Main> ,
      children : [
        {
          path : '' ,
          element : <HomeContent> </HomeContent>
        },
        {
          path: '/project/:ID',
          element: <ProjectDetails> </ProjectDetails>
        },
        {
          path :"/blog",
          element : <Blog> </Blog>
        }
      ]
    },
  ],{ basename :'/'});
useEffect(()=>{
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesuredZone = document.getElementById('gesuredZone');

gesuredZone.addEventListener('touchstart', function(event) {touchstartX = event.changedTouches[0].screenX;touchstartY = event.changedTouches[0].screenY;}, true);
gesuredZone.addEventListener('touchend', function(event) {touchendX = event.changedTouches[0].screenX;touchendY = event.changedTouches[0].screenY; handleGesure();}, true); 
function handleGesure() {
  if (touchendX < touchstartX) {document.getElementById('navigation-menu').checked = false;} 
  if (touchendX-touchstartX>40 && touchendY-touchstartY<30 && touchendY-touchstartY>-30) {document.getElementById('navigation-menu').checked = true;}
}
},[])

  return (
    <div id='gesuredZone'>


      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;