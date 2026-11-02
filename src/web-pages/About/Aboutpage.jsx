import ChooseUs from "../../Components/ChooseUs";
import Footer from "../../Components/Footer";
import Herosection from "../../Components/Herosection";
import NavHeader from "../../Components/navHeader";
import heroImg from "../../assets/hero pics-about.svg"
import Homesection5 from "../Home/Homesection5";
import Aboutsection1 from "./Aboutsection1";
import Aboutsection2 from "./Aboutsection2";
import Aboutsection4 from "./Aboutsection4";
import Aboutsection6 from "./Aboutsection6";

function Aboutpage() {
    return (
        <>
        <NavHeader/>
        <Herosection img={heroImg} headerText="About Us"/>
        <Aboutsection1/>
        <Aboutsection2/>
        <ChooseUs/>
        <Aboutsection4/>
        <Homesection5/>
        <Aboutsection6/>
        <Footer/>
        </>
    )
}

export default Aboutpage;