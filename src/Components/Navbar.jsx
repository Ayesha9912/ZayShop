import { AccountBox, Menu, Search, ShoppingBasket} from "@mui/icons-material";
import { Grid, Box, Typography } from "@mui/material";
import {Link} from "react-router-dom"
function Navbar(){
    return(
        <div>
            <Grid sx={{ width: "100%", height: "10vh", bgcolor: "#FFFFFF", boxShadow: "0px 0xp 8px 0px grey", overflow: "hidden"}}>
                <Box sx={{ height: "100%", display:{xxl:"flex", xl:"flex", lg: "flex", md:"none", sm:"none", xs: "none", xxs:"none"}, justifyContent: "center", alignItems: "center"}}>
                    <Box  sx={{width:"60%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography sx={{fontSize: "50px", color: "#59AB6E", fontWeight: "bolder" }}>Zay</Typography>
                        <Box sx={{ width: "650px", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                            <Link to={"/"} style={{textDecoration: "none", color: "black"}}>
                            <Typography sx={{ fontSize: "20px" }}>Home</Typography>
                            </Link>
                            <Link to={"/about"} style={{textDecoration: "none", color: "black"}}>
                            <Typography sx={{ fontSize: "20px" }}>About</Typography>
                            </Link>
                            <Link to={"/shop"} style={{textDecoration: "none", color: "black"}}>
                            <Typography sx={{ fontSize: "20px" }}>Shop</Typography>
                            </Link>
                            <Link to={"/contact"} style={{textDecoration: "none", color: "black"}}>
                            <Typography sx={{ fontSize: "20px" }}>Contact</Typography>
                            </Link>
                        </Box>
                        <Box sx={{ width: "100px", height: "100%", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
                            <Search/>
                            <ShoppingBasket/>
                            <AccountBox/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ height: "100%", display:{xxl:"none", xl:"none", lg: "none", md:"flex", sm:"flex", xs: "flex" , xxs: "flex"}, justifyContent: "space-around", alignItems: "center"}}>
                <Typography sx={{fontSize: "50px", color: "#59AB6E", fontWeight: "bolder" }}>Zay</Typography>
                 <Box>
                 </Box>
                 <Menu sx={{fontSize:"35px"}}/>
                </Box>
            </Grid>
        </div>
    )
}
export default Navbar