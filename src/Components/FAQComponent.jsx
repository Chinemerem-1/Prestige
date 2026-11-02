import { Container, Row, Col } from "react-bootstrap"
import Images from "../Components/Images"
import imgC from "../assets/stars.png"
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const FAQComponent = ({faqHolder,faqstyle, faqimg,accordionStyle, idName}) => {

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
    <Container fluid className={faqHolder} id={idName}>
        
        <Row className="g-0 ps-md-5 justify-content-between">
            <Col md={6} className="faqcomp-holder d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-2 mb-4">
                    <Images src={imgC}/>
                    <p className="mb-0" style={accordionStyle}>FREQUENTLY ASKED QUESTIONS</p>
                </div>

                {faqArray.map((items) => {
                    const isOpen = openID === items.id;
                    return (
                        <div className="faq-card py-3 px-4 rounded-4" style={faqstyle} key={items.id}>

                            <button className="faqcomp-header d-flex align-items-center gap-3 w-100 bg-transparent border-0 p-0 text-start" onClick={() => toggleItem(items.id)}>
                                <span className="faqcomp-icon " style={{color: "#3A65F2"}}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
                                <span className="faqcomp-question">{items.question}</span>
                            </button>
                            
                            {isOpen && (
                                <div className="faqcomp-body ps-4 mt-2 text-muted">
                                    <p className="mb-0">{items.answer}</p>
                                </div>
                            )}
                        </div>
                    )
                })}
            </Col>

           <Col md={6} className="faq-Img-holder overflow-hidden">
                <Images src={faqimg} className="d-block ms-auto faq-Img"/>
            </Col>
        </Row>
    </Container>
  )
}
export default FAQComponent