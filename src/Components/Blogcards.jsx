import Images from "../Components/Images"
import { IoMdPerson } from "react-icons/io";
import { MdComment } from "react-icons/md";

const Blogcard = ({date, month, author, commentCount, blogimg, title, description, linkText}) => {
  return (
    <>
        <div className="blog-wrapper flex-shrink-0">
                <Images src={blogimg} className="img-fluid w-100 blog-image"/>
            <div className="image-overlay"></div>
            <div className="blog-number text-white ps-3 pt-1 pb-2 pe-3 text-center z-3">
                <span className="d-block date-num lh-1">{date}</span>
                <span className="d-block date-month">{month}</span>
            </div>
        </div>
        <div className="pt-5 pb-3 px-5">
            <div className="d-flex blog-meta align-items-center justify-content-between">
                <div className="d-flex gap-2  align-items-center">
                    <IoMdPerson style={{color: "#3A65F2", fontSize:"23px"}}/>
                    <span style={{fontWeight: "400", fontSize: "14px"}}>By {author}</span>
                </div>
                <span>|</span>
                <div className="d-flex gap-2 align-items-center">
                    <MdComment style={{color: "#3A65F2", fontSize:"23px"}}/>
                    <span style={{fontWeight: "400", fontSize: "14px"}}>Comment {commentCount}</span>
                </div>
            </div>

            <h2 className="mt-4" style={{fontWeight: "600", fontSize: "20px"}}>{title}</h2>

            <p className="text-start" style={{fontWeight: "400", fontSize: "16px"}}>{description}</p>

            <a href="/Blog" className="text-decoration-none text-dark fw-bold read-more-link">{linkText}</a>
        </div>
        
    </>
  )
}

export default Blogcard