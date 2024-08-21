import React from 'react';
import { Box, Grid, Typography, Button, Input } from "@mui/material";
import { Card, CardGroup, Form } from 'react-bootstrap';
import { CallEnd, Email, Facebook, LocationCity } from '@mui/icons-material';

export default function Footer() {
    return (
        <div>
            <Grid sx={{ minHeight: "50vh", backgroundColor: "#212934", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
                <Grid sx={{ width: { xs: '100%', md: '100%', lg: '80%' } }}>
                    <CardGroup>
                        <Card style={{ padding: "10px", border: "none", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#212934" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <Typography sx={{ color: "#59AB6E", fontSize: "30px", fontWeight: "500" }}>Zay Shop</Typography>
                                <Box sx={{ width: "100%", height: "1px", backgroundColor: "grey" }}></Box>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "400", marginTop: "20px" }}> <LocationCity /> 123 Consectetur at ligula 10660</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "400", marginTop: "10px"}}><CallEnd /> 010-020-0340</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "400",marginTop: "10px" }}> <Email /> info@company.com</Typography>
                            </Box>
                        </Card>
                        <Card style={{ padding: "10px", border: "none", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#212934" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <Typography sx={{ color: "grey", fontSize: "30px", fontWeight: "500" }}>Product Shop</Typography>
                                <Box sx={{ width: "100%", height: "1px", backgroundColor: "grey" }}></Box>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px", marginTop: "20px" }}>Home</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>About</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Phone gytey</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Phonefnn</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Phone sjhd</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Men shoes</Typography>
                            </Box>
                        </Card>
                        <Card style={{ padding: "10px", border: "none", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#212934" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                <Typography sx={{ color: "grey", fontSize: "30px", fontWeight: "500" }}>Futher Info</Typography>
                                <Box sx={{ width: "100%", height: "1px", backgroundColor: "grey" }}></Box>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px", marginTop: "20px" }}>Home</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>About</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Women Wear</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Phonefd</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Phone location</Typography>
                                <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "200", marginTop: "10px" }}>Address</Typography>
                            </Box>
                        </Card>
                    </CardGroup>
                </Grid>
                <Grid sx={{ width: { xs: '100%', md: '100%', lg: "80%" }, height: "1px", backgroundColor: "grey", marginTop: "20px" }}></Grid>

                <Grid container spacing={2} sx={{ width: { xs: '100%', md: '100%', lg: '80%' }, display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ display: "flex" }}>
                        <Box sx={{ width: "45px", height: "45px", borderRadius: "50%", border: "solid 1px grey", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}><Facebook sx={{ color: 'white', fontSize: '18px' }} /></Box>
                        <Box sx={{ width: "45px", height: "45px", borderRadius: "50%", border: "solid 1px grey", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}><Facebook sx={{ color: 'white', fontSize: '18px' }} /></Box>
                        <Box sx={{ width: "45px", height: "45px", borderRadius: "50%", border: "solid 1px grey", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}><Facebook sx={{ color: 'white', fontSize: '18px' }} /></Box>
                        <Box sx={{ width: "45px", height: "45px", borderRadius: "50%", border: "solid 1px grey", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px" }}><Facebook sx={{ color: 'white', fontSize: '18px' }} /></Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{ display: "flex" }}>
                        <Input sx={{ width: "200px", height: "40px", border: "solid 1px grey", color: "white" }} placeholder="Large text"></Input>
                        <Button sx={{ backgroundColor: "#59AB6E", height: "40px", color: "white", borderRadius: "0px" }}>Email</Button>

                    </Grid>
                </Grid>
                <Grid sx={{ width: { xs: '100%', md: '100%', lg: "100%" }, height: "60px", backgroundColor: "#1D242D", marginTop: "20px", paddingTop: "20px"}}>
                    <Typography sx={{textAlign: "center", color:"white"}}>Copyright © 2021 Company Name | Designed by TemplateMo</Typography>
                </Grid>




            </Grid>
        </div>
    )
}
