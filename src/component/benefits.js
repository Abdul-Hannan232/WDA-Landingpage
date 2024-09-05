import React from 'react'

export default function Benefits() {
    return (
        < div className='my-20 '>
            <div className='flex justify-center items-center md:gap-3'>
                <h1 className='md:text-6xl text-3xl manrope font-light text-[#091A2D]'>Placement</h1>
                <h1 className='md:text-6xl text-3xl etna font-semibold text-[#F8D958]'>Benefits</h1>
            </div>
            <div className='grid lg:grid-cols-3 w-[87%] md:mx-auto grid-cols-2 md:gap-10 gap-5 mx-8 md:mt-32 mt-5'>
                <div className='md:space-y-3 space-y-1 md:w-80'>
                    {/* <div className='bg-[#0B2642] w-12 h-12 rounded-full'></div> */}
                    <img src='./icon1.png' alti="con1" className='md:w-12 md:h-12 w-8 h-8' />
                    <h1 className='text-[#091A2D] Aileron-bold md:text-xl text-sm'>Dedicated coach
                    </h1>
                    <p className='text-[#636363] md:text-sm text-[8px] Aileron'>Make a distinct mark for yourself on India's leading job portal.
                    </p>
                </div>
                <div className='md:space-y-3 space-y-1 md:w-80'>
                <img src='./icon2.png' alti="con1" className='md:w-12 md:h-12 w-8 h-8' />
                <h1 className='text-[#091A2D] md:text-xl text-sm Aileron-bold'>Live Classes
                </h1>
                    <p className='text-[#636363] md:text-sm Aileron text-[8px] font-light'>Get access to an abundance of job openings every month.</p>
                </div>
                <div className='md:space-y-3 space-y-1 md:w-96'>
                <img src='./icon3.png' alti="con1" className='md:w-12 md:h-12 w-8 h-8' />
                    <h1 className='text-[#091A2D] md:text-xl text-sm Aileron-bold'>Structured Notes & Study Material
                    </h1>
                    <p className='text-[#636363] md:text-sm  Aileron text-[8px] font-light'>Complete the course faster and apply for job opportunities</p>
                </div>
                <div className='md:space-y-3 space-y-1 md:w-80'>
                <img src='./icon4.png' alti="con1" className='md:w-12 md:h-12 w-8 h-8' />
                <h1 className='text-[#091A2D] md:text-xl text-sm Aileron-bold'>Quick Cheatsheets
                </h1>
                    <p className='text-[#636363] md:text-sm Aileron text-[8px] font-light'>Guiding and motivating you every step of the way.</p>
                </div>
                <div className='md:space-y-3 space-y-1 md:w-80'>
                <img src='./icon5.png' alti="con1" className='md:w-12 md:h-12 w-8 h-8' />
                <h1 className='text-[#091A2D] md:text-xl text-sm Aileron-bold'>Portfolio Building
                </h1>
                    <p className='text-[#636363] md:text-sm text-[8px] Aileron font-light'>A dedicated team to help you get placed in your dream company.</p>
                </div>
                <div className='md:space-y-3 space-y-1 md:w-80'>
                <img src='./icon6.png' alti="con1" className='md:w-12 md:h-12 w-8 h-8' />
                <h1 className='text-[#091A2D] md:text-xl text-sm Aileron-bold'>Get Certified
                </h1>
                    <p className='text-[#636363] md:text-sm text-[8px] font-light'>We send you job openings daily on your WhatsApp directly.
                        Request callbackBook a free webinar</p>
                </div>

            </div>
            <div className='flex justify-center gap-4 mt-20'>
                <button className='border border-[#0B2642] rounded-xl  md:p-3 p-2 md:w-60 w-28 md:text-lg text-xs  text-center text-[#0B2642] font-bold'>Request a Callback</button>
                <button className=' bg-[#0B2642] md:p-3 p-2 text-center md:rounded-xl rounded-lg md:w-80 w-40 md:text-lg text-lg text-[#F8D958]'>Book Free Webinar</button>
            </div>
        </div>
    )
}


