import { Box, Button, Typography } from '@mui/material';
import React from 'react'

const Manufacturing = () => {
  return (
    <div style={{display:'flex' , justifyContent:'space-around' , height:'91vh' , margin:'0 auto' , backgroundColor:'black' , padding:'0px 100px' , alignItems:'center'}}>
        <Box className='landing-page-text' sx={{width:'45%' , display:'flex' , flexDirection:'column' , height:'400px' , justifyContent:'space-between'}}>
            <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
              <Typography sx={{color:'#66BCFF' , fontSize:'24px' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif"}}>Manufacturing and Warehousing</Typography>
              <Typography sx={{fontSize:'40px' , color:'white' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif" , width:'100%'}}>Creating Innovations for Technology and IT</Typography>
              <Typography sx={{fontSize:'18px' , color:'white' , fontFamily:"Urbanist,sans-serif" , width:'90%'}}>Making Decision from enterprise data using AI models. Incorporating latest AI research and helping developers realize true value of AI.</Typography>
            </Box>
            <Button variant='contained' sx={{bgcolor:'#379AE6' , color:'white' , borderRadius:'20px' , width:'150px' , height:'38px' , marginTop:'12px' , textTransform:'capitalize' , fontSize:'16px' , fontFamily:"Urbanist,sans-serif"}}>Book a Demo</Button>
        </Box>
        <Box className='landing-page-image' sx={{width:'55%' , height:'450px'}}>
          <img style={{width:'100%', height:'100%' , objectFit:'cover'}} src='\images\manufacturing-image.jpg' alt='#'/>
        </Box>
    </div>
  )
}

export default Manufacturing;