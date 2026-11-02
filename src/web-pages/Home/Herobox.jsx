import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Images from "../../Components/Images"
import img from "../../assets/hero pics.svg"
import ButtonComp from "../../Components/ButtonComp"
import PlayComponent from "../../Components/PlayComponent"
import Dynamicstar from "../../Components/Dynamicstar"

const Herobox = () => {

    const imgStyle = {
        width: "85%"
    }

    const heroT = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 55,
        fontWeight: 700
    }

    const heroT2 = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 16,
        fontWeight: 500
    }

  return (
    <>
        <Container fluid className="hero-box ps-md-5 pe-md-0">
            <Row className=" g-0">
                <Col md={6} className="hero-section1 px-md-5 pt-md-5">
                    <Dynamicstar starHeader="home-star" size={80}/>
                    <p className="title mb-md-3 mb-0 pt-md-4 mt-md-5 mt-4">WE ARE PRESTIGE</p>

                    <h1 className="mb-3" style={heroT}>Professional Cleaning Service You Can Trust</h1>

                    <p className="hero-description mb-4 pe-md-4" style={{whiteSpace: 'pre-line'}}>We Are Eco-Friendly And Use Non-Toxic Product For The Safety Of Your Family, Clients And Pets.</p>
                    
                    <div className="hero-cta d-flex gap-md-5">
                        <div className="">
                            <ButtonComp address="/Login" buttonClass="butBrownClass" buttonText="Book Online"/>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <PlayComponent sizePlay={21} stylePlay={{color: "white"}} />
                            <p className="mb-0" style={heroT2}>Watch Our Story</p>
                        </div>
                    </div>
                </Col>

                <Col md={6} className="hero-section2">
                    <Images src={img} imgStyles={imgStyle} fluid className="d-block ms-auto"/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Herobox