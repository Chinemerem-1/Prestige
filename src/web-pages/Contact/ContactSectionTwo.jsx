import { Container, Row, Col, Form } from "react-bootstrap"
import Images from "../../Components/Images"
import contactFormImg from "../../assets/Contact-picture.png"
import ButtonComp from "../../Components/ButtonComp"
import { BiSolidDownArrow } from "react-icons/bi";

const ContactSectionTwo = () => {

        const formHeader = {
            fontSize: 16,
            fontWeight: 500
        }

        const formPlaceholder = {
            fontSize: 12,
            fontWeight: 400,
        }

  return (
    <div>
        <Container fluid className="contact-form-holder1 px-md-5 py-md-5 mt-5">

            <Row className="justify-content-center px-md-5 g-0">

                <Col className="">
                    <hr className='switch-line mt-0 mb-0'/>
                    <Row className="contact-form-wrapper py-5 px-4 g-0">
                        <Col md={9} className="">

                                <h3 className="mb-4" style={{fontWeight: "600", fontSize: "24px"}}>Feel Free To Contact Us</h3>

                                <Form className="">
                                    <Row className="gy-3">
                                        <Col md={6} className="mb-md-3 mb-3">
                                            <Form.Group controlId="formGroupFullName"/>
                                            <Form.Label style={formHeader}>Full Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" style={formPlaceholder} className="c1 text-muted"/>
                                        </Col>

                                        <Col md={6} className="mb-3">
                                            <Form.Group controlId="formGroupEmail"/>
                                            <Form.Label style={formHeader}>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email address" style={formPlaceholder} className="c1 text-muted"/>
                                        </Col>

                                        <Col md={6} className="mb-md-3 mb-3">
                                            <Form.Group controlId="phonecontact"/>
                                            <Form.Label style={formHeader}>Phone Number</Form.Label>
                                            <Form.Control type="tel" placeholder="Enter your number" style={formPlaceholder} className="c1 text-muted"/>
                                        </Col>

                                        <Col md={6} className="mb-3">
                                            <Form.Group controlId="servicescontact"/>
                                            <Form.Label style={formHeader}>Types Of Services</Form.Label>
                                            <div className="dropdown-wrapper">
                                                <Form.Select defaultValue="Types of services" style={formPlaceholder} className="c1 text-muted custom-input-with-icon">
                                                    <option>Types of services</option>
                                                    <option>Residential Cleaning</option>
                                                    <option>Janitorial Cleaning</ option>
                                                    <option>Supply Of Materials</option>
                                                    <option>Post Construction Cleaning</option>
                                                    <option>Fumigation/Pest Control</option>
                                                <option>Industrial Cleaning</option>
                                                </Form.Select>

                                                <div className="arrow-drop-container">
                                                    <BiSolidDownArrow size={10} className="" style={{color: "black"}}/>
                                                </div>
                                            </div>
                                            
                                        </Col>
                                    </Row>

                                    <Form.Group className="mt-3" controlId="messageFormContact">
                                        <Form.Label style={formHeader}>Message</Form.Label>
                                        <Form.Control as="textarea" rows={7} placeholder="Type message" style={formPlaceholder} className="c1 c2 text-muted"/>
                                    </Form.Group>
                                </Form>

                                <ButtonComp type="submit" address="/Login" buttonClass="butBrownClass mt-4" buttonText="Submit"/>   

                        </Col>

                        <Col md={3} className="contact-image">
                            <Images 
                                src={contactFormImg}
                                className=" object-fit-cover d-block ms-md-auto"/>
                        </Col>
                    </Row>
                            
                </Col>

            </Row>
            
        </Container>
    </div>
  )
}

export default ContactSectionTwo