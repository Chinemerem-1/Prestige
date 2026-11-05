import ClientformComp from "../../Components/ClientformComp"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import clientp from "../../assets/client-staff-hero.svg"
import StaffClientSwitchTwo from "../../Components/StaffClientSwitchTwo"
import ButtonComp from "../../Components/ButtonComp"
import { Container } from "react-bootstrap"

const Clientform = () => {
  return (
    <>
      <NavHeader/>
      <Herosection headerText="Client Portal" img={clientp}/>
      <StaffClientSwitchTwo/>
      <ClientformComp/>
      <Container fluid className="px-md-5">
        <div className="d-flex justify-content-md-center px-md-5">
            <ButtonComp address="" type="submit" buttonClass="butBrownClass Client-butt mb-3 d-block" buttonText="Submit"/>
        </div>     
      </Container>
      <Footer/>
    </>
  )
}

export default Clientform