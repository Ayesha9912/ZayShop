import React from 'react';
import {Grid, Typography} from "@mui/material";
import Slider from "react-slick";
import logo1 from '../Images/Zay Shop eCommerce HTML CSS Template/brand_01.png'
import logo2 from '../Images/Zay Shop eCommerce HTML CSS Template/brand_02.png'
import logo3 from '../Images/Zay Shop eCommerce HTML CSS Template/brand_03.png'
import logo4 from '../Images/Zay Shop eCommerce HTML CSS Template/brand_04.png'


export default function Aboutlogo(){

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return (
        <div>


            <Grid sx={{ minHeight: "50vh", backgroundColor: "#E9EEF5", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "50px" }}>
                <Typography sx={{ fontSize: "40px", textAlign: "center", marginTop: "30px", fontWeight: "100" }}>Our Brands</Typography>
                <Typography sx={{ fontSize: "20px", textAlign: "center" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Typography>
                <Typography sx={{ fontSize: "20px", textAlign: "center" }}>mollit anim id est laborum.</Typography>
                <Grid sx={{ width: { xs: '100%', md: '80%', lg: '50%' } }}>
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo1} class="gg-fluid" alt="" style={{width:"100%"}}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo2} class="img-fluid" alt="" style={{width:"100%"}}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo3} class="img-fluid" alt="" style={{width:"100%"}}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo4} class="img-fluid" alt=""style={{width:"100%"}} />
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo1} class="img-fluid" alt=""style={{width:"100%"}} />
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo2} class="img-fluid" alt=""style={{width:"100%"}}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo3} class="img-fluid" alt=""style={{width:"100%"}}/>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "70px"}}>
                                <img src={logo4} class="img-fluid" alt="" style={{width:"100%"}}/>
                            </div>
                        </Slider>
                    </div>
                </Grid>
            </Grid>






        </div>
    )
}
