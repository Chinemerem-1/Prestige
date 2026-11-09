import { Col, Container, ProgressBar, Row } from "react-bootstrap"
import { FaStar } from "react-icons/fa";
import ButtonComp from "../../Components/ButtonComp";
import { WiStars } from "react-icons/wi"

const ContactSectionThree = () => {
    const reviewBar = [
        {stars: 5, value: 98, label: "98%"},
        {stars: 4, value: 80, label: "4.5k"},
        {stars: 3, value: 40, label: "50"},
        {stars: 2, value: 20, label: "16"},
        {stars: 1, value: 10, label: "1"}
    ]

    const headLabel = {
            fontSize: 24,
            fontWeight: 500
        }
  return (
    <>
        <Container fluid className="px-md-5 mt-5">

            <div className="text-center mb-4 review-container">
                <WiStars className="starrev-header" size={50}/>
                <h3 style={headLabel}>Customer Ratings & Review</h3>
                <WiStars className="starrev2-header" size={50}/>
            </div>
            <Row className="px-md-5 align-items-center g-md-0 gy-4">
                <Col md={4} className="">
                    <div className="d-flex flex-column gap-2 rating-holder">
                        {reviewBar.map((items) => {
                            return (
                                <div className="d-flex gap-1 align-items-center">
                                    <span className="d-flex align-items-center gap-1 fw-medium" style={{width: "25px", fontSize: "15px", fontWeight: "500"}}>
                                        {items.stars} <FaStar size={8} style={{color: "#FFC107", flexShrink: "0"}}/>
                                    </span>

                                    <div className="flex-grow-1">
                                        <ProgressBar
                                            now={items.value}
                                            className="review-progress"
                                            style={{height: "5px"}}
                                            variant="progress-color"
                                        />
                                    </div>

                                    <span className="text-end" style={{fontSize: "16px", fontWeight: "500", width: "35px"}}>
                                        {items.label}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </Col>

                <Col md={8} className="d-flex align-items-stretch">
                    <div className="w-100 d-flex overflow-hidden review-row">
                    
                        <div className="flex-fill d-flex flex-column align-items-center justify-content-center p-4 text-center cust-rev">
                            <h3 className="mb-1 mt-3" style={{fontWeight: "500", fontSize: "24px"}}>4.3</h3>
                            <div className="d-flex gap-1 mb-3 mt-3">
                                {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} style={{color: "#FFC107", flexShrink: "0"}} />
                                ))}
                            </div>
                            <p className="mb-3" style={{fontWeight: "400", fontSize: "14px"}}>46 Ratings</p>
                        </div>

                        <div className="flex-fill d-flex flex-column align-items-center justify-content-center p-4 text-center cust-rev">
                            <h3 className="mb-1 mt-3" style={{fontWeight: "500", fontSize: "24px"}}>4.8</h3>
                            <div className="d-flex gap-1 mb-3 mt-3">
                                {[...Array(5)].map((_, i) => (
                                <FaStar key={i} size={20} style={{color: "#FFC107", flexShrink: "0"}} />
                                ))}
                            </div>
                            <p className="mb-3" style={{fontWeight: "400", fontSize: "14px"}}>Last Month</p>
                        </div>

                        <div className="flex-fill d-flex flex-column justify-content-center align-items-center gap-3 p-4 text-center cust-rev">
                            <ButtonComp buttonClass="butBrownClass" buttonText="Write A Review" />
                            <ButtonComp buttonClass="butWhiteClass" buttonText="See All Reviews" />
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ContactSectionThree