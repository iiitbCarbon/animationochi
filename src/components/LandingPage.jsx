import React from 'react'
import {FaArrowUpLong} from "react-icons/fa6"
import {motion} from "framer-motion"
function LandingPage() {
  

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"
    className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-52 px-20'>
        <div className='masker'>

          <h1 className='uppercase text-[7.5vw]  leading-[6.5vw] tracking-tighter  font-medium'>We Create</h1>
        </div>
        <div className='flex items-center gap-2'>
            <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1] , duration : "1" }}  className='w-[8vw] h-[5vw] bg-green-500 mt-3 rounded-md'></motion.div>
          <h1 className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter  font-medium'>Eye Opening</h1>
        </div>
        <div className=''>
          <h1 className='uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter  font-medium'>Presentations</h1>
        </div>
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
      {
      ["For public and private companies" , "From the first pitch to IPO"].map((item,idx)=>{
        return (
            <p key={idx} className='text-md font-light tracking-tight leading-none '>{item}</p>
        )
      })
      }
      <div className='start flex items-center gap-5'>
        <div className='px-5 py-2 border-[1px] border-zinc-400  rounded-full font-light text-start uppercase text-md'>start the project</div>
        <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'>
            <span className='rotate-[45deg]'><FaArrowUpLong/></span> </div>
      </div>
      </div>
    </div>
  )
}

export default LandingPage
