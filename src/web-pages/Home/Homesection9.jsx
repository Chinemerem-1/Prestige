import { Container, Row, Col } from "react-bootstrap"
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"
import imgw1 from "../../assets/newspic1.png"
import imgw2 from "../../assets/newspic2.png"
import { IoMdPerson } from "react-icons/io";
import { MdComment } from "react-icons/md";

const Homesection9 = () => {

        const newsStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const newsLabel = {
            fontSize: 40,
            fontWeight: 600
        }

    const newsblogArray = [
        {
            number: 1,
            date: 1,
            month: "Jun",
            author: "Prestige",
            commentCount: "{10}",
            image: <Images src={imgw1} className="img-fluid w-100 blog-image"/>,
            title: "Let’s handle your dirt, while you enjoy the shine",
            description: "The cost of cleaning services is vary depending on factors such as the size of space.",
            linkText: "Read more>>"

        },

        {
            number: 2,
            date: 1,
            month: "Jun",
            author: "Prestige",
            commentCount: "{10}",
            image: <Images src={imgw2} className="img-fluid w-100 blog-image"/>,
            title: "Experience the brilliance of a spotless environment",
            description: "It's important to choose a cleaning service any provider that is licensed and bonded.",
            linkText: "Read more>>"
        },

        {
            number: 3,
            date: 1,
            month: "Jun",
            author: "Prestige",
            commentCount: "{10}",
            image: <Images src={imgw1} className="img-fluid w-100 blog-image"/>,
            title: "Leave the cleaning to us, and reclaim your time ",
            description: "Some cleaning companies offer eco-friendly or green cleaning services using a cleaning service any provider that is licensed.",
            linkText: "Read more>>"
        }
    ]

  return (
    <>
        <Container fluid className="blogndnews-holder px-md-5 py-5">

            <Row className="px-md-5 g-0">
                <Col md={6} className="">
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <Images src={imgC}/>
                        <p className="mb-0" style={newsStyle}>BLOG AND NEWS</p>
                    </div>
                    <h3 style={newsLabel}>Latest News & Blog</h3>
                </Col>
            </Row>

            <Row className=" justify-content-between px-md-5 pt-md-5  processblog-holder">
                
                {newsblogArray.map((items) => {
                    return (
                        <Col md={4} className="g-4" key={items.number}>
                            <div className="blog-card h-100">

                                <div className="blog-wrapper flex-shrink-0">
                                        {items.image}
                                    <div className="image-overlay"></div>
                                    <div className="blog-number text-white ps-3 pt-1 pb-2 pe-3 text-center z-3">
                                        <span className="d-block date-num lh-1">{items.date}</span>
                                        <span className="d-block date-month">{items.month}</span>
                                    </div>
                                </div>
                                <div className="pt-5 pb-3 px-5">
                                    <div className="d-flex blog-meta align-items-center justify-content-between">
                                        <div className="d-flex gap-2  align-items-center">
                                            <IoMdPerson style={{color: "#3A65F2", fontSize:"23px"}}/>
                                            <span style={{fontWeight: "400", fontSize: "14px"}}>By {items.author}</span>
                                        </div>
                                        <span>|</span>
                                        <div className="d-flex gap-2 align-items-center">
                                            <MdComment style={{color: "#3A65F2", fontSize:"23px"}}/>
                                            <span style={{fontWeight: "400", fontSize: "14px"}}>Comment {items.commentCount}</span>
                                        </div>
                                    </div>

                                    <h2 className="mt-4" style={{fontWeight: "600", fontSize: "20px"}}>{items.title}</h2>

                                    <p className="text-start" style={{fontWeight: "400", fontSize: "16px"}}>{items.description}</p>

                                    <a href="/Blog" className="text-decoration-none text-dark fw-bold read-more-link">{items.linkText}</a>
                                </div>
                                
                            </div>
                        </Col>
                )})} 
            </Row>
        </Container>
    </>
  )
}

export default Homesection9