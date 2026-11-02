import Detailssection from "../../Components/Detailssection"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import fumiImag from "../../assets/hero pics-fumigation.svg"
import fumpic1 from "../../assets/section1 first.png"
import slide1 from "../../assets/fumig-comp-slide.png"
import slide2 from "../../assets/componentOneSlide2.png"
import slide3 from "../../assets/componentOneSlide3.png"
import Benefits from "../../Components/Benefits"
import FAQComponent from "../../Components/FAQComponent"
import faqimg from "../../assets/fumigation-accordion-img.svg"

const Fumigationpage = () => {

const accordionStyle = {
      fontSize: 24,
      fontWeight: 500,
      color: "white"
  }

  return (
    <div>
        <NavHeader/>
        <Herosection
          img={fumiImag}
          headerText="Fumigation Services"
        />
        <Detailssection
            imgL1={fumpic1}
            slide1={slide1}
            slide2={slide2}
            slide3={slide3}
            compHeader="PEST CONTROL CLEANING"
            paragraphOne="Unwanted pests can disrupt the comfort and hygiene of your home or business. At Prestige hygiene, we offer safe, effective, and environmentally-friendly pest control solutions as part of our comprehensive cleaning services."
            paragraphTwo="Our trained professionals use targeted treatments to eliminate common pests like ants, cockroaches, rodents, bed bugs, and more—while ensuring your space remains clean, safe, and livable. Whether it’s a one-time treatment or part of a routine maintenance plan, we tailor our pest control services to your needs."
            classCheck1="icon1 flex-shrink-0"
            listText1="Safe for children and pets"
            classCheck2="icon2 flex-shrink-0"
            listText2="Fast, discreet, and effective"
            classCheck3="icon3 flex-shrink-0"
            listText3="Preventive and reactive treatments"
            classCheck4="icon4fum flex-shrink-0"
            buttonText="Book Now"
        />
        <Benefits
          bencontHolder="px-md-5 py-5 fum-bg-holder"
          headText="WHAT TO EXPECT"
          headLabelText="When You Choose Pest Control Cleaning"
          label1="Professional Expertise"
          label2="Customer Satisfaction"
          label3="Nation Coverage"
          label4="Flexible Transparency Pricing"
          barVariant="yellow-bar"
        />
        <FAQComponent
          faqHolder="ps-md-5 pe-md-0 pt-5 pb-4 mb-5 bg-fum-faq"
          faqimg={faqimg}
          faqstyle={{backgroundColor: "#FFFFFF", boxShadow: "0px 10px 40px 0px #0000000D"}}
          accordionStyle={accordionStyle}
        />
        <Footer/>
    </div>
  )
}

export default Fumigationpage