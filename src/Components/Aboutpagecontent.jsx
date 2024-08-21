import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import about1 from "../Images/Zay Shop eCommerce HTML CSS Template/about-hero.svg"

export default function Aboutpagecontent(){
    return(
        <div>
            <Grid container spacing={0} sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor:"#59AB6E", padding: "30px", overflow: "hidden"}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={4} sx={{ display: "flex", flexDirection: "column", height: "100%", padding: "3" }}>
                    <Typography sx={{ fontSize: "30px", fontWeight: "600", color: "white" }}>About Us</Typography>
                    <Typography sx={{ fontSize: "22px", fontWeight: "normal", color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
                    <img
                        src={about1}
                        class="img-fluid"
                        alt=""/>
                </Grid>
            </Grid>

        </div>
    )
}
