import LocomotiveScroll from 'locomotive-scroll'
import React, { useEffect, useRef, useState } from 'react'
import 'locomotive-scroll/dist/locomotive-scroll.css';
const SmoothScroll = ({children}) => {
    const scrollRef = useRef(null);
    useEffect(()=>{
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,      // Enables smooth scrolling
            smoothMobile: true // Ensures smooth scrolling on mobile too
        });

        return () => {
            scroll.destroy(); // Clean up the Locomotive instance
        };
    },[])
  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  )
}

export default SmoothScroll
