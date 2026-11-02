import Footer from "../../Components/Footer"
import NavHeader from "../../Components/navHeader"
import Pagination2 from "../../Components/Pagination2"
import BlogHero from "./BlogHero"

const Blogpage = () => {
  return (
    <div>
        <NavHeader/>
        <BlogHero/>
        <Pagination2/>
        <Footer/>
    </div>
  )
}

export default Blogpage