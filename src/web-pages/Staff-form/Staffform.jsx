import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import StaffFormCompOne from "../../Components/StaffFormCompOne"
import staffp from "../../assets/client-staff-hero.svg"
import StaffFormCompTwo from "../../Components/StaffFormCompTwo"
import StaffClientSwitch from "../../Components/StaffClientSwitchOne"
import ButtonComp from "../../Components/ButtonComp"
import { Container } from "react-bootstrap"

const Staffform = () => {
  return (
    <>
      <NavHeader/>
      <Herosection headerText="Staff Portal" img={staffp}/>
      <StaffClientSwitch/>
      <StaffFormCompOne/>
      <StaffFormCompTwo title="1st Guarantor Details" State="g1"/>
      <StaffFormCompTwo title="2nd Guarantor Details" State="g2"/>
      <Container fluid className="px-md-5">
        <div className="d-flex justify-content-md-end px-md-5">
            <ButtonComp address="" type="submit" buttonClass="butBrownClass mb-5" buttonText="Send"/>
        </div>     
      </Container>
      <Footer/>
    </>
  )
}

export default Staffform