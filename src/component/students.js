import React from 'react'

export default function Students() {
    return (
        <div className='md:my-32 my-20 '>
            <h1 className="md:text-5xl text-xl anton-regular text-center">STUDENTS WHO TOOK OUR BOOTCAMP<br />
                AND GOT HIRED</h1>
            <div className='flex flex-wrap justify-center items-center gap-10 md:mt-40 mt-20'>

                <div className='bg-[#0B2642] w-72 relative top-0 h-80 rounded-[30px] p-6 text-center'>
                    <img src="./student1.png" alt='student1' className='rounded-full w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className='italic text-2xl mt-20 text-white  '>Noah North</h1>
                    <div className='flex items-center gap-2 mt-2 justify-center '>
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />

                    </div>
                    <p className=' text-center text-md mt-5 text-white italic'>"I think the way that the teacher instructs the students is very entertaining and helpful."</p>
                </div>
                <div className='bg-[#0B2642] lg:w-80 w-72 relative top-0 lg:h-96 h-80 rounded-[30px] p-6 text-center'>
                    <img src="./student2.png" alt='student1' className='rounded-full  w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className='italic lg:text-3xl text-2xl mt-24 text-white  '>Josh Flint</h1>
                    <div className='flex items-center gap-2 mt-2 justify-center '>
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />

                    </div>
                    <p className=' text-center lg:text-lg text-md mt-5 text-white italic'>During the class what went well was the way that the teacher taught me, it was very fun and interactive.</p>
                </div>
                <div className='bg-[#0B2642] w-72 relative top-0 h-80 rounded-[30px] p-6 text-center'>
                    <img src="./student3.png" alt='student1' className='rounded-full  w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className='italic text-2xl mt-20 text-white  '>Josh Flint</h1>
                    <div className='flex items-center gap-2 mt-2 justify-center '>
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />

                    </div>
                    <p className=' text-center text-md mt-5 text-white italic'>"I think the way that the teacher instructs the students is very entertaining and helpful."</p>
                </div>
            </div>

        </div>
    )
}


