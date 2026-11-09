import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const ContactSectionFour = () => {
  return (
    <div>
        <Container fluid className="px-md-5 my-5 py-md-5">
            <Row className="px-md-5 gx-0">
                <Col md={6}>
                    <h5 style={{fontWeight: "600", fontSize: "24px"}}>Most helpful positive review</h5>
                </Col>
                <Col md={6} className="text-md-end">
                    <p style={{fontWeight: "600", fontSize: "16px"}}>@kelvin.james <span className="text-muted"> jun 20, 2025</span></p>
                </Col>
                <Col md={12} className="mt-md-4 mt-2">
                    <div className="comment-stars d-flex gap-2 mb-3">
                        <FaStar size={20} style={{color: "#FFC107", flexShrink: "0"}}/>
                        <FaStar size={20} style={{color: "#FFC107", flexShrink: "0"}}/>
                        <FaStar size={20} style={{color: "#FFC107", flexShrink: "0"}}/>
                        <FaStar size={20} style={{color: "#FFC107", flexShrink: "0"}}/>
                        <FaStar size={20} style={{color: "#FFC107", flexShrink: "0"}}/>
                    </div>
                    <p className="mb-4" style={{fontWeight: "400", fontSize: "14px"}}>Lorem ipsum dolor sit amet consectetur. Sed imperdiet sollicitudin lobortis sodales aliquet tellus nibh. Enim facilisis fames gravida facilisis ut. Quis quam sed aliquam condimentum adipiscing ac nibh non massa. Vitae malesuada suspendisse tortor diam nisl. Diam consequat nulla hac dignissim. Libero volutpat nullam tempus amet volutpat. Mus nunc et volutpat scelerisque morbi gravida justo habitasse est.</p>
                </Col>

                <hr className="comment-line mb-4"/>

                <Col md={6}>
                    <p style={{fontWeight: "600", fontSize: "16px"}}>46 reviews</p>
                </Col>
                <Col md={6} className="text-md-end">
                    <p style={{fontWeight: "600", fontSize: "16px"}}><span className="text-muted">Sort by: </span>Most Relevant</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ContactSectionFour