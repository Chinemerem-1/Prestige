import { Container, Row, Col } from "react-bootstrap"
import Images from "./Images"
import fotImag from "../assets/logo.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <Container fluid className="px-md-5 pt-5 pb-2 fut">
                <Row className="px-md-5 py-3 gap-4 justify-content-between align-items-center">
                    <Col md={4}>
                        <Images src={fotImag}/>
                        <p className="mt-3" style={{fontSize: "14px", fontWeight: "400"}}>We take pride in delivering high-quality, reliable, and affordable cleaning solutions for homes and businesses. Whether you need a deep clean, regular maintenance, or move-in/move-out services, our  team is here to make your space shine.</p>

                        <div className="d-flex gap-2" style={{}}>
                            <div className="" role="button" style={{backgroundColor: '#3A65F2', padding: '5px', borderRadius: "5px"}}>
                                <FaFacebookF style={{fontSize: "20px", color: "white"}}/>
                            </div>
                            
                            <div className="" role="button" style={{backgroundColor: '#3A65F2', padding: '5px', borderRadius: "5px"}}>
                                <FaLinkedinIn style={{fontSize: "20px", color: "white"}}/>
                            </div>
                            
                            <div className="" role="button" style={{backgroundColor: '#3A65F2', padding: '5px', borderRadius: "5px"}}>
                                <FaXTwitter style={{fontSize: "20px", color: "white"}}/>
                            </div>
                            
                            <div className="" role="button" style={{backgroundColor: '#3A65F2', padding: '5px', borderRadius: "5px"}}>
                                <FaWhatsapp style={{fontSize: "20px", color: "white"}}/>
                            </div>
                            
                            <div className="" role="button" style={{backgroundColor: '#3A65F2', padding: '5px', borderRadius: "5px"}}>
                                <FaGooglePlusG style={{fontSize: "20px", color: "white"}}/>
                            </div>
                            
                        </div>                       
                    </Col>

                    <Col md={7}>
                        <Row className="">
                            <Col md={4}  xs={6} className="d-flex flex-column gap-2">
                                <h6 className="mb-0" style={{fontSize: "16px", fontWeight: "600"}}>SERVICES</h6>
                                <div className="d-flex serv-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0 "><Link to="/Industrial" className="links-footer">Industrial Cleaning</Link></p>
                                </div> 
                                <div className="d-flex serv-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Fumigation" className="links-footer">Deep Cleaning</Link></p>
                                </div>
                                <div className="d-flex serv-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Residential" className="links-footer">Residential Cleaning</Link></p>
                                </div>
                                <div className="d-flex serv-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Janitorial" className="links-footer">Janitorial Cleaning</Link></p>
                                </div>
                                <div className="d-flex serv-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Material" className="links-footer">Supply Materials</Link></p>
                                </div>
                                <div className="d-flex serv-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Post+Construction" className="links-footer">Post Construction</Link></p>
                                </div>
                            </Col>

                            <Col md={3}  xs={6} className="d-flex flex-column gap-2">
                                <h6 className="mb-0" style={{fontSize: "16px", fontWeight: "600"}}>OUR LINKS</h6>
                                <div className="d-flex links-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/" className="links-footer">Home</Link></p>
                                </div>
                                <div className="d-flex links-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/About" className="links-footer">About</Link></p>
                                </div>
                                <div className="d-flex links-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Contact" className="links-footer">Privacy/Policy</Link></p>
                                </div>
                                <div className="d-flex links-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="/Blog" className="links-footer">Portfolio</Link></p>
                                </div>
                                <div className="d-flex links-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link as={HashLink} smooth to="/#home-faq" className="links-footer">FAQ</Link></p>
                                </div>
                                <div className="d-flex links-holder align-items-center gap-1">
                                    <PiStarFourFill size={13} style={{color: "#3A65F2"}}/>
                                    <p className="mb-0"><Link to="" className="links-footer">Book Online</Link></p>
                                </div>
                            </Col>

                            <Col md={5} xs={12} className="d-flex flex-column gap-2  mt-md-0 mt-4">
                                <h6 className="mb-0" style={{fontSize: "16px", fontWeight: "600"}}>GET IN TOUCH</h6>
                                <div className="d-flex git-holder align-items-center gap-2 justify-content-start">
                                    <FaLocationDot size={20} style={{color: "#3A65F2", flexShrink: "0"}}/>
                                    <p className="mb-0">3rd Floor, 186A Igbosere Road Lagos,Nigeria. </p>
                                </div>
                                <div className="d-flex git-holder align-items-center gap-2 justify-content-start">
                                    <FaPhoneAlt size={20} style={{color: "#3A65F2", flexShrink: "0"}}/>
                                    <p className="mb-0">234-80-32792064</p>
                                </div>
                                <div className="d-flex git-holder align-items-center gap-2 justify-content-start">
                                    <MdEmail size={21} style={{color: "#3A65F2", flexShrink: "0"}}/>
                                    <p className="mb-0">prestige@prestige-hygiene.com</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <hr className="mx-md-5 fut-line"/>

                <p className="px-md-5 text-center" style={{fontFamily: "League Spartan",fontSize: "12px", fontWeight: "400" }}>© 2025 Prestige-hygiene. All rights reserved.</p>
            </Container>
        </>
    )
}

export default Footer