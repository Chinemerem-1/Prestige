import {Container, Row, Col} from "react-bootstrap"
import HomeSection2Cards from "../../Components/HomeSection2Cards"
import img1 from "../../assets/section2 first.png"
import img2 from "../../assets/section2 second.png"
import img3 from "../../assets/section2 third.png"
import Images from "../../Components/Images"
import ButtonComp from "../../Components/ButtonComp"
import logo21 from "../../assets/Vector.png"


const Homesection2 = () => {
    const sectionArray = [
       {
        item:  <HomeSection2Cards src={img1} texth2="Residential Cleaning" textp="Our residential cleaning services are designed to keep your living space fresh, tidy, and comfortable." />
       },

       {
        item:  <HomeSection2Cards src={img2} texth2="Janitorial Cleaning" textp="Our janitorial services keep your workplace safe, professional and free of germs." />
       },

       {
        item:  <HomeSection2Cards src={img3} texth2="Supply Of Cleaning Materials" textp="Our cleaning services come fully equipped with high-quality, eco-friendly  materials." />
       }
    ]

    const styleh2 = {
        // fontFamily: "Montserrat",
        // color: "black",
        fontSize: 40,
        fontWeight: 600
    }

    const stylep = {
        // fontFamily: "Montserrat",
        // color: "black",
        fontSize: 24,
        fontWeight: 500
    }

  return (
    <>
        <Container fluid className="px-md-5 py-5" style={{backgroundColor: "#A44730"}}>
            <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-center align-items-center text-white gap-2">
                    <Images src={logo21}/>
                    <p className="mb-0" style={stylep}>OUR SERVICES</p>
                    <Images src={logo21}/>
                </div>
            
                <h2 style={styleh2} className="text-center text-white ">Our Range Of Specified Cleaning Service</h2>
            </div>

            <Row className="justify-content-around mt-5 px-md-5 gy-md-0 gy-3">
                {sectionArray.map((sectionA) => {
                    return (
                        <Col md={4} className="">
                            {sectionA.item}
                        </Col> 
                    )
                })}  
            </Row>
            
            <div className="text-center mt-5">
                <ButtonComp address="/sec1" buttonClass="butBlueClass mt-1" buttonText="Browse All Service"/>
            </div>   
        </Container>
    </>
  )
}

export default Homesection2