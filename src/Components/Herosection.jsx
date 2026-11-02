import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Images from "../Components/Images"
import Dynamicstar from "./Dynamicstar";

const Herosection = ({img, headerText}) => {

    const imgStyle = {
        width: "85%"
    }

    const heroT = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 55,
        fontWeight: 700
    }

    const heroTextSyle = {
        fontSize: 30,
        fontWeight: 600
    }

  return (  
    <>
        <Container fluid className="hero-comp ps-md-5 pe-md-0">
            <Row className="g-0 align-items-center row-holder">
                <Col md={4} className="hero-section1 ps-md-5">
                    <Dynamicstar starHeader="star-header" size={80}/>
                    <h3 className="mb-0 ps-md-5 text-md-start text-center text-nowrap" style={heroTextSyle}>{headerText}</h3>
                </Col>

                <Col md={8} className="hero-comp2">
                    <Images src={img} imgStyles={imgStyle} fluid className="d-block ms-auto"/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Herosection