import Benefits from "../../Components/Benefits"
import Detailssection from "../../Components/Detailssection"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import industImag from "../../assets/hero pics-industrial.svg"
import indpic1 from "../../assets/ind-comp-main.svg"
import slide1 from "../../assets/post-comp-slide1.png"
import slide2 from "../../assets/post-comp-slide2.png"
import slide3 from "../../assets/post-comp-slide3.png"
import FAQComponent from "../../Components/FAQComponent"
import faqimg from "../../assets/industrial-accordion-img.svg"

const Industrial = () => {

  const accordionStyle = {
      fontSize: 24,
      fontWeight: 500,
      color: "white"
  }

  return (
    <div>
        <NavHeader/>
        <Herosection
          img={industImag}
          headerText="Industrial Services"
        />
        <Detailssection
          imgL1={indpic1}
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          compHeader="INDUSTRIAL CLEANING"
          paragraphOne="Enjoy a clean and comfortable home without the stress. Our domestic cleaning service is designed to keep your living space spotless, fresh, and inviting. "
          paragraphTwo="Whether you need a one-time deep clean or regular weekly maintenance, we tailor our service to suit your schedule and lifestyle"
          classCheck1="icon1 flex-shrink-0"
          listText1="Dusting all surfaces and furniture"
          classCheck2="icon2 flex-shrink-0"
          listText2="Vacuuming and mopping floors"
          classCheck3="icon3 flex-shrink-0"
          listText3="Kitchen cleaning (countertops, sinks, appliances)"
          classCheck4="icon4 flex-shrink-0"
          listText4="Trash removal and general tidying"
          buttonText="Book Now"
        />
        <Benefits
          bencontHolder="px-md-5 py-5 ind-bg-holder"
          headText="WHAT TO EXPECT"
          headLabelText="When You Choose Industrial Cleaning"
          label1="Professional Expertise"
          label2="Customer Satisfaction"
          label3="Nation Coverage"
          label4="Flexible Transparency Pricing"
          barVariant="red-bar"
        />
        <FAQComponent
          faqHolder="ps-md-5 pe-md-0 pt-5 pb-4 mb-5 bg-ind-faq"
          faqimg={faqimg}
          faqstyle={{backgroundColor: "#FFFFFF", boxShadow: "0px 10px 40px 0px #0000000D"}}
          accordionStyle={accordionStyle}
        />
        <Footer/>
    </div>
  )
}

export default Industrial