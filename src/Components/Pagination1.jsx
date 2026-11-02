import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

const Pagination1 = () => {
  return (
    <>
        <Container fluid>
            <Row>
                <Col md={4}>
                    <Row className="wrapper g-0">
                        <Col md={6} className="position-relative">
                            <Images src={sectionImg} className="img1 object-fit-cover"/>
                            <span className="label-badge-1">Before</span>
                        </Col>

                        <Col md={6} className="position-relative">
                            <Images 
                                src={rightView === 'before' ? sectionImg : sectionImg2}
                                className="img1 object-fit-cover transition-fade d-block ms-md-auto"/>

                            <span className="label-badge-2">
                                {rightView === 'before' ? 'Before' : 'After'}
                            </span>
                        </Col>
                    </Row>

                    <div className="comparison-button">
                        <button className={`arrow-button ${rightView === 'before' ? 'active-tab' : ''}`} onClick={showBeforeView} aria-label="Show before image" type="button">
                            <BiSolidLeftArrow className="arrow arrow-left"/>
                        </button>

                        <button className={`arrow-button ${rightView === 'after' ? 'active-tab' : ''}`} onClick={showAfterView} aria-label="Show after image" type="button"> 
                            <BiSolidRightArrow className="arrow arrow-right"/>
                        </button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Pagination1