import Detailssection from "../../Components/Detailssection"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import postImag from "../../assets/hero pics-post.svg"
import postpic1 from "../../assets/post-comp-main.svg"
import slide1 from "../../assets/post-comp-slide1.png"
import slide2 from "../../assets/post-comp-slide2.png"
import slide3 from "../../assets/post-comp-slide3.png"
import FAQComponent from "../../Components/FAQComponent"
import faqimg from "../../assets/post-accordion-img.svg"
import Homesection5 from "../Home/Homesection5"

const Postconstruction = () => {

  const accordionStyle = {
      fontSize: 24,
      fontWeight: 500,
      color: "white"
  }

  return (
    <div>
        <NavHeader/>
        <Herosection
          img={postImag}
          headerText="Post Construction Services"
        />
        <Detailssection
          imgL1={postpic1}
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          compHeader="POST CONSTRUCTION CLEANING"
          paragraphOne="Our Post-Construction Cleaning Service is designed to take care of the cleanup so you can enjoy the results without the hassle."
          paragraphTwo="We specialize in thorough, detail-oriented cleaning that removes fine dust from every surface, polishes fixtures, and makes your space move-in ready. Whether it's a home remodel, new office buildout, or commercial construction project, our trained team ensures every inch shines."
          classCheck1="icon1 flex-shrink-0"
          listText1="Deep cleaning of kitchens, bathrooms, and surfaces"
          classCheck2="icon2 flex-shrink-0"
          listText2="Detailed cleaning of walls, baseboards, windows, and vents"
          classCheck3="icon3 flex-shrink-0"
          listText3="Polishing of floors, glass, and fixtures"
          classCheck4="icon4 flex-shrink-0"
          listText4="Safe disposal of leftover materials and packaging"
          buttonText="Book Now"
        />
        <Homesection5/>
        <FAQComponent
          faqHolder="ps-md-5 pe-md-0 pt-5 pb-4 mb-5 bg-post-faq"
          faqimg={faqimg}
          faqstyle={{backgroundColor: "#FFFFFF", boxShadow: "0px 10px 40px 0px #0000000D"}}
          accordionStyle={accordionStyle}
        />
        <Footer/>
    </div>
  )
}

export default Postconstruction