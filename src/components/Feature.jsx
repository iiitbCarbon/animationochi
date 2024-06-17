import React, { useState } from 'react'
import {motion} from "framer-motion"
import {Power4} from "gsap/all"
function Feature() {

const [isHovering1 , setHovering1] = useState(false)
const [isHovering2 , setHovering2] = useState(false)

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
         <h1 className='text-8xl tracking-tight'>Featured Products</h1>
       
      </div>
      <div className='px-20'>
      <div className='cards w-full flex mt-10 gap-10 '>
            <div 
            onMouseEnter={()=>setHovering2(true)}
            onMouseLeave={()=>setHovering2(false)}
            className='cardcon w-1/2 h-[75vh]  relative'>

             <h1 className=' absolute flex overflow-hidden text-[#CDEA68] -translate-x-[50%] left-full top-1/2 -translate-y-1/2 leading-none tracking-tighter text-8xl z-[9]'>
              {"FYDE".split('').map((item,idx)=>(<motion.span key={idx} 
              initial={{y:"100%"}} 
              animate={isHovering2 ? {y:"0%"} : {y:"100%"} }
              transition={{ease: Power4.easeInOut, delay:idx*0.1 }}
              className='inline-block'>{item}</motion.span>))}
             </h1>

            <div className='w-full h-full rounded-xl  overflow-hidden'>
               <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' ></img>
            </div>
            </div>
            <div 
            onMouseEnter={()=>setHovering1(true)}
            onMouseLeave={()=>setHovering1(false)}
            className='cardcon w-1/2 h-[75vh] relative'>
            <h1 className=' absolute flex overflow-hidden text-[#CDEA68] translate-x-[50%] right-full top-1/2 -translate-y-1/2 leading-none tracking-tighter text-8xl z-[9]'>
            {"VISE".split('').map((item,idx)=>(<motion.span 
               
               initial={{y:"100%"}} 
               animate={isHovering1 ? {y:"0%"} : {y:"100%"} }
               transition={{ease: Power4.easeInOut, delay:idx*0.06 }}

            key={idx} className='inline-block'>{item}</motion.span>))}
             </h1>
            <div className='w-full h-full rounded-xl  overflow-hidden'>
            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' ></img>
            </div>
           </div>
         </div>
         </div>
    </div>
  )
}

export default Feature
