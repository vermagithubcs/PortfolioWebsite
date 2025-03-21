import React from 'react'

const ComputerAnimation = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-evenly'>
        <div className="line relative left-[50%] -translate-x-1/2 h-[2px] w-[25%] bg-black"></div>
        <div className="line relative left-[50%] -translate-x-1/2 h-[2px] w-[50%] bg-black"></div>
        <div className="line relative left-[50%] -translate-x-1/2 h-[2px] w-[70%] bg-black"></div>
        <img className='h-[30rem] w-auto left-1/2 -translate-x-1/2 absolute' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" />
    </div>
  )
}

export default ComputerAnimation
