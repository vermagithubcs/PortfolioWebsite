import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
const CursorFollow = () => {
    const circleRef = useRef(null);
  useEffect(()=>{
    const mouseCursor = (e) =>{
      gsap.to(circleRef.current,{
        x: e.clientX,
        y:e.clientY,
        duration:0.5,
        ease:"power2.out"
      })
    }
    window.addEventListener('mousemove', mouseCursor);
    return ()=> window.removeEventListener('mousemove', mouseCursor)
  })
  return <div ref={circleRef} className='cursor h-10 w-10 border border-black rounded-[50%] top-0 left-0 pointer-events-none z-[1000] fixed mix-blend-difference'></div>
}

export default CursorFollow
