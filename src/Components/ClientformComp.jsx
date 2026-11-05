import { Container, Row, Col, Form } from "react-bootstrap"
import { WiStars } from "react-icons/wi";
import { IoIosStar } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";

const ClientformComp = () => {

    const formHeader = {
        fontSize: 16,
        fontWeight: 400
    }

    const formPlaceholder = {
        fontSize: 14,
        fontWeight: 300,
    }

  return (
    <div>
        <Container fluid className="px-md-5 pt-md-5 pb-md-2 mt-md-5 form-cont">
            <WiStars size={39} className="form-star1" style={{color: "#3A65F2"}}/>
            <WiStars size={39} className="form-star3" style={{color: "#3A65F2"}}/>
            <Row className="px-md-5 g-0">
                <Col className="">
                    <Form className="">

                        <Row className="gx-4 gy-2">

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="lastName"/>
                                <Form.Label style={formHeader}>Last Name<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="text" placeholder="Enter Last Name" style={formPlaceholder} className="s1" required/>
                            </Col>     

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="firstname"/>
                                <Form.Label style={formHeader}>First Name<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="address"/>
                                <Form.Label style={formHeader}>Address<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="text" placeholder="Enter Address" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="phone"/>
                                <Form.Label style={formHeader}>Phone Number<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="tel" placeholder="Enter Phone Number" style={formPlaceholder}className="s1"/>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="service"/>
                                <Form.Label style={formHeader}>Types of Service<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select Service" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select Service</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={20} className="" style={{color: "#D9D9D9"}}/>
                                    </div>
                                </div>
                            </Col>
                            
                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="serviceaddress"/>
                                <Form.Label style={formHeader}>Address of Service<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="text" placeholder="Enter Service Address" style={formPlaceholder}className="s1"/>
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>    
        </Container>
    </div>
  )
}

export default ClientformComp