import { Container, Row, Col } from "react-bootstrap"
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"
import test1 from "../../assets/testimonial1.png"
import test2 from "../../assets/testimonial2.png"
import test3 from "../../assets/testimonial3.png"
import testpunc from "../../assets/test-apostre.svg"
import ButtonComp from "../../Components/ButtonComp"

const Homesection7 = () => {

  const headStyle = {
      fontSize: 24,
      fontWeight: 500
  }

  const headLabel = {
      fontSize: 40,
      fontWeight: 600
  }

  const testStyle = [

  ]

  return (
    <>
      <Container fluid className="px-md-5 py-5" style={{backgroundColor: "#A44730"}}>
        <Row className="g-0 px-md-5 justify-content-between">
          <Col md={4} className="">
            <div className="mb-3 mt-md-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                    <Images src={imgC}/>
                    <p className="mb-0 text-white" style={headStyle}>TESTIMONIALS</p>
                </div>
                    <h3 style={headLabel} className="text-white">What Our Clients Say About Us</h3>
            </div>
            <p className="mb-4 text-white">Our team is trained and experienced, and we use high-quality cleaning products and equipment to ensure excellent results. We also conduct regular quanlity checks and welcome customer feedback.</p>
            <ButtonComp address="/Login" buttonClass="butBlueClass" buttonText="View more"/>
          </Col>

          <Col md={7} className=" d-flex flex-column gap-3 mt-md-0 mt-4">
            <Row className="g-0">
              <Col md={10} className="d-block ms-auto">
                <div className="d-flex gap-3 align-items-center justify-content-end test-holder" style={testStyle}>
                  <Images src={test1} className="flex-shrink-0"/>
                  <div className="test-info">
                    <h3>James Smith</h3>
                    <p className="mb-0">We're thrilled to hear that you’re happy with our service. It means a lot to us to know we’ve made a positive difference in your space. We look forward to keeping things spotless for you again soon!</p>
                    <Images src={testpunc} className="apostre-test"/>
                  </div>
                  <span className="test-card-line"></span>
                </div>
              </Col>
            </Row>

            <Row className="g-0">
              <Col md={10}>
                <div className="d-flex gap-3 align-items-center justify-content-end test-holder" style={testStyle}>
                  <Images src={test2} className="flex-shrink-0"/>
                  <div className="test-info">
                    <h3>Bola Kayode</h3>
                    <p className="mb-0">We're thrilled to hear that you’re happy with our service. It means a lot to us to know we’ve made a positive difference in your space. We look forward to keeping things spotless for you again soon!</p>
                    <Images src={testpunc} className="apostre-test"/>
                  </div>
                  <span className="test-card-line"></span>
                </div>
              </Col>
            </Row>

            <Row className="g-0">
              <Col md={10} className="d-block ms-auto">
                <div className="d-flex gap-3 align-items-center justify-content-end test-holder" style={testStyle}>
                  <Images src={test3} className="flex-shrink-0"/>
                  <div className="test-info">
                    <h3>Sandra John</h3>
                    <p className="mb-0">We're thrilled to hear that you’re happy with our service. It means a lot to us to know we’ve made a positive difference in your space. We look forward to keeping things spotless for you again soon!</p>
                    <Images src={testpunc} className="apostre-test"/>
                  </div>
                  <span className="test-card-line"></span>
                </div>
              </Col>
            </Row>
            
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homesection7