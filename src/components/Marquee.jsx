import React from 'react'
import {motion} from "framer-motion"
function Marquee() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1"
    className='w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
       <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden '>
        <motion.h1 
        initial={{x: "0"}}
        animate={{x: "-100%"}}
        transition={{repeat:Infinity , ease: "linear" , duration: 10}}
        className='-mt-2 pb-3 text-[17vw] leading-none font-semibold uppercase tracking-tighter pr-20'> we are ochi</motion.h1>
        <motion.h1 
        initial={{x: "0"}}
        animate={{x: "-100%"}}
        transition={{repeat:Infinity , ease: "linear" , duration: 10}}
        className=' -mt-2 pb-3 text-[17vw] leading-none font-semibold uppercase tracking-tighter pr-20' > we are ochi</motion.h1>
       </div>
    </div>
  )
}

export default Marquee
