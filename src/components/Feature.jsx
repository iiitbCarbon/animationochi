import React from 'react'

function Feature() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-700'>
         <h1 className='text-8xl tracking-tight'>Featured Products</h1>
       
      </div>
      <div className='px-20'>
      <div className='cards w-full flex mt-10 gap-10 '>
            <div className='cardcon w-1/2 h-[75vh]  relative'>

             <h1 className=' absolute text-[#CDEA68] -translate-x-[50%] left-full top-1/2 -translate-y-1/2 leading-none tracking-tighter text-8xl z-[9]'>
              FYDE
             </h1>

            <div className='w-full h-full rounded-xl  overflow-hidden'>
               <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' ></img>
            </div>
            </div>
            <div className='cardcon w-1/2 h-[75vh] relative'>
            <h1 className=' absolute text-[#CDEA68] translate-x-[50%] right-full top-1/2 -translate-y-1/2 leading-none tracking-tighter text-8xl z-[9]'>
              FYDE
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
