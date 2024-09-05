import React from 'react'

export default function Students({ title, color, textColor, boxbg, text }) {
    return (
        <div className={`pd:py-28 bg-[#F6F4F4] py-20 ${color}`}>
            <h1 className={`md:text-5xl text-xl md:w-[700px] w-[250px] font-extrabold mx-auto ${textColor} Aileron-bold
 text-center`}>{title}</h1>
            <div className='flex flex-wrap justify-center items-center gap-10 md:mt-20 mt-5'>

                <div className={`${boxbg} w-72 relative top-0 h-80 md:mt-0 mt-10 rounded-[30px] p-6 text-center`}>
                    <img src="./student1.png" alt='student1' className='rounded-full w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className={`Aileron text-xl mt-20 ${text} font-light  `}>Francisco Gil
                    </h1>
                    <div className='flex items-center gap-1 mt-2 justify-center '>
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />

                    </div>
                    <p className={`text-center font-light text-sm mt-3 ${text} Aileron-italic`}>I was working in an electronics hardware company and I am planning to shift to front-end development. This course taken by WebDevArmy is the best decision I took. He is teaching it step by step and It is easily understood. Thank you WebDevArmy
                    </p>
                </div>
                <div className={`${boxbg} lg:w-80 w-72 relative top-0 md:mt-0 mt-10 lg:h-96 h-80 rounded-[30px] p-6 text-center`}>
                    <img src="./student2.png" alt='student1' className='rounded-full  w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className={`Aileron lg:text-2xl text-2xl mt-24 ${text}  `}>Sada
                    </h1>
                    <div className='flex items-center gap-1 mt-2 justify-center '>
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />

                    </div>
                    <p className={` text-center lg:text-sm Aileron-italic text-sm mt-5 ${text} italic`}>Hello sir, Finally i got the selected in the internship that you mentored me earlier for. I got the joining letter today itself. Thank you so much for guiding me through it and the projects.
                    </p>
                </div>
                <div className={`${boxbg} w-72 relative top-0 h-80 md:mt-0 mt-10 rounded-[30px] p-6 text-center`}>
                    <img src="./student3.png" alt='student1' className='rounded-full  w-32 mx-auto top-[-40px] right-0 left-0 absolute h-32' />
                    <h1 className={`Aileron text-xl mt-20  ${text}  `}>Mehdi Pakdel
                    </h1>
                    <div className='flex items-center gap-1 mt-2 justify-center '>
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />
                        <img src='./star.png' alt="star" />

                    </div>
                    <p className={` text-center text-sm mt-5  ${text} Aileron-italic`}>I attended your 6 Months Live Frontend Workshop and it literally changed my life.I was a non-tech person working in manufacturing sector, now working in a tech company. All thanks to the cohort and guidance. Thank you so much
                    </p>
                </div>
            </div>

        </div>
    )
}


