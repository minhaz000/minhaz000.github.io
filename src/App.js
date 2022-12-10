import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Blog from './Components/Pages/Blog/Blog';
import HomeContent from './Components/Pages/Home/HomeContent';
import Main from './layouts/Main';
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
          path :"/blog",
          element : <Blog> </Blog>
        }
      ]
    },
  ]);
  return (
    <div>

      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;