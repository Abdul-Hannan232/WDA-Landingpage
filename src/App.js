import Navbar from "./component/navbar"
import Header from "./component/header"
import Students from "./component/students"
import Curriculum from "./component/curriculums"
import Benefits from "./component/benefits"
import CodingBenefits from "./component/codingBenefits"
import Team from "./component/team"
import Experience from "./component/experience"
import Network from "./component/network"
import Contact from "./component/contact"
import Accordian from "./component/accordian"
export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Students title={"STUDENTS WHO TOOK OUR BOOTCAMP AND GOT HIRED"} color={"bg-white"} textColor={"text-[#091A2D]"} boxbg={"bg-[#0B2642]"} text={"text-white"} />
      <Curriculum />
      <Benefits />
      <CodingBenefits />
      <Students title={"VOICE OF TRUST AND LOVE"} color={"bg"} textColor={"text-white"} boxbg={"bg-white"} text={"text-[#091A2D]"} />
      {/* <Team /> */}
      <Experience/>
      <Network />
      <Contact />
      <Accordian />
    </div>
  )
}