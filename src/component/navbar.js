import React from 'react'

export default function Navbar  () {
  return (
    <div className='flex z-40 items-center justify-between md:px-20 px-5 mx-auto sticky top-0 right-0 left-0 bg-white p-5'>
      <img src="./logo.png" alt='logo' className='md:w-14 md:h-14 w-10 h-10'/>
      <div className='flex items-center md:gap-5 gap-2'>
        <button className='border-2 manrope border-[#0B2642] md:rounded-xl rounded-full md:p-3 p-2 md:w-44 w-28 md:text-[17px] text-[10px] text-center text-[#0B2642] font-bold'>Request Callback</button>
        <button className='md:block hidden bg-[#0B2642] md:p-3 p-2 text-center md:rounded-xl rounded-lg md:w-24 w-16  md:text-lg text-xs text-[#F8D958]'>Login</button>
      <button className='bg-[#0B2642] rounded-full px-4 md:hidden block py-2'>
        <img src="./user.png" alt="user"/>
      </button>
      </div>
    </div>
  )
}

