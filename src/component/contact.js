import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className="w-full md:px-20 md:py-40 p-5 py-20 bg md:flex  justify-between">
                <div className="md:w-[60%]">
                    <h1 className="text-[#F8D958] lg:text-[90px] md:text-[40px] text-[35px] leading-none tracking-wider md:text-start text-center 	anton-regular ">Have questions?
                        Request a call
                        from our
                        counselors.

                    </h1>

                    <p className="my-5 md:text-2xl text-xs md:text-start text-center Aileron  text-white ">Know in-depth details in our free webinar 👉🏼</p>
                </div>
                <div className="bg-[#D9D9D9] rounded-xl md:w-[40%] md:p-5 p-3">
                    <p className="text-black  md:text-xl text-xl md:text-center  Aileron   text-start md:my-5 my-3">Book a free live webinar to know more</p>

                    <input type="text" placeholder="Full Name" className="bg-white md:py-4 py-3   md:px-6 px-3 w-full md:rounded-xl rounded-2xl outline-none" />
                    <input type="text" placeholder="Email" className="bg-white md:py-4 py-3  md:my-3 my-2  md:px-6 px-3 w-full md:rounded-xl rounded-2xl outline-none" />
                    <input type="text" placeholder="Phone Number" className="bg-white md:py-4 py-3   md:px-6 px-3 w-full md:rounded-xl rounded-2xl outline-none" />
                    <div className="bg-white py-4  md:px-6 px-3 rounded-xl mt-3">
                        <p className="text-[#4D4E4F80] md:text-lg text-md  ">Experience</p>
                        <div className="flex mt-5 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-md Aileron  text-xs">Working Professional - Technical Roles</p>
                        </div>
                        <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-md  Aileron text-xs">Working Professional - Non Technical</p>
                        </div>  <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-md Aileron  text-xs">College Student - Final Year</p>
                        </div>  <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-md  Aileron text-xs">College Student - 1st to Pre-final Year</p>
                        </div>  <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-md Aileron  text-xs">Other</p>
                        </div>
                    </div>
                    <button className='bg-[#0B2642] p-3 text-center rounded-xl  md:text-2xl text-md font-semibold w-full mt-3  text-[#F8D958]'>Book Webinar</button>

                </div>
            </div>
        </div>
    )
}

