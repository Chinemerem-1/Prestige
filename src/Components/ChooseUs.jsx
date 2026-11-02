import { Container, Row, Col } from "react-bootstrap"
import Images from "./Images"
import img from "../assets/section3.svg"
import imgS from "../assets/stars.png"
import imgP from "../assets/section31.svg"
import imgM from "../assets/section33.svg"
import { FaHandsPraying } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";

const ChooseUs = () => {

    const headerStyle = {
        fontFamily: "Montserrat",
        color: "black",
        fontSize: 24,
        fontWeight: 500
    }

    const listArray = [
        {
            id: 0,
            icon: <Images src={imgP}/>,
            title: 'Professional Expertise',
            description: 'We use non-toxic and eco-friendly cleaning products that are safe for both pets, client and children.'
        },

        {
            id: 1,
            icon: <FaClock style={{color: "white", height: "34.84px",  width: "35px" }} />,
            title: 'Flexible Arrival Time',
            description: 'We understand that every client has a unique schedule, which is why we offer flexible arrival times to suit your needs.'
        },

        {
            id: 2,
            icon: <Images src={imgM}/>,
            title: 'Top Rated Company',
            description: 'We take pride in delivering exceptional results with every visit. Our reputation is built on reliability, attention to detail, and outstanding customer satisfaction.'
        },

        {
            id: 3,
            icon: <FaHandsPraying style={{color: "white",  height: "35px", width: "38px" }} />,
            title: 'Satisfaction Guaranteed',
            description: 'We stand behind the quality of our work with a 100% satisfaction guarantee. Our goal is to leave every space spotless and every customer smiling.'
        },
    ]
    
  return (
    <>
        <Container fluid className="ps-md-5 py-5 pe-md-0">
            <Row className="align-items-center g-0 py-md-5">

                <Col md={6} className="px-md-5">
                    <div className="d-flex align-items-center gap-2 mb-5 pt-md-3">
                        <Images src={imgS}/>
                        <p className="mb-0" style={headerStyle}>WHY CHOOSE US</p>
                    </div>

                    <div className="d-flex flex-column gap-4">
                        {listArray.map((lists, index) => {
                            return (
                                <div className="item-holder d-flex align-items-start gap-3" key={lists.id}>
                                    {index < listArray.length - 1 && (
                                        <span className="list-line"></span>
                                    )}

                                    <div className="icon-circle d-flex align-items-center justify-content-center flex-shrink-0">
                                        <span className="icon-size">{lists.icon}</span>
                                    </div>

                                    <div className="list-body">
                                        <h3 className="">{lists.title}</h3>
                                        <p className="">{lists.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Col>

                <Col md={6} className="mainImg-holder">
                    <Images src={img} className="d-block ms-auto mainImg"/>
                    {/* <WiStars size={40} className="star-faq1" style={{color: "#3a65f2"}}/> */}
                    <WiStars size={40} className="star-faq2" style={{color: "#3a65f2"}}/>
                    <WiStars size={40} className="star-faq3" style={{color: "#3a65f2"}}/>
                    {/* <WiStars size={40} className="star-faq4" style={{color: "#3a65f2"}}/> */}
                    <WiStars size={40} className="star-faq5" style={{color: "#3a65f2"}}/>
                </Col>
            </Row>
        </Container>
    </>
    
  )
}

export default ChooseUs