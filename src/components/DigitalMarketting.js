import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const DigitalMarketting = () => {
  const navigate=useNavigate();

  return (
    <Box sx={{ width: '100%', height: '91vh', display: "flex", alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
      <Box className='content-box' sx={{ width: '35%', height: '470px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
          <Typography sx={{ fontSize: '26px', fontWeight: 'bold', color: '#66BCFF', width:'90%'}}>Digital Marketing</Typography>
          <Typography sx={{ fontSize: '38px', fontWeight: 'bold', color: 'white' , width:'95%'}}>Elevate Your Digital Marketing Strategy with AI-Powered Creativity</Typography>
          <Typography sx={{ fontSize: '18px', color: 'white' , width:'91%'}}>At the forefront of digital marketing innovation, we leverage the latest in Generative AI technology to transform your campaigns. From personalized content creation to data-driven insights, our consulting services empower your brand to stand out in a crowded digital landscape.</Typography>
        </Box>
        <Box>
          <Button onClick={()=>navigate('/demo-request-dm')} variant='contained' sx={{bgcolor:'#379AE6' , borderRadius:'20px' , textTransform:'capitalize' , width:'150px' , height:'38px' , fontSize:'16px'}}>Book A Demo</Button>
        </Box>
      </Box>
      <Box className='viedo-box' sx={{ width: '50%', height: '450px'}}>
        <img style={{width:'100%' , height:'100%' , objectFit:'contain'}} src='\images\digital-marketing-image.jpg' alt='#'/>
      </Box>
    </Box>
  )
}
export default DigitalMarketting;



// <div style={{ display: 'flex', justifyContent: 'space-around', height: '90vh', margin: '0 auto', backgroundColor: 'black', padding: '0px 100px', alignItems: 'center'}}>
//       <Box className='landing-page-text' sx={{ width: '45%', display: 'flex', flexDirection: 'column', height: '450px', justifyContent: 'space-between'}}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <Typography sx={{ color: '#66BCFF', fontSize: '26px', fontWeight: '600', fontFamily: "Urbanist,sans-serif" }}>Digital Marketing</Typography>
//           <Typography sx={{ fontSize: '38px', color: 'white', fontWeight: '600', fontFamily: "Urbanist,sans-serif", width: '95%' }}>Elevate Your Digital Marketing Strategy with AI-Powered Creativity</Typography>
//           <Typography sx={{ fontSize: '18px', color: 'white', fontFamily: "Urbanist,sans-serif", width: '95%' }}>At the forefront of digital marketing innovation, we leverage the latest in Generative AI technology to transform your campaigns. From personalized content creation to data-driven insights, our consulting services empower your brand to stand out in a crowded digital landscape.</Typography>
//         </Box>
//         <Button variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', borderRadius: '20px', width: '150px', height: '38px', marginTop: '12px', textTransform: 'capitalize', fontSize: '16px', fontFamily: "Urbanist,sans-serif" }}>Book a Demo</Button>
//       </Box>
//       <Box className='landing-page-image' sx={{ width: '55%', height: '500px'}}>
//         <img style={{ width: '100%', height: '100%', objectFit: 'contain'}} src='\images\digital-marketing-image.jpg' alt='#'/>
//       </Box>
//     </div>