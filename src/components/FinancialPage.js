import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FinancialPage = () => {
  const navigate=useNavigate();

  return (
    <Box sx={{ width: '100%', height: '91vh', display: "flex", alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
      <Box className='content-box' sx={{ width: '30%', height: '450px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
          <Typography sx={{ fontSize: '26px', fontWeight: 'bold', color: '#66BCFF', width:'90%'}}>Financial Services and Insurance</Typography>
          <Typography sx={{ fontSize: '38px', fontWeight: 'bold', color: 'white' , width:'100%'}}>Amplifying ROI, Igniting Growth</Typography>
          <Typography sx={{ fontSize: '18px', color: 'white' , width:'95%'}}>Transform your Financial Services and Insurance operations with Gen AI - From harnessing data insights to automating processes, our solutions drive unparalleled ROI and foster exponential growth.</Typography>
        </Box>
        <Box>
          <Button onClick={()=>navigate('/demo-request-fs')} variant='contained' sx={{bgcolor:'#379AE6' , borderRadius:'20px' , textTransform:'capitalize' , width:'150px' , height:'38px' , fontSize:'16px' , marginBottom:'20px'}}>Book A Demo</Button>
        </Box>
      </Box>
      <Box className='viedo-box' sx={{ width: '55%', height: '450px'}}>
        <img style={{width:'100%' , height:'100%' , objectFit:'contain'}} src='\images\finance_page.jpg' alt='#'/>
      </Box>
    </Box>
  )
}

export default FinancialPage;



// <div style={{ display: 'flex', justifyContent: 'space-around', height: '90vh', margin: '0 auto', backgroundColor: 'black', padding: '0px 100px', alignItems: 'center' }}>
//       <Box className='landing-page-text' sx={{ width: '39%', display: 'flex', flexDirection: 'column', height: '450px', justifyContent: 'space-between' , bgcolor:'wheat'}}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//           <Typography sx={{ color: '#66BCFF', fontSize: '26px', fontWeight: '600', fontFamily: "Urbanist,sans-serif" }}>Financial Services and Insurance</Typography>
//           <Typography sx={{ fontSize: '38px', color: 'white', fontWeight: '600', fontFamily: "Urbanist,sans-serif", width: '95%' }}>Amplifying ROI, Igniting Growth</Typography>
//           <Typography sx={{ fontSize: '18px', color: 'white', fontFamily: "Urbanist,sans-serif", width: '95%' }}>Transform your Financial Services and Insurance operations with Gen AI - From harnessing data insights to automating processes, our solutions drive unparalleled ROI and faster exponential growth. Embrace innovation that propels your business forward, unlocking new avenues for success.</Typography>
//         </Box>
//         <Button variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', borderRadius: '20px', width: '150px', height: '38px', textTransform: 'capitalize', fontSize: '16px', fontFamily: "Urbanist,sans-serif" , marginBottom:'20px'}}>Book a Demo</Button>
//       </Box>
//       <Box className='landing-page-image' sx={{ width: '60%', height: '470px' , bgcolor:'white'}}>
//         <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src='\images\finance_page.jpg' alt='#' />
//       </Box>
//     </div>