import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Netflix from '../assets/Netflix.jpg'
import Twitter from '../assets/Twitter.jpg'
import Working from '../assets/Working.jpg'
import Learning from '../assets/Learing.jpg'

// const images = [Netflix, Twitter];
// const images2 = [Working, Learning]
const Projects = () => {

  return (
    <>
    <div className='h-auto w-screen'>
        <div className='text-center border border-black'>
            <h1 className='text-[15vw] font-[AtlassianSans]'>Work</h1>
        </div>
        {/* <div className='h-auto w-screen'>
          <div className="h-96 w-screen border  border-b-black flex items-center justify-around">
            {images.map((src, index) => (
              <img 
                key={index}
                ref={(el) => (imageRefs.current[index] = el)}
                src={src}
                alt={`Image ${index + 1}`}
                className="h-80 cursor-pointer w-auto rounded-3xl"
                onMouseEnter={() => handleHover(index, 1.1)}
                onMouseLeave={() => handleHover(index, 1)}
              />
            ))}
          </div>
          <div className="h-96 w-screen border border-b-black flex items-center justify-around">
            {images2.map((src, index) => (
              <img 
                key={index}
                ref={(el) => (image2Refs.current[index] = el)}
                src={src}
                alt={`Image ${index + 1}`}
                className="h-80 w-auto cursor-pointer rounded-3xl"
                onMouseEnter={() => handleHover2(index, 1.1)}
                onMouseLeave={() => handleHover2(index, 1)}
              />
            ))}
          </div>
        </div> */}
        <div className='h-[60vh] w-full flex flex-col items-center justify-around'>
            <div className="netfllix h-20 w-5/6 border border-black">
              <h1>Netflix</h1>
            </div>
            <div className="twitter h-20 w-5/6 border border-black">
              <h1>Twitter</h1>
            </div>
            <div className="working h-20 w-5/6 border border-black">
            <h1>Working</h1></div>
            <div className='learning h-20 w-5/6 border border-black'>
            <h1>Learning</h1></div>
        </div>
        
    </div>
    </>
  )
}

export default Projects
