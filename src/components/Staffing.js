import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Staffing = () => {
  const navigate=useNavigate();

  return (
    <Box sx={{ width: '100%', height: '91vh', display: "flex", alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
      <Box className='content-box' sx={{ width: '40%', height: '450px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
          <Typography sx={{ fontSize: '26px', fontWeight: 'bold', color: '#66BCFF', width:'90%'}}>Staffing</Typography>
          <Typography sx={{ fontSize: '38px', fontWeight: 'bold', color: 'white' , width:'100%'}}>Transforming Talent Accquisation and Recruitment</Typography>
          <Typography sx={{ fontSize: '18px', color: 'white' , width:'95%'}}>Discover how Generative AI is redefining staffing by automating job description generation, enhancing candidate matching, and optimizing talent acquisition processes. Harness the power of AI to streamline recruitment workflows and unlock new levels of efficiency and effectiveness in staffing operations.</Typography>
        </Box>
        <Box>
          <Button onClick={()=>navigate('/demo-request-staffing')} variant='contained' sx={{bgcolor:'#379AE6' , borderRadius:'20px' , textTransform:'capitalize' , width:'150px' , height:'38px' , fontSize:'16px'}}>Book A Demo</Button>
        </Box>
      </Box>
      <Box className='viedo-box' sx={{ width: '45%', height: '450px'}}>
        <img style={{width:'100%' , height:'100%' , objectFit:'contain'}} src='\images\staffing-page-image.jpg' alt='#'/>
      </Box>
    </Box>
  )
}

export default Staffing;



// <div style={{ display: 'flex', justifyContent: 'space-around', height: '90vh', margin: '0 auto', backgroundColor: 'black', padding: '0px 100px', alignItems: 'center'}}>
//       <Box className='landing-page-text' sx={{ width: '45%', display: 'flex', flexDirection: 'column', height: '450px', justifyContent: 'space-between'}}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <Typography sx={{ color: '#66BCFF', fontSize: '26px', fontWeight: '600', fontFamily: "Urbanist,sans-serif" }}>Staffing</Typography>
//           <Typography sx={{ fontSize: '38px', color: 'white', fontWeight: '600', fontFamily: "Urbanist,sans-serif", width: '100%' }}>Transforming Talent Accquisation and Recruitment</Typography>
//           <Typography sx={{ fontSize: '18px', color: 'white', fontFamily: "Urbanist,sans-serif", width: '95%' }}>Discover how Generative AI is redefining staffing by automating job description generation, enhancing candidate matching, and optimizing talent acquisition processes. Harness the power of AI to streamline recruitment workflows and unlock new levels of efficiency and effectiveness in staffing operations.</Typography>
//         </Box>
//         <Button variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', borderRadius: '20px', width: '150px', height: '38px', marginTop: '12px', textTransform: 'capitalize', fontSize: '16px', fontFamily: "Urbanist,sans-serif" }}>Book a Demo</Button>
//       </Box>
//       <Box className='landing-page-image' sx={{ width: '55%', height: '450px' , marginLeft:'15px'}}>
//         <img style={{ width: '100%', height: '100%', objectFit: 'contain'}} src='\images\staffing-page-image.jpg' alt='#'/>
//       </Box>
//     </div>
