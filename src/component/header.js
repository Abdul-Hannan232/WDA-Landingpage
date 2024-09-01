
export default function Header() {
    return (
        <>
            <div className="w-full md:p-20 md:pb-40 p-5 pb-20 bg md:flex  justify-between">
                <div className="md:w-[50%]">
                    <h1 className="text-[#F8D958] lg:text-[90px] md:text-[40px] text-[38px] leading-none tracking-wider md:text-start text-center 	anton-regular ">Full Stack / Frontend Development MasterClass

                    </h1>
                    <p className="my-2 lg:text-xl md:text-sm text-xs md:text-start text-center text-white font-light">Become a Fronend or Full Stack Developer (MERN), learn by practice and making real world projects
                    </p>
                    <div className="flex items-center md:mt-8 mt-3 flex-wrap md:justify-start justify-center md:gap-2 gap-1">
                        <button className="py-1 md:px-3 px-2  rounded-full md:text-[14px] text-[7px] bg-[#EA8585] text-black text-center">Placement assistance
                        </button>
                        <button className="py-1 md:px-3 px-2  rounded-full md:text-[14px] text-[7px] bg-[#72D25A] text-black text-center">AI infused curriculum
                        </button>
                        <button className="py-1 md:px-3 px-2  rounded-full md:text-[14px] text-[7px] bg-[#449DEE] text-black text-center">1:1 mentorship
                        </button>
                        <button className="py-1 md:px-3 px-2  rounded-full md:text-[14px] text-[7px] bg-[#C8CB4C] text-black text-center">Engaging Community
                        </button>
                    </div>
                    <div className="bg-[#D9D9D942] rounded-3xl  flex items-center flex-wrap justify-evenly mt-5 gap-5 lg:p-7 md:p-5 p-5 text-white">
                        <div className="text-center pr-5 border border-white border-y-transparent border-l-transparent">
                            <h1 className="lg:text-2xl md:text-4xl text-3xl font-bold">$120k+
                            </h1>
                            <p className="md:text-lg text-sm font-light mt-2">Avg. Salary
                            </p>
                        </div>
                        <div className="text-center  lg:pr-5 lg:border lg:border-white lg:border-y-transparent lg:border-l-transparent">
                            <h1 className="lg:text-2xl md:text-4xl text-3xl font-bold">2200+
                            </h1>
                            <p className="md:text-lg text-sm font-light mt-2">Students Trained
                            </p>
                        </div>
                        <div className="text-center  pr-5 border border-white border-y-transparent border-l-transparent">
                            <h1 className="lg:text-2xl md:text-4xl text-3xl font-bold">6 Months
                            </h1>
                            <p className="md:text-lg text-sm font-light mt-2">Training Period
                            </p>
                        </div>
                        <div className="text-center ">
                            <h1 className="lg:text-2xl md:text-4xl text-3xl font-bold">100k+
                            </h1>
                            <p className="md:text-lg text-sm font-light mt-2">Followers
                            </p>
                        </div>
                    </div>
                    <p className="my-5 md:text-2xl text-xs md:text-start text-center font-light text-white ">Know in-depth details in our free masterclass
                        👉🏼</p>
                </div>
                <div className="bg-[#D9D9D9] rounded-xl md:w-[40%] md:p-5 p-3">
                    <p className="text-[#070000]  md:text-2xl text-xl md:text-center text-start md:my-5 my-3">Book a free live webinar to know more</p>

                    <input type="text" placeholder="Full Name" className="bg-white md:py-4 py-3   md:px-6 px-3 w-full md:rounded-xl rounded-2xl outline-none" />
                    <input type="text" placeholder="Email" className="bg-white md:py-4 py-3  md:my-3 my-2  md:px-6 px-3 w-full md:rounded-xl rounded-2xl outline-none" />
                    <input type="text" placeholder="Phone Number" className="bg-white md:py-4 py-3   md:px-6 px-3 w-full md:rounded-xl rounded-2xl outline-none" />
                    <div className="bg-white pt-4 pb-10 md:px-6 px-3 rounded-xl mt-3">
                        <p className="text-[#4D4E4F80] md:text-lg text-md  ">Experience</p>
                        <div className="flex mt-5 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-[16px] text-xs">Working Professional - Technical Roles</p>
                        </div>
                        <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-[16px] text-xs">Working Professional - Non Technical</p>
                        </div>  <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-[16px] text-xs">College Student - Final Year</p>
                        </div>  <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-[16px] text-xs">College Student - 1st to Pre-final Year</p>
                        </div>  <div className="flex mt-3 items-center gap-3">
                            <input type="radio" />
                            <p className="md:text-[16px] text-xs">Other</p>
                        </div>
                    </div>
                    <button className='bg-[#0B2642] p-3 text-center rounded-xl  md:text-2xl text-md font-semibold w-full mt-3  text-[#F8D958]'>Continue Booking Masterclass</button>

                </div>
            </div>
            <div className="bg-[#F8D958] md:py-16 py-10">
                <h1 className="md:text-5xl text-2xl anton-regular text-[#091A2D] text-center">Job Bootcamp brochure</h1>
                <button className='mx-auto manrope bg-[#0B2642] md:mt-5 mt-3 flex justify-center md:p-3 p-2 text-center md:rounded-xl rounded-lg lg:w-[450px]  md:text-2xl text-md w-60 text-[#F8D958]'>Download Frontend Brochure</button>
            </div>
        </>
    )
}


