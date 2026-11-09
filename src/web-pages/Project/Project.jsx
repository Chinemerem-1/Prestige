import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import Pagination1 from "../../Components/Pagination1"

import NavHeader from "../../Components/navHeader"
import projImag from "../../assets/hero pics-project.svg"
import Homesection5 from "../Home/Homesection5"

const Project = () => {
  return (
    <div>
        <>
          <NavHeader/>
          <Herosection headerText="Project" img={projImag}/>
          <Pagination1/>
          <Homesection5/>
          <Footer/>
        </>
    </div>
  )
}

export default Project