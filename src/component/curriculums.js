
export default function Curriculums() {
  return (
    <div className="md:mt-32 mt-20 mb-32">
      <h1 className="md:text-6xl text-3xl font-light manrope text-[#091A2D] text-center">Coding  Masterclass </h1>
      <h1 className="md:text-6xl text-3xl  text-center text-[#F8D958] font-light etna mt-1">Curriculum</h1>
      <p className="text-[#091A2D] Aileron md:text-xl text-[15px] md:px-0 px-8 mt-5 text-center">Whether you’re new to coding or looking to enhance your skills, this<br /> session is perfect for you. Here’s what you can expect:</p>

      <div className="lg:w-[70%] lg:ml-72 md:relative  md:mx-auto mx-10">
        <div className="md:flex items-center md:mt-20 mt-10 justify-center gap-10">
          <div className="bg-[#091A2D] p-6 md:float-left md:absolute md:top-0 md:left-0 rounded-full mx-auto w-28">
            <img src="./rocket.png" alt="rocket" />
          </div>
          <div className="text-center   mt-5">
            <h1 className="text-[#081828] font-light md:text-3xl poppins text-2xl "> Module 01 : Kick start your journey</h1>
            <p className="text-[#081828] md:text-xl text-md Aileron font-light mt-2">Get the right orientation, and direction of where you want to go.</p>
          </div>
        </div>
        <div className="md:flex items-center  md:mt-20 mt-10  justify-center gap-10">
          <div className="bg-[#091A2D] p-6 rounded-full flex flex-col justify-center items-center mx-auto  md:absolute md:left-0 h-28 w-28">
            <img src="./embed.png" alt="rocket" />
          </div>
          <div className="text-center md:mt-0 mt-5">
            <h1 className="text-[#081828]  md:text-3xl text-2xl poppins"> Module 02 : Fundamentals</h1>
            <p className="text-[#081828] md:text-xl text-md Aileron font-light mt-2">Understand the fundamentals of computer science</p>
          </div>
        </div>
        <div className="md:flex items-center mt-20 justify-center gap-10">
          <div className="bg-[#091A2D] p-6 rounded-full md:absolute md:left-0 mx-auto w-28">
            <img src="./systems.png" alt="rocket" />
          </div>
          <div className="text-center md:mt-0 mt-5">
            <h1 className="text-[#081828]  md:text-3xl text-2xl poppins"> Module 03 : System Design</h1>
            <p className="text-[#081828] md:text-xl Aileron text-md font-light mt-2">Get the right orientation, and direction of where you want to go..</p>
          </div>
        </div>
        <div className="md:flex items-center mt-20 justify-center gap-10">
          <div className="bg-[#091A2D] p-6 md:absolute md:left-0 rounded-full mx-auto h-28 w-28">
            <img src="./box.png" alt="rocket" />
          </div>
          <div className="text-center md:mt-0 mt-5">
            <h1 className="text-[#081828]  md:text-3xl text-2xl poppins"> Module 04 : Full Stack Specialization</h1>
            <p className="text-[#081828] md:text-xl Aileron text-md font-light mt-2">Get the right orientation, and direction of where you want to go..</p>
          </div>
        </div>
        <div className="md:flex items-center mt-20 justify-center gap-10">
          <div className="bg-[#091A2D] p-6 md:absolute md:left-0 rounded-full mx-auto w-28">
            <img src="./bijli.png" alt="rocket" className="h-16 mx-auto" />
          </div>
          <div className="text-center md:mt-0 mt-5">
            <h1 className="text-[#081828]  md:text-3xl text-xl poppins"> Module 05 : Get Placed at Top Tech Companies</h1>
            <p className="text-[#081828] md:text-xl Aileron text-md font-light mt-2">it is important that we now focus on getting you interview <br />opportunities from diverse companies..</p>
          </div>
        </div>
      </div>

    </div>
  )
}

