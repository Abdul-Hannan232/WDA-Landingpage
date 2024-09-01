import React from 'react'

export default function Benefits() {
    return (
        < div className='my-20 '>
            <div className='flex justify-center items-center md:gap-3'>
                <h1 className='md:text-6xl text-3xl manrope font-light text-[#091A2D]'>Placement</h1>
                <h1 className='md:text-6xl text-3xl italic font-semibold text-[#F8D958] dancing-script'>Benefits</h1>
            </div>
            <div className='grid lg:grid-cols-3 w-[87%] md:mx-auto grid-cols-2 md:gap-10 gap-5 mx-5 mt-32'>
                <div className='md:space-y-3 space-y-1'>
                    {/* <div className='bg-[#0B2642] w-12 h-12 rounded-full'></div> */}
                    <img src='./icon1.png' alti="con1" className='w-12 h-12' />
                    <h1 className='text-[#091A2D] md:text-2xl text-sm font-bold'>Dedicated coach
                    </h1>
                    <p className='text-[#636363] md:text-xl text-[8px] font-light'>Make a distinct mark for yourself on India's leading job portal.
                    </p>
                </div>
                <div className='md:space-y-3 space-y-1'>
                <img src='./icon2.png' alti="con1" className='w-12 h-12' />
                <h1 className='text-[#091A2D] md:text-2xl text-sm font-bold'>Live Classes
                </h1>
                    <p className='text-[#636363] md:text-xl text-[8px] font-light'>Get access to an abundance of <br />job openings every month.</p>
                </div>
                <div className='md:space-y-3 space-y-1'>
                <img src='./icon3.png' alti="con1" className='w-12 h-12' />
                    <h1 className='text-[#091A2D] md:text-2xl text-sm font-bold'>Structured Notes & Study Material
                    </h1>
                    <p className='text-[#636363] md:text-xl text-[8px] font-light'>Complete the course faster and <br />apply for job opportunities</p>
                </div>
                <div className='md:space-y-3 space-y-1'>
                <img src='./icon4.png' alti="con1" className='w-12 h-12' />
                <h1 className='text-[#091A2D] md:text-2xl text-sm font-bold'>Quick Cheatsheets
                </h1>
                    <p className='text-[#636363] md:text-xl text-[8px] font-light'>Guiding and motivating you <br />every step of the way.</p>
                </div>
                <div className='md:space-y-3 space-y-1'>
                <img src='./icon5.png' alti="con1" className='w-12 h-12' />
                <h1 className='text-[#091A2D] md:text-2xl text-sm font-bold'>Portfolio Building
                </h1>
                    <p className='text-[#636363] md:text-xl text-[8px] font-light'>A dedicated team to help you get <br />placed in your dream company.</p>
                </div>
                <div className='md:space-y-3 space-y-1'>
                <img src='./icon6.png' alti="con1" className='w-12 h-12' />
                <h1 className='text-[#091A2D] md:text-2xl text-sm font-bold'>Get Certified
                </h1>
                    <p className='text-[#636363] md:text-xl text-[8px] font-light'>We send you job openings daily<br /> on your WhatsApp directly.<br />
                        Request callbackBook a free <br />webinar</p>
                </div>

            </div>
            <div className='flex justify-center gap-4 mt-20'>
                <button className='border border-[#0B2642] rounded-xl  md:p-3 p-2 md:w-60 w-28 md:text-lg text-xs  text-center text-[#0B2642] font-bold'>Request a Callback</button>
                <button className=' bg-[#0B2642] md:p-3 p-2 text-center md:rounded-xl rounded-lg md:w-80 w-40 md:text-lg text-lg text-[#F8D958]'>Book Free Webinar</button>
            </div>
        </div>
    )
}


