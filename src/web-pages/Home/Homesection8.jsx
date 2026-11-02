import { Container, Row, Col } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import Images from "../../Components/Images"
import imgC from "../../assets/stars.png"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import ButtonComp from "../../Components/ButtonComp"

const Homesection8 = () => {
     const accordionStyle = {
            fontSize: 24,
            fontWeight: 500
        }

        const faqArray = [
            {
                id:1,
                question: 'What types of cleaning services do you offer?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:2,
                question: 'Do I need to provide any cleaning supplies or equipment?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:3,
                question: 'Are your cleaners trained and background-checked?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:4,
                question: 'How long does a typical cleaning take?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

            {
                id:5,
                question: 'Do I need to be home during the cleaning?',
                answer: 'We provide residential, commercial, deep cleaning, move-in/move-out, and customized cleaning packages to suit your needs.'
            },

        ]

        const [openID, setOpenID] = useState(1);

        const toggleItem =(id) => {
            setOpenID(openID === id ? null : id);
        };

  return (
    <Container fluid className="px-md-5 py-5" id="home-faq">
        
        <Row className="g-0 px-md-5 justify-content-between">
            <Col md={7} className="faq-holder d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2 mb-4">
                    <Images src={imgC}/>
                    <p className="mb-0" style={accordionStyle}>FREQUENTLY ASKED QUESTIONS</p>
                </div>

                {faqArray.map((items) => {
                    const isOpen = openID === items.id;
                    return (
                        <div className="faq-card py-3 px-4 rounded-4" style={{backgroundColor: "rgba(217, 217, 217, 0.3)"}} key={items.id}>

                            <button className="faq-header d-flex align-items-center gap-3 w-100 bg-transparent border-0 p-0 text-start" onClick={() => toggleItem(items.id)}>
                                <span className="faq-icon " style={{color: "#3A65F2"}}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                                <span className="faq-question">{items.question}</span>
                            </button>
                            
                            {isOpen && (
                                <div className="faq-body ps-4 mt-2 text-muted">
                                    <p className="mb-0">{items.answer}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </Col>

            <Col md={5} className="mt-md-0 mt-5">
                <div className="large-card d-block ms-md-auto">
                    
                    <h2 className="text-white mb-4" style={{fontSize: "60px", fontWeight: "700"}}>How Can We Help You!</h2>

                    <p className="text-white mb-4" style={{fontSize: "18px", fontWeight: "400"}}>We understand the importance approaching each work integrally and believe in the power of simple and easy communication.</p>

                    <ButtonComp address="/Login" buttonClass="butBrownClass" buttonText="Contact Us"/>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default Homesection8