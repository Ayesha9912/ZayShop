import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import Form from 'react-bootstrap/Form';
import pro1 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_01.jpg'
import pro2 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_02.jpg'
import pro3 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_03.jpg'
import pro4 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_04.jpg'
import pro5 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_05.jpg'
import pro6 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_06.jpg'
import pro7 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_07.jpg'
import pro9 from '../Images/Zay Shop eCommerce HTML CSS Template/shop_09.jpg'
import { Row, Col } from 'react-bootstrap';
import { Star, StarBorder } from '@mui/icons-material';

export default function Shopmainpro(){

    const Arraypro = [
        { id: 1, img: pro1 },
        { id: 2, img: pro2 },
        { id: 3, img: pro3 },
        { id: 4, img: pro4 },
        { id: 5, img: pro5 },
        { id: 6, img: pro6 },
        { id: 7, img: pro7 },
        { id: 8, img: pro1 },
        { id: 9, img: pro9 },
    ]
    return (
        <div>
            <Grid container spacing={2} sx={{ width: "100%", display: "flex", justifyContent: "center", backgroundColor: "white", padding: "20px" }}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={2} sx={{ display: "flex", flexDirection: "column", height: "100%", padding: "3"}}>
                    <Typography sx={{ fontSize: "30px" }}> Categories </Typography>
                    <Form.Select aria-label="Default select example" style={{ marginTop: "20px" }}>
                        <option>Men Wears</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" style={{ marginTop: "20px" }}>
                        <option>Women Wears</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                    <Form.Select aria-label="Default select example" style={{ marginTop: "20px" }}>
                        <option>Accessories</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={7} sx={{ display: "flex", flexDirection: "column", height: "100%", padding: "3",}}>
                    <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
                        {Arraypro.map((ele, index) =>(
                            <Col key={index} sm={12} md={4} lg={4} xl={4} xxl={4} style={{ marginTop: "30px", padding: "20px" }}>
                                <div style={{ marginTop: "30px", backgroundColor: "white", boxShadow: "0px 0px 7xp  0px #DFDFDF", border: "solid 1px #DFDFDF" }}>
                                    <img src={ele.img} class="img-fluid rounded-top" alt="" />
                                    <h1 style={{ fontSize: "20px", marginTop: "10px" }}>otreftse khaoli</h1>
                                    <h1 style={{ fontSize: "20px", marginTop: "10px" }}>XL/XXL/MD/SM</h1>
                                    <Box sx={{ display: "flex" }}>
                                        <Star sx={{ color: "yellowgreen" }} />
                                        <Star sx={{ color: "yellowgreen" }} />
                                        <Star sx={{ color: "yellowgreen" }} />
                                        <Star sx={{ color: "grey" }} />
                                        <Star sx={{ color: "grey" }} />
                                    </Box>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Grid>
            </Grid>
        </div>
    )
}
