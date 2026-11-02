import { Container, Row, Col } from "react-bootstrap"
import Images from "../../Components/Images"
import ButtonComp from "../../Components/ButtonComp"
import imgC from "../../assets/stars.png"
import imgw1 from "../../assets/working1.png"
import imgw2 from "../../assets/working2.png"
import imgw3 from "../../assets/working3.png"

const Homesection5 = () => {

        const processStyle = {
            // fontFamily: "Montserrat",
            // color: "black",
            fontSize: 24,
            fontWeight: 500
        }

        const processLabel = {
            // fontFamily: "Montserrat",
            // color: "black",
            fontSize: 40,
            fontWeight: 600
        }

        const processIntro = {
            // fontFamily: "Montserrat",
            // color: "black",
            fontSize: 14,
            fontWeight: 400
        }

    const processArray = [
        {
            number: 1,
            image: <Images src={imgw1} className="img-fluid w-100"/>,
            title: "Choose A Cleaning Plan",
            description: "Whether you need a one-time deep clean or regular maintenance, we offer flexible plans tailored to your schedule and space. Picks what works best for you-simple, fast and hassle-free."
        },

        {
            number: 2,
            image: <Images src={imgw2} className="img-fluid w-100"/>,
            title: "We clean",
            description: "Our team gets to work using eco-friendly products and proven techniques to leave every surface spotless, sanitized and fresh."
        },

        {
            number: 3,
            image: <Images src={imgw3} className="img-fluid w-100"/>,
            title: "Back To Comfort",
            description: "Our expert cleaning brings peace of mind and a relaxing environment-so you can breathe easy and enjoy your space again."
        }
    ]

  return (
    <>
        <Container fluid className="px-md-5 py-5">

            <Row className="px-md-5 g-0">
                <Col md={6} className="">
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <Images src={imgC}/>
                        <p className="mb-0" style={processStyle}>HOW WE WORK</p>
                    </div>
                    <h3 style={processLabel}>Our Working Process</h3>
                </Col>

                <Col md={6} className="">
                    <p className="text-md-end" style={processIntro}>We offer a range of services including carpet cleaning and window cleaning.</p>
                </Col>
            </Row>

            <Row className=" justify-content-between px-md-5 pt-md-5 g-md-5 gy-4 process-holder">
                
                {processArray.map((processes) => {
                    return (
                        <Col md={4} className="" key={processes.number}>
                            <div className="process-card ">
                                <div className="image-wrapper">
                                    {processes.image}
                                    <span className="process-number">
                                        {processes.number}
                                    </span>
                                </div>

                                <h3 className="mt-4">{processes.title}</h3>
                                <p>{processes.description}</p>

                            </div>
                        </Col>
                )})} 
            </Row>

            <div className="text-center mt-4">
                <ButtonComp address="/Contact" buttonClass="butBrownClass" buttonText="Book Our Cleaning"/>
            </div>

        </Container>
    </>
  )
}

export default Homesection5