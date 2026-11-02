import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import img from "../../assets/hero pics-contact.svg"

const Contact = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection headerText="Contact Us" img={img}/>
        <Footer/>
    </div>
  )
}

export default Contact