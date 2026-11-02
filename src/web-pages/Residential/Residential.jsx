import Benefits from "../../Components/Benefits"
import Detailssection from "../../Components/Detailssection"
import FAQComponent from "../../Components/FAQComponent"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import resiImag from "../../assets/hero pics-residential.svg"
import respic1 from "../../assets/section1 first.png"
import slide1 from "../../assets/componentOneSlide1.png"
import slide2 from "../../assets/componentOneSlide2.png"
import slide3 from "../../assets/componentOneSlide3.png"
import faqimg from "../../assets/residential-accordion-img.svg"

const Residential = () => {

  const accordionStyle = {
            fontSize: 24,
            fontWeight: 500,
            color: "white"
        }
  
  return (
    <div>
        <NavHeader/>
        <Herosection
          img={resiImag}
          headerText="Residential Services"
        />
        <Detailssection
          imgL1={respic1}
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          compHeader="RESIDENTIAL CLEANING"
          paragraphOne="Your home is your sanctuary  and we’re here to help keep it that way. Our Residential Cleaning Service is designed to give you peace of mind, a healthier environment, and more time to enjoy the things you love."
          paragraphTwo="Whether you need a one-time deep clean or regular upkeep, our trained professionals will clean every corner with care and attention to detail. We use safe, eco-friendly products and modern tools to ensure your space is sparkling, fresh, and truly clean."
          classCheck1="icon1 flex-shrink-0"
          listText1="Kitchen and bathroom sanitation"
          classCheck2="icon2 flex-shrink-0"
          listText2="Dusting and surface wiping"
          classCheck3="icon3 flex-shrink-0"
          listText3="Floor vacuuming and mopping"
          classCheck4="icon4 flex-shrink-0"
          listText4="Trash removal"
          buttonText="Book Now"
        />
        <Benefits
          bencontHolder="px-md-5 py-5 mb-md-5 res-bg-holder"
          headText="WHAT TO EXPECT"
          headLabelText="When You Choose Residential cleaning"
          label1="Professional Expertise"
          label2="Customer Satisfaction"
          label3="Nation Coverage"
          label4="Flexible Transparency Pricing"
          barVariant="purple-bar"
        />
        <FAQComponent
          faqHolder="ps-md-5 pe-md-0 py-5 mb-5 bg-faq"
          faqimg={faqimg}
          faqstyle={{backgroundColor: "#FFFFFF"}}
          accordionStyle={accordionStyle}
        />
        <Footer/>
    </div>
  )
}

export default Residential