import ChooseUs from "../../Components/ChooseUs";
import Footer from "../../Components/Footer";
import NavHeader from "../../Components/navHeader";
import Herobox from "./Herobox";
import Homesection1 from "./Homesection1";
import Homesection2 from "./Homesection2";
import Homesection4 from "./Homesection4";
import Homesection5 from "./Homesection5";
import Homesection6 from "./Homesection6";
import Homesection7 from "./Homesection7";
import Homesection8 from "./Homesection8";
import Homesection9 from "./Homesection9";


function Homepage() {
    return (
        <>
            <NavHeader/>
            <Herobox/>
            <Homesection1/>
            <Homesection2/>
            <ChooseUs/>
            <Homesection4/>
            <Homesection5/>
            <Homesection6/>
            <Homesection7/>
            <Homesection8/>
            <Homesection9/> 
            <Footer/>
        </>
    )
}

export default Homepage;