import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import projImag from "../../assets/hero pics-project.svg"
import Homesection5 from "../Home/Homesection5"

const Project = () => {
  return (
    <div>
        <>
          <NavHeader/>
          <Herosection headerText="Project" img={projImag}/>
          <Homesection5/>
          <Footer/>
        </>
    </div>
  )
}

export default Project