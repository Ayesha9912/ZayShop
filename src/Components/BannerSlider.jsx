import React from "react";
import { Carousel } from 'react-bootstrap';
import { Box, Grid, Typography } from "@mui/material";
import image1 from "../Images/Zay Shop eCommerce HTML CSS Template/banner_img_01.jpg"
import image2 from "../Images/Zay Shop eCommerce HTML CSS Template/banner_img_02.jpg"
import image3 from "../Images/Zay Shop eCommerce HTML CSS Template/banner_img_03.jpg"
function BannerSlider(){
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <Box sx={{ backgroundColor: "#EFEFEF", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", minHeight:"75vh"}}>
                        <Grid container spacing={2} sx={{ width: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={6} sx={{ display: "flex", flexDirection: "column", height: "100%", padding: "3"}}>
                                <Typography sx={{fontSize: "40px", fontWeight: "300" , color: "#59AB6E"}}><span style={{fontWeight:"600"}}>Zay</span> eCommerce</Typography>
                                <Typography sx={{fontSize: "35px", fontWeight: "normal"}}>Tiny and Perfect eCommerce Template</Typography>
                                <Typography sx={{fontSize: "18px", fontWeight: "normal"}}>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={6}>
                                <img
                                    src={image1}
                                    class="img-fluid rounded-top"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box sx={{ backgroundColor: "#EFEFEF", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",minHeight:"75vh"}}>
                        <Grid container spacing={2} sx={{ width: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={5} sx={{ display: "flex", flexDirection: "column",height: "100%" , padding: "3" }}>
                                <Typography sx={{fontSize: "40px", fontWeight: "300" , color: "#59AB6E"}}><span style={{fontWeight:"600"}}>Zay</span> eCommerce</Typography>
                                <Typography sx={{fontSize: "35px", fontWeight: "normal"}}>Tiny and Perfect eCommerce Template</Typography>
                                <Typography sx={{fontSize: "18px", fontWeight: "normal"}}>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
                                <img
                                    src={image2}
                                    class="img-fluid rounded-top"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box sx={{ backgroundColor: "#EFEFEF", width: "100%", display: "flex", justifyContent: "center", alignItems: "center",minHeight:"75vh"}}>
                        <Grid container spacing={2} sx={{ width: "75%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={5} sx={{ display: "flex", flexDirection: "column", height: "100%" , padding: "3"}}>
                                <Typography sx={{fontSize: "40px", fontWeight: "300" , color: "#59AB6E"}}><span style={{fontWeight:"600"}}>Zay</span> eCommerce</Typography>
                                <Typography sx={{fontSize: "35px", fontWeight: "normal"}}>Tiny and Perfect eCommerce Template</Typography>
                                <Typography sx={{fontSize: "18px", fontWeight: "normal"}}>You are permitted to use this Zay CSS template for your commercial websites. You are not permitted to re-distribute the template ZIP file in any kind of template collection websites.</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={5}>
                                <img
                                    src={image3}
                                    class="img-fluid rounded-top"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default BannerSlider;