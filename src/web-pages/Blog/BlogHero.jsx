import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"
import { useState } from "react"
import blogImag from "../../assets/hero-pics-blog.svg"
import blogImag2 from "../../assets/hero-pics-blog2.svg"
import blogImag3 from "../../assets/hero-pics-blog3.svg"
import BlogHeroCard from "../../Components/BlogHeroCard"

const BlogHero = () => {

  const slides = [
    {
      id: 1,
      card: <BlogHeroCard
        DateB="June 15, 2025"
        Type="Feature, Health"
        CommentB="4 Comments"

        Title="Where Health Meets Knowledge"
        Paragraph="Discover expert tips, trusted advice, and inspiring stories to help you live a healthier, happier life. From nutrition and fitness to mental health and medical updates"
      />,
      image: blogImag
    },

    {
      id: 2,
      card: <BlogHeroCard
        DateB="June 15, 2025"
        Type="Feature, Technology"
        CommentB="4 Comments"

        Title="Where Technology Meets Knowledge"
        Paragraph="Discover expert tips, trusted advice, and inspiring stories to help you live a healthier, happier life. From nutrition and fitness to mental health and medical updates"
      />,
      image: blogImag2
    },

    {
      id: 3,
      card: <BlogHeroCard
        DateB="June 15, 2025"
        Type="Feature, Sport"
        CommentB="4 Comments"

        Title="Where Sport Meets Knowledge"
        Paragraph="Discover expert tips, trusted advice, and inspiring stories to help you live a healthier, happier life. From nutrition and fitness to mental health and medical updates"
      />,
      image: blogImag3
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleHeroClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (

    <div className="blog-hero-container" onClick={handleHeroClick}>
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
          key={slide.id}
          className={`blog-hero-section ${isActive ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          >
            <Container fluid className="px-md-5 ">
             <Row>
                  <Col md={7}  className="px-md-5 card-Col">
                    <div>
                      {slide.card}
                    </div>
                  </Col>
                </Row>
            </Container>
          </div>
        )
      })}

    </div>
  )
}

export default BlogHero