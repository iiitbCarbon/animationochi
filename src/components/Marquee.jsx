import React from 'react'

function Marquee() {
  return (
    
    <div className='w-full py-24 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
       <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden gap-10'>
        <h1 className='-mt-2 pb-3 text-[17vw] leading-none font-semibold uppercase tracking-tighter'> we are ochi</h1>
        <h1 className=' -mt-2 pb-3 text-[17vw] leading-none font-semibold uppercase tracking-tighter' > we are ochi</h1>
       </div>
    </div>
  )
}

export default Marquee
