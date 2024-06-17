import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-32'>
      <div className=' cardcon w-1/2 h-[50vh]'>
<div className='card rounded-xl w-full h-full bg-[#004D43] flex flex-col justify-center items-center'>
<img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>

    <button className='px-5 py-1 rounded-full border-2 mt-10'>&copy;2024</button>

</div>
      </div>
      <div className='cardcon w-1/2 flex gap-5 h-[50vh]'>
      <div className='card w-1/2 h-full bg-[#192826] flex justify-center items-center flex-col'>
          <img className='w-32 ' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>

          <button className='px-5 py-1 rounded-full border-2 mt-10'>&copy;2024</button>
</div>
<div className='card w-1/2 h-full bg-[#192826] flex justify-center items-center flex-col'>
          <img className='w-24 ' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>

          <button className='px-5 py-1 rounded-full border-2 mt-2'>&copy;2024</button>
</div>

      </div>
    </div>
  )
}

export default Cards
