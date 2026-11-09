import { Col, Container, Row } from 'react-bootstrap'
import ButtonComp from './ButtonComp'
import { useState } from 'react'
import { WiStars } from "react-icons/wi"
import ProjectCards from './ProjectCards'

const Pagination1 = () => {

    const categories = [
        "All",
        "Residential",
        "Janitorial",
        "Pest Control",
        "Industrial",
        "Post Construction"
    ]

    const projCards = [
        {   
            id: 1,
            category: "Residential",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 2,
            category: "Janitorial",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 3,
            category: "Pest Control",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 4,
            category: "Industrial",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 5,
            category: "Post Construction",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 6,
            category: "Residential",
            item: <ProjectCards labelOne="lbl-brown" labelTwo="lbl-brown"/>
        },

        {   
            id: 7,
            category: "Janitorial",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 8,
            category: "Pest Control",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 9,
            category: "Industrial",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 10,
            category: "Post Construction",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 11,
            category: "Residential",
            item: <ProjectCards/>
        },

        {   
            id: 12,
            category: "Janitorial",
            item: <ProjectCards labelOne="lbl-brown" labelTwo="lbl-brown"/>
        },

        {   
            id: 13,
            category: "Pest Control",
            item: <ProjectCards labelOne="lbl-brown" labelTwo="lbl-brown"/>
        },

        {   
            id: 14,
            category: "Industrial",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 15,
            category: "Post Construction",
            item: <ProjectCards/>
        },

        {   
            id: 16,
            category: "Residential",
            item: <ProjectCards labelOne="lbl-brown" labelTwo="lbl-brown"/>
        },

        {   
            id: 17,
            category: "Janitorial",
            item: <ProjectCards/>
        },

        {   
            id: 18,
            category: "Pest Control",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 19,
            category: "Industrial",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

        {   
            id: 20,
            category: "Post Construction",
            item: <ProjectCards labelOne="lbl-black" labelTwo="lbl-black"/>
        },

    ]

    const pages = [1, 2, 3, 4];

        const headStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const headLabel = {
            fontSize: 30,
            fontWeight: 600
        }

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All')

    const postsPerPage = 4;

    const filteredCards = selectedCategory === 'All'
    ? projCards
    : projCards.filter(card => card.category === selectedCategory);

    const startIndex = (currentPage - 1) * postsPerPage;
    const currentCards = filteredCards.slice(
    startIndex,
    startIndex + postsPerPage
    );

    // 3. Dynamically calculate total pages based on filtered results
    const totalPages = Math.ceil(filteredCards.length / postsPerPage) || 1;

    // 4. Handler when user clicks a category button
    const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1); // Reset back to page 1 on category change
    };
  return (
    <>
        <Container fluid className='px-md-5 py-5 mt-md-5'>
            <div className="d-flex flex-column mb-5">
                <div className="d-flex justify-content-center align-items-center gap-1">
                    <WiStars className="" size={60} style={{color: "#3A65F2"}}/>
                    <p className="mb-0" style={headStyle}>OUR PROJECT</p>
                    <WiStars className="" size={60} style={{color: "#3A65F2"}}/>
                </div>
            
                <h2 style={headLabel} className="text-center">Before & After Magic</h2>
            </div>

            <Row className="category-buttons gap-3 g-0 justify-content-center align-items-center mb-5">
                {categories.map((names) => {
                    const isActive = selectedCategory === names;
                    return (
                        <Col xs="auto" className='' key={names}>
                            <div onClick={() => handleCategoryClick(names)} style={{ cursor: 'pointer' }}>
                                <ButtonComp buttonClass={`butBrownClass project-category ${isActive ? 'active-category' : ''}`} buttonText={<span>{names}</span>}/>
                            </div>
                        </Col>
                    )
                })}     
            </Row>
       
            <Row className="g-4 px-md-5 ">
                {currentCards.map((objects) => {
                    return (
                        <Col md={6} className='' key={objects.id}>
                            {objects.item}
                        </Col>
                    )
                })} 
            </Row>

            <Row className='px-md-5 justify-content-between align-items-center pt-3'>
                <Col md={3} xs={6} className=''>
                    <div className="d-flex h-100 align-items-center gap-2 numbers">
                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNum = index + 1;
                            return (
                                <button 
                                    key={pageNum}
                                    className={`page-btn ${currentPage === pageNum ? "active" : ""}`}
                                    onClick={() => setCurrentPage(pageNum)}
                                >
                                    {pageNum}
                                </button>
                            );
                        })}
                    </div>
                </Col>

                <Col md={3} xs={6} className='text-end'>
                    <ButtonComp buttonClass="butBrownClass card-button" buttonText="Next" 
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}/>
                </Col>

            </Row>
        </Container>
    </>
  )
}

export default Pagination1