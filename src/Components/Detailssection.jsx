import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import Images from "../Components/Images"
import ButtonComp from "../Components/ButtonComp"
import imgC from "../assets/stars.png"
import { IoCheckbox } from "react-icons/io5";
import { useEffect, useState } from "react"
import PlayComponent from "./PlayComponent"

const Detailssection = ({imgL1, slide1, slide2, slide3, compHeader, paragraphOne, paragraphTwo, classCheck1, classCheck2, classCheck3, classCheck4, listText1, listText2, listText3, listText4, buttonText}) => {
    const headerStyle = {
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

  const DetailsLists = [
    {
      id: 1,
      checkbox: <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className={classCheck1}/>,
      paragraph: listText1
    },

    {
      id: 1,
      checkbox: <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className={classCheck2}/>,
      paragraph: listText2
    },

    {
      id: 1,
      checkbox: <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className={classCheck3}/>,
      paragraph: listText3
    },

    {
      id: 1,
      checkbox: <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className={classCheck4}/>,
      paragraph: listText4
    },

  ]

  const checkT = {
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

  const slideImages = [slide1, slide2, slide3]

  const [currentSlide, setcurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setcurrentSlide((prevIndex) => (prevIndex + 1) % slideImages.length)
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
        <Container fluid className=" pt-md-5 pb-5 pb-md-0 px-md-5">
            <Row className="py-md-5 gy-md-0 gy-4">
                <Col md={6} className="d-flex imgH align-items-end px-md-5">

                    <div className="img-col-holder px-md-1">
                        <div className=" main-img-holder pe-md-2">
                            <Images src={imgL1} className="img-fluid main-img me-md-3"/>
                        </div>
                    
                        <div className=" slideshow-img-holder ps-md-2">
                            <Images src={slideImages[currentSlide]} className="img-fluid slide-transition"/>
                            <PlayComponent sizePlay={31} stylePlay={{color: "white", position: "absolute", top: "43%", left: "43%", width: "64px", height: "64px"}}/>
                        </div>
                    </div>

                </Col>

                <Col md={6} className=" pe-md-5 ps-md-0" >
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Images src={imgC}/>
                        <p className="mb-0" style={headerStyle}>{compHeader}</p>
                    </div>
                    <p className="mb-3" style={bodyStyle}>{paragraphOne}</p>
                    <p className="mb-3" style={bodyStyle}>{paragraphTwo}</p>


                    <section >
                        {/* <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT}>{listOne}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT}>{listTwo}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT}>{listThree}</p>
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                            <IoCheckbox style={{color: "#3A65F2", fontSize: "25px"}} className="flex-shrink-0"/>
                            <p className="mb-0" style={checkT}>{listFour}</p>
                        </div> */}
                        <Row className="d-flex  gap-3">
                          {DetailsLists.map((items) => {
                              return (
                                  <Col md={12} className="">
                                    <div className="d-flex gap-2 align-items-center">
                                      {items.checkbox}
                                      <p className="mb-0" style={checkT}>
                                        {items.paragraph}
                                      </p>
                                    </div> 
                                  </Col>
                              )
                          })} 
                         </Row>
                    </section>

                    <ButtonComp address="/About" buttonClass="butBlueClass mt-4" buttonText={buttonText}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Detailssection