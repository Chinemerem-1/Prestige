import { Container, Row, Col, Form } from "react-bootstrap"
import { BiSolidDownArrow } from "react-icons/bi";

const StaffFormCompTwo = ({title, State}) => {

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
        <Container fluid className="px-md-5 mt-4">
            <Row className="px-md-5 g-0 gap-3">

                <h5>{title}</h5>

                <Col className="">
                    <Form className="">

                        <Row className="gx-4 gy-2">

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_name`}/>
                                <Form.Label style={formHeader}>Guarantor's Name</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Control type="text" placeholder="Enter Guarantor name" style={formPlaceholder} className="s1" required/>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>  
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_email`}/>
                                <Form.Label style={formHeader}>Email</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Control type="email" placeholder="Enter Guarantor Email" style={formPlaceholder}className="s1" required/>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_address1`}/>
                                <Form.Label style={formHeader}>Address 1</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Control type="text" placeholder="Enter Address 1" style={formPlaceholder} className="s1" required/>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_phone`}/>
                                <Form.Label style={formHeader}>Phone</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Control type="tel" placeholder="Enter your number" style={formPlaceholder}className="s1" required/>
                                
                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_address2`}/>
                                <Form.Label style={formHeader}>Address 2</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address 2" style={formPlaceholder}className="s1"/>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId={`${State}_city`}/>
                                <Form.Label style={formHeader}>City</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select City" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select City</option>
                                        <option value="Lagos">Lagos</option>
                                        <option value="...">...</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={10} className="" style={{color: "black"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId={`${State}_state`}/>
                                <Form.Label style={formHeader}>State of Origin</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select State" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select State</option>
                                        <option value="Abuja">Abuja</option>
                                        <option value="...">...</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={10} className="" style={{color: "black"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId={`${State}_lga`}/>
                                <Form.Label style={formHeader}>Local Government Area</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select LGA" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select LGA</option>
                                        <option value="Alimosho">Alimosho</option>
                                        <option value="...">...</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={10} className="" style={{color: "black"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_companyname`}/>
                                <Form.Label style={formHeader}>Company Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Name" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_companyaddress`}/>
                                <Form.Label style={formHeader}>Company Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Company Address" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_relationship`}/>
                                <Form.Label style={formHeader}>Relationship Status</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select Status" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={10} className="" style={{color: "black"}}/>
                                    </div>
                                </div>
                                
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId={`${State}_knownyears`}/>
                                <Form.Label style={formHeader}>How Long Have You Known Guarantor</Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select Years" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select Years</option>
                                        <option value="1">1</option>
                                        <option value="...">...</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <span style={{color: "red", fontSize: "25px", fontWeight: "600"}}>*</span>
                                    </div>
                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={10} className="" style={{color: "black"}}/>
                                    </div>
                                </div>                               
                            </Col>
                        </Row>

                    </Form>
                </Col>
            </Row>    
        </Container>
    </div>
  )
}

export default StaffFormCompTwo