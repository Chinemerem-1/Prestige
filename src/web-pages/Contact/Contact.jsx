import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import img from "../../assets/hero pics-contact.svg"
import ContactSectionFour from "./ContactSectionFour"
import ContactSectionOne from "./ContactSectionOne"
import ContactSectionThree from "./ContactSectionThree"
import ContactSectionTwo from "./ContactSectionTwo"

const Contact = () => {
  return (
    <div className="contact-bg-holder">
        <NavHeader/>
        <Herosection headerText="Contact Us" img={img}/>
        <ContactSectionOne/>
        <ContactSectionTwo/>
        <ContactSectionThree/>
        <ContactSectionFour/>
        <Footer/>
    </div>
  )
}

export default Contact