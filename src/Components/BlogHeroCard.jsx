import { FaCircle } from "react-icons/fa";
const BlogHeroCard = ({DateB, Type, CommentB, Title, Paragraph}) => {

    const cardText = {
        fontWeight: 500,
        fontSize: "14px"
    }

    const cardHead = {
        fontWeight: 600,
        fontSize: "40px"
    }

    const cardParagraph = {
        fontWeight: 400,
        fontSize: "14px"
    }
  return (
    <div>
        <div className="hero-card px-3 py-5">
            <div className="d-flex align-items-center gap-md-2 gap-1 pb-1">
                <p className="mb-0" style={cardText}>{DateB}</p>
                <FaCircle size={5}/>
                <p className="mb-0" style={cardText}>{Type}</p>
                <FaCircle size={5}/>
                <p className="mb-0" style={cardText}>{CommentB}</p>
            </div>

            <div className="underline mb-3" style={{ width: '65px', height: '3px', backgroundColor: '#b25032' }}></div>

            <h3 className="py-4 " style={cardHead}>{Title}</h3>

            <p className="mb-0" style={cardParagraph}>{Paragraph}</p>
            </div>
               
    </div>
  )
}

export default BlogHeroCard