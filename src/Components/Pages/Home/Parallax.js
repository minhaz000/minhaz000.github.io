import React, { useContext, useEffect } from 'react';
import { RootContext } from '../../../Context/RootContext';
import Intro from './Intro';

function Parallax(props) {
  const {parallax} = useContext(RootContext)

  return (
    <div >
 
<section id='home' className="parallax h-[35vh] md:h-[80vh]  ">
 
        <img  src="/images/hill1.png" alt=' '  id="hill1"/>
        <img src="/images/hill2.png" alt=' '  id="hill2"/>
        <img src="/images/hill3.png" alt=' '  id="hill3"/>
        <img src="/images/hill4.png" alt=' ' id="hill4"/>
        <img src="/images/hill5.png" alt=' ' id="hill5"/>
        <img src="/images/tree.png" alt=' '  id="tree"/>

        <div id="text" className={ parallax>250?"hidden": `absolute text-white  text-center`} > 
        
            <h2 className=' text-3xl  font-bold'> Hello , I am Minhaz Rahman  </h2>  
              <p className=' mt-2'> A MERN stack developer from Bangladesh</p>
              <a target='_blank' href=' https://drive.google.com/file/d/1EMn36anlkufceqfpMCUAzB6ApnaAIzYW/view?usp=sharing' className=' btn resume  btn-sm mr-16 mt-3 float-right rounded-md'> resume </a>
        </div>
       
        <img src="/images/leaf.png" alt=' '  id="leaf"/>
        <img src="/images/plant.png" alt=' ' id="plant"/>
    </section>
      
    <section id='about' className="sec px-10 py-16">
        <h2 className=' text-center text-4xl uppercase pb-10'>About me </h2>
        <p>
        I am a MERN stack developer from non-CSE background .
        I live in 1700 Gazipur , Bangladesh . 
        Currently studying in <span className='font-semibold italic'> Dhaka Polytechnic Institute </span>  in  <span className='font-semibold italic'> Civil Technology . </span> 
        The fun fact is that I am a civil engineer but fell in love with programming
        <br /> <br /> If something is difficult or challenging for me I think that interesting
            
        </p>
        <Intro> </Intro> 
    </section>
    
    </div>
  );
}

export default Parallax;