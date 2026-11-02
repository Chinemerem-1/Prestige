import Detailssection from "../../Components/Detailssection"
import Footer from "../../Components/Footer"
import Herosection from "../../Components/Herosection"
import NavHeader from "../../Components/navHeader"
import MatiImag from "../../assets/hero pics-material.svg"
import matpic1 from "../../assets/section1 first.png"
import slide1 from "../../assets/material-comp-slide1.png"
import slide2 from "../../assets/material-comp-slide2.png"
import slide3 from "../../assets/material-comp-slide3.png"
import ProductGrid from "../../Components/ProductGrid"
import Benefits from "../../Components/Benefits"

const Material = () => {
  return (
    <div>
        <NavHeader/>
        <Herosection 
          img={MatiImag}
          headerText="Material Supply Services"
        />
        <ProductGrid/>
        <Detailssection
          imgL1={matpic1}
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          compHeader="CLEANING PRODUCT"
          paragraphOne="At Prestige hygiene, we don’t just provide top-tier cleaning services — we also offer high-quality cleaning materials for purchase. Whether you're looking to maintain your home between visits or stock your office with trusted products, we’ve got you covered."
          paragraphTwo="The consumables we supply include and not limited to; Toilet roils, hand wash, hand cream, disinfectant, industrial speed machine, dust pan, long brooms and handheld pickers..etc"
          classCheck1="icon1 flex-shrink-0"
          listText1="Trusted by Professionals"
          classCheck2="icon2 flex-shrink-0"
          listText2="Eco-Friendly disinfectant"
          classCheck3="icon2 flex-shrink-0"
          listText3="Affordable Prices"
          classCheck4="icon4 flex-shrink-0"
          listText4="Local Delivery"
          buttonText="Book Now"
        />
        <Benefits
          bencontHolder="px-md-5 py-5 text-white mat-bg-holder"
          headText="WHAT TO EXPECT"
          headLabelText="When You Choose Our Cleaning Product"
          label1="Professional Expertise"
          label2="Customer Satisfaction"
          label3="Nation Coverage"
          label4="Flexible Transparency Pricing"
          barVariant="blue-bar"
        />
        <Footer/>
    </div>
  )
}

export default Material