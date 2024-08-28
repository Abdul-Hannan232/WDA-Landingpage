import React from 'react'

export default function Team() {
    return (
        <div className='md:mx-0 mx-5'>
            <h1 className='text-[#0C2949] font-bold text-5xl  py-20 text-center'>Meet our team</h1>
            <div className='flex flex-wrap items-center justify-center gap-10'>
                <div className={`teamBg w-80 relative top-0 md:mt-0 mt-10  rounded-[30px] p-6 text-center`}>
                    <img src="./student2.png" alt='student1' className='rounded-full w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className={`text-2xl mt-20 text-[#091A2D] font-bold  `}>Mohamed Yazid</h1>
                    <p className='text-[#091A2D] text-md font-bold text-center '>Instructor</p>
                    <div className='flex items-center justify-center gap-5 my-5'>
                        <img src="./web1.png" alt="icon" />
                        <img src="./web2.png" alt="icon" />
                        <img src="./web3.png" alt="icon" />
                        <img src="./web4.png" alt="icon" />
                    </div>
                    <p className='text-[#091A2D] text-md font-bold text-center '>Teaches :</p>

                    <p className={`text-center text-md my-5 text-[#091A2D] `}>Basics of C++ with DSA
                        Data Science & Machine Learning
                        Competitive Programming</p>
                    <a href="#" className='text-[#436DAB] text-lg underline  text-center'>Linkedin Profile</a>
                </div>
                <div className={`teamBg w-80 relative top-0 md:mt-0 mt-10  rounded-[30px] p-6 text-center`}>
                    <img src="./student2.png" alt='student1' className='rounded-full w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className={`text-2xl mt-20 text-[#091A2D] font-bold  `}>Mohamed Yazid</h1>
                    <p className='text-[#091A2D] text-md font-bold text-center '>Instructor</p>
                    <div className='flex items-center justify-center gap-5 my-5'>
                        <img src="./web1.png" alt="icon" />
                        <img src="./web2.png" alt="icon" />
                        <img src="./web3.png" alt="icon" />
                        <img src="./web4.png" alt="icon" />
                    </div>
                    <p className='text-[#091A2D] text-md font-bold text-center '>Teaches :</p>

                    <p className={`text-center text-md my-5 text-[#091A2D] `}>Basics of C++ with DSA
                        Data Science & Machine Learning
                        Competitive Programming</p>
                    <a href="#" className='text-[#436DAB] text-lg underline  text-center'>Linkedin Profile</a>
                </div>
                <div className={`teamBg w-80 relative top-0 md:mt-0 mt-10  rounded-[30px] p-6 text-center`}>
                    <img src="./student2.png" alt='student1' className='rounded-full w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className={`text-2xl mt-20 text-[#091A2D] font-bold  `}>Mohamed Yazid</h1>
                    <p className='text-[#091A2D] text-md font-bold text-center '>Instructor</p>
                    <div className='flex items-center justify-center gap-5 my-5'>
                        <img src="./web1.png" alt="icon" />
                        <img src="./web2.png" alt="icon" />
                        <img src="./web3.png" alt="icon" />
                        <img src="./web4.png" alt="icon" />
                    </div>
                    <p className='text-[#091A2D] text-md font-bold text-center '>Teaches :</p>

                    <p className={`text-center text-md my-5 text-[#091A2D] `}>Basics of C++ with DSA
                        Data Science & Machine Learning
                        Competitive Programming</p>
                    <a href="#" className='text-[#436DAB] text-lg underline  text-center'>Linkedin Profile</a>
                </div>
            </div>
            <div className='flex justify-center gap-4 mt-20'>
                <button className='border border-[#0B2642] rounded-xl  md:p-3 p-2 md:w-80 w-28 md:text-lg text-xs  text-center text-[#0B2642] font-bold'>Request a Callback</button>
                <button className=' bg-[#0B2642] md:p-3 p-2 text-center md:rounded-xl rounded-lg md:w-96 w-40 md:text-lg text-lg text-[#F8D958]'>Book Free Webinar</button>
            </div>
        </div>
    )
}


