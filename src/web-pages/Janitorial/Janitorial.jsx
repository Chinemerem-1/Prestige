import Detailssection from "../../Components/Detailssection"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import janiImag from "../../assets/hero pics-janitorial.svg"
import janpic1 from "../../assets/section1 first.png"
import slide1 from "../../assets/componentOneSlide1.png"
import slide2 from "../../assets/componentOneSlide2.png"
import slide3 from "../../assets/componentOneSlide3.png"
import Benefits from "../../Components/Benefits"
import FAQComponent from "../../Components/FAQComponent"
import faqimg from "../../assets/janitorial-accordion-img.svg"

const Janitorial = () => {

  const accordionStyle = {
        fontSize: 24,
        fontWeight: 500,
        // color: "white"
    }

  return (
    <div>
        <NavHeader/>
        <Herosection
          img={janiImag}
          headerText="Janitorial Services"
        />
        <Detailssection
          imgL1={janpic1}
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          compHeader="JANITORIAL CLEANING"
          paragraphOne=" At Prestige hygiene, we provide routine cleaning solutions tailored to your business needs — whether it’s a small office, large facility, school, or commercial space. Keep your workplace spotless and professional with our dependable janitorial services."
          paragraphTwo="Our janitorial team is trained, vetted, and equipped with eco-friendly cleaning supplies to ensure a clean, healthy environment every day. Services can be scheduled daily, weekly, or monthly, and include:"
          classCheck1="icon1 flex-shrink-0"
          listText1="Trash removal and recycling"
          classCheck2="icon2 flex-shrink-0"
          listText2="Restroom cleaning and sanitization"
          classCheck3="icon3 flex-shrink-0"
          listText3="Floor vacuuming and mopping"
          classCheck4="icon4 flex-shrink-0"
          listText4="Breakroom and kitchen cleaning"
          buttonText="Book Now"
        />
        <Benefits
          bencontHolder="px-md-5 py-5 text-white jan-bg-holder"
          headText="WHAT TO EXPECT"
          headLabelText="When You Choose Our Janitorial cleaning"
          label1="Professional Expertise"
          label2="Customer Satisfaction"
          label3="Nation Coverage"
          label4="Flexible Transparency Pricing"
          barVariant="green-bar"
        />
        <FAQComponent
          faqHolder="ps-md-5 pe-md-0 pt-5 pb-4 mb-5 bg-jan-faq"
          faqimg={faqimg}
          faqstyle={{backgroundColor: "#FFFFFF", boxShadow: "0px 10px 40px 0px #0000000D"}}
          accordionStyle={accordionStyle}
        />
        <Footer/>
    </div>
  )
}

export default Janitorial