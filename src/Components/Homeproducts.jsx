import React from "react";
import {Grid, Typography, Button } from "@mui/material";
import { Card, CardGroup} from 'react-bootstrap';
import card1 from "../Images/Zay Shop eCommerce HTML CSS Template/category_img_01.jpg"
import card2 from "../Images/Zay Shop eCommerce HTML CSS Template/category_img_02.jpg"
import card3 from "../Images/Zay Shop eCommerce HTML CSS Template/category_img_03.jpg"

function Homeproducts() {
    return (
        <div>
            <Grid sx={{ minHeight: "70vh", backgroundColor: "white", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Typography sx={{ fontSize: "40px", textAlign: "center", marginTop: "30px" }}>Categories of The Month</Typography>
                <Typography sx={{ fontSize: "20px", textAlign: "center" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Typography>
                <Typography sx={{ fontSize: "20px", textAlign: "center" }}>mollit anim id est laborum.</Typography>
                <Grid sx={{ width: { xs: '100%', md: '100%', lg: '80%' } }}>
                    <CardGroup>
                        <Card style={{ padding: "50px", border: "none", display: "flex", alignItems: "center" }}>
                            <Card.Img class="img-fluid rounded-circle" src={card1} />

                            <Card.Body>
                                <Card.Title>Watch</Card.Title>
                            </Card.Body>
                            <Button style={{padding: "10px", width: "max-content", backgroundColor:"#59AB6E"}} variant="contained" href="#contained-buttons">
                                Go Shop
                            </Button>
                        </Card>
                        <Card style={{ padding: "50px", border: "none" , display: "flex", alignItems: "center"}}>
                            <Card.Img class="img-fluid rounded-circle" src={card2} />
                            <Card.Body>
                                <Card.Title>Shoes</Card.Title>

                            </Card.Body>
                            <Button style={{padding: "10px", width: "max-content", backgroundColor:"#59AB6E"}} variant="contained" href="#contained-buttons">
                                Go Shop
                            </Button>
                            
                        </Card>
                        <Card style={{ padding: "50px", border: "none",display: "flex", alignItems: "center" }}>
                            <Card.Img class="img-fluid rounded-circle" src={card3} />
                            <Card.Body>
                                <Card.Title>Glases</Card.Title>
                            </Card.Body>
                            <Button style={{padding: "10px", width: "max-content", backgroundColor:"#59AB6E"}} variant="contained" href="#contained-buttons">
                                Go Shop
                            </Button>
                        </Card>
                    </CardGroup>
                </Grid>


            </Grid>
        </div>
    )
}

export default Homeproducts