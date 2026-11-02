import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import ButtonComp from "../../Components/ButtonComp"
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"
import imgL1 from "../../assets/section1 first.png"
import imgL2 from "../../assets/section1 third.png"
import imgL3 from "../../assets/section1 second.png"
import { IoCheckbox } from "react-icons/io5";

 const Homesection1 = () => {

  const headerStyle = {
    // fontFamily: "Montserrat",
    // color: "black",
    fontSize: 24,
    fontWeight: 500
  }

  const headerStyle2 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 40,
    fontWeight: 600
  }

  const bodyStyle = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 300
  }

  const checkT1 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const checkT2 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const checkT3 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const checkT4 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 16,
    fontWeight: 500
  }

  const THp1 = {
    fontFamily: "Montserrat",
    color: "black",
    fontSize: 40,
    fontWeight: 600
  }

  const THp2 = {
    fontFamily: "Montserrat",
    color: "#3A65F2",
    fontSize: 14,
    fontWeight: 600
  }

  return (
    <>
      <Container fluid className=" py-5 px-md-5">
        <Row className="py-md-5 g-0">
          <Col md={6} className="d-flex imgH align-items-end ps-md-5">
              <Images src={imgL3} className="imgL3 img-fluid z-1"/>

              <div className="imgTH text-center">
                <p className="mb-0" style={THp1}>10+</p>
                <p className="mb-0" style={THp2}>Years Of Experience</p>
              </div>

              <div className="d-flex imgH2 flex-column gap-1 z-2">
                <Images src={imgL1} className="img-fluid imgL1"/>
                <Images src={imgL2} className="d-block ms-auto img-fluid imgL2"/>
              </div>
          </Col>

          <Col md={6} className=" pe-md-5 ps-md-0 pt-md-5 mt-md-0 mt-5" >
            <div className="d-flex align-items-center gap-2 mb-3 pt-md-3">
              <Images src={imgC}/>
              <p className="mb-0" style={headerStyle}>ABOUT US</p>
            </div>
            <h2 className="mb-3" style={headerStyle2}>Passionate About Cleaning Since Day One....</h2>
            <p className="mb-3" style={bodyStyle}>At [Prestige Hygiene], we believe a clean space is a happy space. 
With a team of trained, trustworthy professionals, we provide reliable and detailed cleaning services for homes and businesses. Whether it’s a one-time deep clean or regular upkeep, we’re committed to making your environment spotless, fresh, and stress-free.</p>


            <section className="d-flex flex-column gap-3">
              <div className="d-flex gap-2 align-items-center">
                <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                <p className="mb-0" style={checkT1}>Loaded with professional and honest cleaners</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                <p className="mb-0" style={checkT2}>Provide the finest clean service</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                <p className="mb-0" style={checkT3}>100% satisfaction cleaning service</p>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                <p className="mb-0" style={checkT4}>We are bonded and insured</p>
              </div>
            </section>  
            <ButtonComp address="/About" buttonClass="butBlueClass mt-4" buttonText="Discover more"/>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homesection1