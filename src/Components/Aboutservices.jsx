import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import { Card, CardGroup } from 'react-bootstrap';
import { ArrowBack, FireTruck, PauseCircleTwoTone, VerifiedUser } from '@mui/icons-material';

export default function Aboutservices() {
    return (
        <div>
            <Grid sx={{ minHeight: "50vh", backgroundColor: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom: "50px" }}>
                <Typography sx={{ fontSize: "40px", textAlign: "center", marginTop: "30px", fontWeight: "100" }}>Our Services</Typography>
                <Typography sx={{ fontSize: "20px", textAlign: "center" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Typography>
                <Typography sx={{ fontSize: "20px", textAlign: "center" }}>mollit anim id est laborum.</Typography>
                <Grid sx={{ width: { xs: '100%', md: '100%', lg: '80%' }, paddingLeft: "20px" }}>
                <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center" , marginTop: "50px", padding: "20px" }}>
                    <Grid item xs={12} md={5} lg={2} sx={{ display:"flex",flexDirection: "column", justifyContent: "space-around", alignItems: "center" , boxShadow: "0px 0px 8px 0px #F2F2F2", backgroundColor: "white", padding: "60px", marginTop: "20px"}}>
                     <FireTruck sx={{color: "#59AB6E", fontSize: "100px", borderRadius: "10px"}}/>
                     <Typography>Daily Services</Typography>   
                    </Grid>

                    <Grid item xs={12} md={5} lg={2} sx={{ display:"flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" , boxShadow: "0px 0px 8px 0px #F2F2F2", backgroundColor: "white", padding: "60px", marginTop: "20px"}}>
                     <PauseCircleTwoTone sx={{color: "#59AB6E", fontSize: "100px",borderRadius: "10px"}}/>
                     <Typography>Daily Services</Typography>   
                    </Grid>

                    <Grid item xs={12} md={5} lg={2} sx={{ display:"flex" ,flexDirection: "column", justifyContent: "space-around", alignItems: "center" , boxShadow: "0px 0px 8px 0px  #F2F2F2", backgroundColor: "white", padding: "60px", marginTop: "20px"}}>
                     <VerifiedUser sx={{color: "#59AB6E", fontSize: "100px",borderRadius: "10px"}}/>
                     <Typography>Daily Services</Typography>   
                    </Grid>

                    <Grid item xs={12} md={5} lg={2} sx={{ display:"flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" , boxShadow: "0px 0px 8px 0px #F2F2F2", backgroundColor: "white", padding: "60px", marginTop: "20px"}}>
                     <ArrowBack sx={{color: "#59AB6E", fontSize: "100px", borderRadius: "10px"}}/>
                     <Typography>Daily Services</Typography>   
                    </Grid>
                    



                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
