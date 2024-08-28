import React from 'react'

export default function Experience ()  {
  return (
    <div className='md:my-40 my-10 md:mx-0 mx-5'>
      <h1 className='text-[#0C2949] md:text-5xl md:w-[600px] text-3xl md:mx-auto text-center font-bold'>Our learners bring varied backgrounds and experiences</h1>
   <img src="./experience.png" alt="experience" className='md:mx-auto  my-16'/>
     <div className='flex  justify-center gap-4 mt-20'>
                <button className='border  border-[#0B2642] rounded-xl md:p-3 p-2 md:w-80 w-28 md:text-lg text-xs text-center text-[#0B2642] font-bold'>Request a Callback</button>
                <button className='bg-[#0B2642] md:p-3 p-2  text-center md:rounded-xl rounded-lg md:w-96 w-40 md:text-lg text-lg text-[#F8D958]'>Book Free Webinar</button>
            </div>

    </div>
  )
}


