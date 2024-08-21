import { Box, Grid, Typography } from "@mui/material";
import {Call, Email, Facebook, Instagram, LinkedIn, Twitter} from '@mui/icons-material'
import React from "react";
function Uppernav(){
    return(
     <div>
        <Grid sx={{width:"100%", height:"3vh", bgcolor:"#212934",  justifyContent: "center", alignItems: "center", display: {xxl:"flex", xl:"flex", lg: "flex", md:"none", sm:"none", xs: "none", xxs:"none"}}}>
            <Box sx={{ width: "100%",height:"100%",display:"flex", justifyContent: "space-around", alignItems: "center"}}>
            <Box sx={{height:"100%",display:"flex", justifyContent: "center", alignItems: "center"}}>
               <Typography sx={{fontSize:"13px", color:"white"}}><Email fontSize="16px"/> info@company.com</Typography>&nbsp;&nbsp;
               <Typography sx={{fontSize:"13px", color:"white"}}><Call fontSize="16px"/>  010-020-0340</Typography>
            </Box>
            <Box sx={{height:"100%",display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Facebook style={{ fontSize: '15px' , color: "white" }}/>&nbsp;&nbsp;
                <Instagram style={{ fontSize: '15px', color: "white" }}/>&nbsp;&nbsp;
                <Twitter style={{ fontSize: '15px', color: "white" }}/>&nbsp;&nbsp;
                <LinkedIn style={{ fontSize: '15px', color: "white" }}/>&nbsp;&nbsp;
            </Box>
        </Box>
        </Grid>
     </div>
        
    )
}
export default Uppernav