import {Container, Row, Col} from "react-bootstrap"
import { FaLocationDot } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Images from "../../Components/Images"
import ContactInfo from "../../Components/ContactInfo"


const ContactSectionOne = () => {
    const sectionArray = [
       {
        item:  <ContactInfo icon={<FaLocationDot size={20} style={{color: "#A44730", flexShrink: "0", transition: "color 0.4s ease-in-out"}}/>} title1="Our Address :" Details="Aurelia’s place 3rd floor 186A Igbosere Rd Lagos"/>
       },

       {
        item:  <ContactInfo icon={<FaAt size={20} style={{color: "#A44730", flexShrink: "0", transition: "color 0.4s ease-in-out"}}/>} title1="Our Email :" Details="Prestige@prestige-hygiene.com"/>
       },

       {
        item:  <ContactInfo icon={<FaPhoneAlt size={20} style={{color: "#A44730", flexShrink: "0", transition: "color 0.4s ease-in-out"}}/>} title1="Our Phone :" Details="+234-80-32792064"/>
       }
    ]

    const styleh2 = {
        // fontFamily: "Montserrat",
        // color: "black",
        fontSize: 40,
        fontWeight: 600
    }

    const stylep = {
        // fontFamily: "Montserrat",
        // color: "black",
        fontSize: 24,
        fontWeight: 500
    }

  return (
    <>
        <Container fluid className="px-md-5 mt-md-5 mt-3">

            <Row className="justify-content-around px-md-5 g-4">
                {sectionArray.map((sectionA) => {
                    return (
                        <Col md={4} className="contact-card-two">
                            {sectionA.item}
                        </Col> 
                    )
                })}  
            </Row>

            

        </Container>
    </>
  )
}

export default ContactSectionOne