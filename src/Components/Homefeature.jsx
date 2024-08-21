import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import { Card, CardGroup} from 'react-bootstrap';
import free1 from "../Images/Zay Shop eCommerce HTML CSS Template/feature_prod_01.jpg"
import free2 from "../Images/Zay Shop eCommerce HTML CSS Template/feature_prod_02.jpg"
import free3 from "../Images/Zay Shop eCommerce HTML CSS Template/feature_prod_03.jpg"
import { Star, StarBorder } from '@mui/icons-material';


export default function Homefeature() {
  return (
    <div>
<Grid sx={{ minHeight: "70vh", backgroundColor: "#E9EEF5", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", paddingBottom:"50px" }}>
<Typography sx={{ fontSize: "40px", textAlign: "center", marginTop: "30px" }}>Categories of The Month</Typography>
<Typography sx={{ fontSize: "20px", textAlign: "center" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Typography>
<Typography sx={{ fontSize: "20px", textAlign: "center" }}>mollit anim id est laborum.</Typography>
<Grid sx={{ width: { xs: '100%', md: '100%', lg: '80%' } }}>
    <CardGroup>
        <Card style={{ padding: "20px", display: "flex", alignItems: "center", border: "none", backgroundColor: "#E9EEF5"}}>
            <Box sx={{border: "solid 1px #DDDEE0" ,display: "flex" , flexDirection: "column"}}>
            <Card.Img class="img-fluid rounded-top" src={free1}/>
            <Box sx={{display:"flex", justifyContent: "space-between", width: "100%", padding: "10px"}}>
                <Box sx={{display:"flex"}}>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "grey"}}/>
                    <Star sx={{color: "grey"}}/>
                </Box>
                <Typography sx={{color: "grey"}}>$245</Typography>
            </Box>
            <Typography sx={{color: "black", fontSize: "30px", marginLeft: "10px"}}>Gym Weight</Typography>
            <Typography sx={{color: "black", marginLeft: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</Typography>
            <Typography sx={{color: "black", marginLeft: "10px", marginBottom: "30px"}}>Reviews (24)</Typography>
            </Box>
        </Card>

        <Card style={{ padding: "20px", display: "flex", alignItems: "center", border: "none", backgroundColor: "#E9EEF5"}}>
            <Box sx={{border: "solid 1px #DDDEE0" ,display: "flex" , flexDirection: "column"}}>
            <Card.Img class="img-fluid rounded-top" src={free2}/>
            <Box sx={{display:"flex", justifyContent: "space-between", width: "100%", padding: "10px"}}>
                <Box sx={{display:"flex"}}>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "grey"}}/>
                    <Star sx={{color: "grey"}}/>
                </Box>
                <Typography sx={{color: "grey"}}>$245</Typography>
            </Box>
            <Typography sx={{color: "black", fontSize: "30px", marginLeft: "10px"}}>Gym Weight</Typography>
            <Typography sx={{color: "black", marginLeft: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</Typography>
            <Typography sx={{color: "black", marginLeft: "10px", marginBottom: "30px"}}>Reviews (24)</Typography>
            </Box>
        </Card>

        <Card style={{ padding: "20px", display: "flex", alignItems: "center", border: "none", backgroundColor: "#E9EEF5"}}>
            <Box sx={{border: "solid 1px #DDDEE0" ,display: "flex" , flexDirection: "column"}}>
            <Card.Img class="img-fluid rounded-top" src={free3}/>
            <Box sx={{display:"flex", justifyContent: "space-between", width: "100%", padding: "10px"}}>
                <Box sx={{display:"flex"}}>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "yellowgreen"}}/>
                    <Star sx={{color: "grey"}}/>
                    <Star sx={{color: "grey"}}/>
                </Box>
                <Typography sx={{color: "grey"}}>$245</Typography>
            </Box>
            <Typography sx={{color: "black", fontSize: "30px", marginLeft: "10px"}}>Gym Weight</Typography>
            <Typography sx={{color: "black", marginLeft: "10px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</Typography>
            <Typography sx={{color: "black", marginLeft: "10px", marginBottom: "30px"}}>Reviews (24)</Typography>
            </Box>
        </Card>


        
        
    </CardGroup>
</Grid>


</Grid>


    </div>
  )
}

