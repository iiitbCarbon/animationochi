import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
      <h1 className='text-[3vw] leading-[4.5vw] tracking-tighter'>Ochi is a strategic partner for fast-growing tech business 
        that need to raise funds , sell products , explain complex ideas , and hire great people .
      </h1>
      <div className='mt-20 pt-10 w-full border-t-[2px] border-[#a1b562] flex gap-5'> 
      <div className='w-1/2'>
      <h1 className='text-7xl'>Our Approach</h1>
      <button className='flex gap-10 items-center mt-10 px-10 py-6 bg-zinc-900 rounded-full text-white'>
        
        Read More
        <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
        </button>
      </div>

      <div className='w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]'>

      </div>
      </div>
    </div>
    
  )
}

export default About
