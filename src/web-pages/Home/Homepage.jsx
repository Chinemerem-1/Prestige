import ChooseUs from "../../Components/ChooseUs";
import Footer from "../../Components/Footer";
import NavHeader from "../../Components/navHeader";
import Herobox from "./Herobox";
import Homesection1 from "./Homesection1";
import Homesection2 from "./Homesection2";
import Homesection4 from "./Homesection4";
import Homesection6 from "./Homesection6";
import Homesection7 from "./Homesection7";
import Homesection8 from "./Homesection8";
import Homesection9 from "./Homesection9";
import WorkingProcess from "../../Components/WorkingProcess";


function Homepage() {
    return (
        <>
            <NavHeader/>
            <Herobox/>
            <Homesection1/>
            <Homesection2/>
            <ChooseUs/>
            <Homesection4/>
            <WorkingProcess/>
            <Homesection6/>
            <Homesection7/>
            <section id="faq">
                <Homesection8/>
            </section>
            <Homesection9/> 
            <Footer/>
        </>
    )
}

export default Homepage;