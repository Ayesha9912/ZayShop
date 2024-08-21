import { AddCircleSharp, LocationCity } from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Contactcontent() {
  return (
    <div>
        <Grid sx={{width: "100%", background: "#E9EEF5" , paddingTop: "50px"}}>
        <Typography sx={{ fontSize: "40px", textAlign: "center", marginTop: "30px", fontWeight: "100" }}>Contact Us</Typography>
        <Typography sx={{ fontSize: "20px", textAlign: "center" }}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</Typography>

        <Box sx={{width: "100%", height: "300px", backgroundColor: "#DDDDDD" , marginTop: "50px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <AddCircleSharp sx={{color: "#237CC9",fontSize: "40px"}}/>
        </Box>
        </Grid>
    </div>
  )
}
