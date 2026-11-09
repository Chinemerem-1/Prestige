import { Container, Row, Col } from "react-bootstrap"
import Images from "../../Components/Images"
import ButtonComp from "../../Components/ButtonComp"
import imgC from "../../assets/stars.png"
import imgw1 from "../../assets/working1.png"
import imgw2 from "../../assets/working2.png"
import imgw3 from "../../assets/working3.png"
import { FaCircle } from "react-icons/fa";
import ProcessImage from "../../Components/ProcessImage"
import { MdPlayArrow } from "react-icons/md";

const Homesection5 = () => {

        const processStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const processLabel = {
            fontSize: 40,
            fontWeight: 600
        }

        const processIntro = {
            fontSize: 14,
            fontWeight: 400
        }

    const processArray = [
        {
            item: <ProcessImage
                src={imgw1}
                iconLeft={<FaCircle size={20}/>}
                iconRight={<MdPlayArrow size={42} className="first-arrow"/>}
                floatNum="1"
                lineStyle1={{width: "40px", border: "2px black solid"}}
                lineStyle2={{width: "40px", border: "2px black solid"}}
            />,
            title: "Choose A Cleaning Plan",
            description: "Whether you need a one-time deep clean or regular maintenance, we offer flexible plans tailored to your schedule and space. Picks what works best for you-simple, fast and hassle-free."
        },

        {
            item: <ProcessImage
                src={imgw2}
                iconRight={<FaCircle size={20} style={{opacity: "0"}}/>}
                
                floatNum="2"
                lineStyle1={{width: "40px", border: "2px black solid"}}
                lineStyle2={{width: "40px", border: "2px black solid"}}
            />,
            title: "We clean",
            description: "Our team gets to work using eco-friendly products and proven techniques to leave every surface spotless, sanitized and fresh."
        },

        {
            item: <ProcessImage
                src={imgw3}
                iconLeft={<MdPlayArrow size={42} className="second-arrow"/>}
                iconRight={<FaCircle size={20}/>}
                floatNum="3"
                lineStyle1={{width: "40px", border: "2px black solid"}}
                lineStyle2={{width: "40px", border: "2px black solid"}}
            />,
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

            <Row className="g-md-0 gy-4 process-holder py-md-5">
                {processArray.map((processes) => {

                    return (
                        <Col md={4} className="position-relative process-cards" key={processes.number}>
                            <div className="process-card">
                                <div className="process-card2 position-relative">
                                    {processes.item}                                 
                                </div>

                                <h3 className="mt-4">{processes.title}</h3>
                                <p>{processes.description}</p>

                            </div>
                        </Col>
                )})} 
            </Row>

            <div className="text-center mt-1">
                <ButtonComp address="/Contact" buttonClass="butBrownClass" buttonText="Book Our Cleaning"/>
            </div>

        </Container>
    </>
  )
}

export default Homesection5