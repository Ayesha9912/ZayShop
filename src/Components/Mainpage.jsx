import React from "react";
import Uppernav from "./Uppernav";
import Navbar from "./Navbar";
import BannerSlider from "./BannerSlider";
import Homeproducts from "./Homeproducts";
import Homefeature from "./Homefeature";
import Footer from "./Footer";

function Mainpage(){
    return(
        <div>
            <Uppernav/>
            <Navbar/>
            <BannerSlider/>
            <Homeproducts/>
            <Homefeature/>
            <Footer/>
        </div>
    )
}
export default Mainpage;

