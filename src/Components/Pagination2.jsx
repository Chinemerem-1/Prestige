import Blogcard from './Blogcards'
import imgw1 from "../assets/newspic1.png"
import imgw2 from "../assets/newspic2.png"
import { Col, Container, Row } from 'react-bootstrap'
import ButtonComp from './ButtonComp'
import { useState } from 'react'
import { WiStars } from "react-icons/wi"

const Pagination2 = () => {

    const blogCards = [
        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Let’s handle your dirt, while you enjoy the shine"
                description="The cost of cleaning services is vary depending on factors such as the size of space."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw2}
                title="Experience the brilliance of a spotless environment"
                description="It's important to choose a cleaning service any provider that is licensed and bonded."
                linkText="Read more>>"
            />
        },

        {
            item: <Blogcard
                date= "1"
                month="Jun"
                author="Prestige"
                commentCount="{10}"
                blogimg={imgw1}
                title="Leave the cleaning to us, and reclaim your time."
                description="Some cleaning companies offer eco-friendly or green cleaning services using"
                linkText="Read more>>"
            />
        },
    ]

    const [currentPage, setCurrentPage] = useState(1)

    const postsPerPage = 6;

    const startIndex = (currentPage - 1) * postsPerPage;

    const currentCards = blogCards.slice(
    startIndex,
    startIndex + postsPerPage
);

    const pages = [1, 2, 3, 4];

        const headStyle = {
            fontSize: 24,
            fontWeight: 600
        }

        const headLabel = {
            fontSize: 40,
            fontWeight: 600
        }
  return (
    <>
        <Container fluid className='px-md-5 py-5 mt-md-5'>
            <div className="px-md-5 d-flex flex-column align-items-end">
                <div className="text-container d-flex flex-column align-items-start gap-2 mb-3">
                    <WiStars className="starblog-header" size={60}/>
                    <p className="mb-0" style={headStyle}>BROWSE AND READ OUR LATEST NEWS</p>
                    <h3 style={headLabel}>Latest Stories</h3>
                </div>
                
            </div>
       
            <Row className=" justify-content-between px-md-5 blogs-holder">
                {currentCards.map((items) => {
                    return (
                        <Col md={4} className='g-4'>
                            <div className=' h-100 blog-card'>{items.item
                            }</div>
                        </Col>
                    )
                })} 
            </Row>

            <Row className='px-md-5 justify-content-between align-items-center pt-5'>
                <Col md={3} xs={6} className=''>
                    <div className='d-flex h-100 align-items-center gap-2 numbers'>
                        {pages.map((page) => {
                            return (
                                <button className={`page-btn ${currentPage === page ? "active" : ""}`} 
                                onClick={() => setCurrentPage(page)}>
                                    {page}
                                </button>
                            )
                        })}
                    </div>
                </Col>

                <Col md={3} xs={6} className='text-end'>
                    <ButtonComp buttonClass="butBrownClass card-button" buttonText="Next" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 4))} disabled={currentPage === 4}/>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Pagination2