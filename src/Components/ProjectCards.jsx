import { Container, Row, Col } from "react-bootstrap"
import Images from "../Components/Images"
import sectionImg from "../assets/card1-project.png"
import sectionImg2 from "../assets/card2-project.png"
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

const ProjectCards = ({labelOne, labelTwo}) => {

  return (
    <>
        <div className="comparison-card position-relative">

            <Row className="wrapper g-0">
                <Col xs={6} className="position-relative">
                    <Images src={sectionImg} className="img1 object-fit-cover"/>
                    <span className={labelOne} style={{position: "absolute", top: "45%", left: "25px", padding: "6px 18px", fontWeight: "700", fontSize: "16px", borderRadius: "6px", color: "#fff", backgroundColor: "#2563eb", zIndex: "2"}}>Before</span>
                </Col>

                <Col xs={6} className="position-relative">
                    <Images  src={sectionImg2} className="img1 object-fit-cover d-block ms-auto"/>
                    <span className={labelTwo} style={{position: "absolute", top: "45%", right: "25px", padding: "6px 18px", fontWeight: "700", fontSize: "16px", borderRadius: "6px", color: "#fff", backgroundColor: "#2563eb", zIndex: "2"}}>After</span>
                </Col>
            </Row>

            <div className="comparison-button-proj">
                <button className="arrow-button-proj" type="button">
                    <BiSolidLeftArrow className="arrow-proj arrow-left-proj"/>
                </button>

                <button className="arrow-button" type="button"> 
                    <BiSolidRightArrow className="arrow-proj arrow-right-proj"/>
                </button>
            </div>

        </div>
    </>

  )
}

export default ProjectCards