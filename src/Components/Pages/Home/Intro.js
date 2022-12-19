import React from 'react';

function Intro(props) {
  return ( <> 
  <h1 className=' text-2xl text-white mt-20'> My skills  </h1>
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 my-9 '>
        <div className='flex  md:mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>HTML</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="90" max="100"></progress>
        </div>
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>CSS</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="90" max="100"></progress>
        </div>
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>BootStrap</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="80" max="100"></progress>
        </div>
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>Tailwind</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="70" max="100"></progress>
        </div> 
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>JavaScript</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="90" max="100"></progress>
        </div> 
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>NodeJS</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="70" max="100"></progress>
        </div>
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>ReactJS</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="90" max="100"></progress>
        </div>
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>MongoDB</span> 
                    <progress className="progress progress-success bg-white mt-2  " value="80" max="100"></progress>
        </div> 
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>ExpressJS </span> 
                    <progress className="progress progress-success bg-white mt-2  " value="70" max="100"></progress>
        </div>
        <div className='flex  mx-7'> 
                    <span className=' text-white font-bold pr-3 flex'>NextJS </span> 
                    <progress className="progress progress-success bg-white mt-2  " value="50" max="100"></progress>
        </div>
        

    </div>
    </> );
}

export default Intro;