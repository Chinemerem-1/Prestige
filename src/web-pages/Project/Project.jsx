import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import Pagination1 from "../../Components/Pagination1"
import WorkingProcess from "../../Components/WorkingProcess"
import NavHeader from "../../Components/navHeader"
import projImag from "../../assets/hero pics-project.svg"

const Project = () => {
  return (
    <div>
        <>
          <NavHeader/>
          <Herosection headerText="Project" img={projImag}/>
          <Pagination1/>
          <WorkingProcess/>
          <Footer/>
        </>
    </div>
  )
}

export default Project