import { Container, Row, Col, Form } from "react-bootstrap"
import { WiStars } from "react-icons/wi";
import { BsUpload } from "react-icons/bs";
import { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";


const StaffFormCompOne = () => {

    const formHeader = {
        fontSize: 16,
        fontWeight: 400
    }

    const formPlaceholder = {
        fontSize: 14,
        fontWeight: 300,
    }

    const [passportFile, setPassportFile] = useState(null);
    const [birthCertFile, setBirthCertFile] = useState(null);

  return (
    <div>
        <Container fluid className="px-md-5 py-md-5 mb-md-5 form-cont">
            <WiStars size={39} className="form-star1" style={{color: "#3A65F2"}}/>
            <WiStars size={39} className="form-star2" style={{color: "#3A65F2"}}/>
            <Row className="px-md-5 g-0">
                <Col className="">
                    <Form className="">

                        <Row className="gx-4 gy-2">

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="nin"/>
                                <Form.Label style={formHeader}>National Identification Number<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="text" placeholder="Enter your Nin" style={formPlaceholder} className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-3">
                                <Form.Group controlId="title"/>
                                <Form.Label style={formHeader}>Title<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select title" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select title</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={20} className="" style={{color: "#D9D9D9"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="lastName"/>
                                <Form.Label style={formHeader}>Last Name<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="tel" placeholder="Enter last name" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="firstName"/>
                                <Form.Label style={formHeader}>First Name<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="middleName"/>
                                <Form.Label style={formHeader}>Middle Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter middle name" style={formPlaceholder}className="s1"/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="address"/>
                                <Form.Label style={formHeader}>Address<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="tel" placeholder="Enter address" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="gender"/>
                                <Form.Label style={formHeader}>Gender<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select gender" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={20} className="" style={{color: "#D9D9D9"}}/>
                                    </div>
                                </div>
                                
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="dob"/>
                                <Form.Label style={formHeader}>Date of Birth</Form.Label>
                                <div className="calendar-wrapper">
                                    <Form.Control 
                                    type="text" 
                                    onFocus={(e) => e.target.type = 'date'}
                                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                                    placeholder="Pick a date" 
                                    style={formPlaceholder} className="s1 custom-input-with-calendar"
                                    required/>

                                    <div className="calendar-icon-container">
                                        <FaRegCalendarAlt size={20} className="text-muted"/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="maritalStatus"/>
                                <Form.Label style={formHeader}>Marital Status<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select Marital Status" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select Marital Status</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={20} className="" style={{color: "#D9D9D9"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="position"/>
                                <Form.Label style={formHeader}>Position</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" style={formPlaceholder}className="s1"/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="phoneNumber"/>
                                <Form.Label style={formHeader}>Phone Number<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="tel" placeholder="Enter phone number" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="email"/>
                                <Form.Label style={formHeader}>Email Address<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <Form.Control type="email" placeholder="Enter email" style={formPlaceholder}className="s1" required/>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="state"/>
                                <Form.Label style={formHeader}>State of Origin<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select State of Origin" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select State of Origin</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={20} className="" style={{color: "#D9D9D9"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Group controlId="lga"/>
                                <Form.Label style={formHeader}>Local Government<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="dropdown-wrapper">
                                    <Form.Select defaultValue="Select LGA" style={formPlaceholder} className="s1 custom-input-with-icon" required>
                                        <option value="">Select LGA</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </Form.Select>

                                    <div className="arrow-drop-container">
                                        <BiSolidDownArrow size={20} className="" style={{color: "#D9D9D9"}}/>
                                    </div>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Label style={formHeader}>Passport Photograph<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="file-box text-center pt-4 pb-5">
                                    <input 
                                        type="file"
                                        accept="img/png, img/jpeg"
                                        className="input-overlay"
                                        onChange={(e) => setPassportFile(e.target.files[0]?.name)} required 
                                    />
                                    <BsUpload size={24} className=" mb-3"/>
                                    <p className="mb-2" style={{fontWeight: "300", fontSize: "16px"}}>{passportFile ? passportFile :"Click to upload or drag and drop"}</p>
                                    <span className="" style={{fontWeight: "300", fontSize: "16px"}}>PNG, JPEG only (max. 200KB)</span>
                                </div>
                            </Col>

                            <Col md={6} className="mb-md-3 mb-3">
                                <Form.Label style={formHeader}>Birth Certificate<sup><IoIosStar size={10} style={{color: "#A44730"}}/></sup></Form.Label>
                                <div className="file-box text-center pt-4 pb-5">
                                    <input 
                                        type="file"
                                        accept="img/png, img/jpeg"
                                        className="input-overlay"
                                        onChange={(e) => setBirthCertFile(e.target.files[0]?.name)} required 
                                    />
                                    <BsUpload size={24} className=" mb-3"/>
                                    <p className="mb-2" style={{fontWeight: "300", fontSize: "16px"}}>{birthCertFile ? birthCertFile :"Click to upload or drag and drop"}</p>
                                    <span style={{fontWeight: "300", fontSize: "16px"}}>PNG, JPEG only (max. 200KB)</span>
                                </div>
                            </Col>

                            <Col md={6} className="">
                                <Form.Group className="" controlId="additionalnotes">
                                    <Form.Label style={formHeader}>Additional Notes</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="" style={formPlaceholder} className="s1 text-area w-75"/>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                            <Form.Label style={formHeader}>Do you have disability?       <span>*</span></Form.Label>
                                <div className="d-flex flex-column gap-2 mt-1 radio-style">
                                    <Form.Check type="radio" label="Yes" name="disability" id="disabilityYes" className="radio-form d-flex align-items-center gap-2 flex-shrink-0" required/>
                                    <Form.Check type="radio" label="No" name="disability" id="disabilityNo" className="radio-form d-flex align-items-center gap-2 flex-shrink-0"/>
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

export default StaffFormCompOne