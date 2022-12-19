import React, { useContext, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import { RootContext } from '../Context/RootContext';


function Main(props) {
  const {parallax , setParallax}  = useContext( RootContext)
  const ref = useRef()
  const location = useLocation()
  const handleScroll = (e)=>{ 
    setParallax(ref.current.scrollTop)

const scroll = parallax
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
    
   if(location.pathname === '/') {
    text.style.marginTop = scroll * 1.5 + 'px';
    leaf.style.top = scroll * -1.5 + 'px';
    leaf.style.left = scroll * 1.5 + 'px';
    hill5.style.left = scroll * 1.5 + 'px';
    hill4.style.left = scroll * -1.5 + 'px';
    hill1.style.top = scroll * 0.5 + 'px';
   }
   
  }
  useEffect(()=>{
    
  },[])
  return (
    <div >
   

    <div className="drawer drawer-mobile">
      <input id="navigation-menu" type="checkbox" className="drawer-toggle" />
      <div onScroll={ handleScroll} ref={ref} className="drawer-content overflow-x-hidden main-content " id='main-content'>
      <Header> </Header>
      <div className='min-h-[80vh]'> <Outlet ></Outlet> </div>
       
        <Footer></Footer>

      </div> 

    <div className="drawer-side"> 
      <Navigation></Navigation>
      </div>
    </div>
</div>
  );
}

export default Main;