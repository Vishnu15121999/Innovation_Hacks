import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Logistic = () => {
  const navigate=useNavigate();

  return (
    <Box sx={{ width: '100%', height: '91vh', display: "flex", alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
      <Box className='content-box' sx={{ width: '35%', height: '430px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
          <Typography sx={{ fontSize: '26px', fontWeight: 'bold', color: '#66BCFF', width:'100%'}}>Logistics and Transportation</Typography>
          <Typography sx={{ fontSize: '38px', fontWeight: 'bold', color: 'white' , width:'100%' }}>Navigating the Future with Generative Precision</Typography>
          <Typography sx={{ fontSize: '18px', color: 'white' , width:'94%'}}>In the ever-evolving landscape of Transportation and Logistics, our generative AI solutions pave the way forward. From optimizing routes to predicting demand, we harness the power of data to drive efficiency and streamline operations.</Typography>
        </Box>
        <Box>
          <Button onClick={()=>navigate('/demo-request-logistic')} variant='contained' sx={{bgcolor:'#379AE6' , borderRadius:'20px' , textTransform:'capitalize' , width:'150px' , height:'38px' , fontSize:'16px'}}>Book A Demo</Button>
        </Box>
      </Box>
      <Box className='viedo-box' sx={{ width: '50%', height: '450px'}}>
        <img style={{width:'100%' , height:'100%' , objectFit:'contain'}} src='\images\logistic-image.jpg' alt='#'/>
      </Box>
    </Box>
  )
}

export default Logistic;



// <div style={{display:'flex' , justifyContent:'space-around' , height:'90vh' , margin:'0 auto' , backgroundColor:'black' , padding:'0px 100px' , alignItems:'center'}}>
//         <Box className='landing-page-text' sx={{width:'60%' , display:'flex' , flexDirection:'column' , height:'360px' , justifyContent:'space-between'}}>
//             {/* <Typography sx={{color:'#66BCFF' , fontSize:'24px' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif"}}>Generative AI Platform</Typography> */}
//             <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
//               <Typography sx={{color:'#66BCFF' , fontSize:'24px' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif"}}>Logistics and Transportation</Typography>
//               <Typography sx={{fontSize:'40px' , color:'white' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif" , width:'95%'}}>Creating Innovations for Logistics and Transportation</Typography>
//               <Typography sx={{fontSize:'18px' , color:'white' , fontFamily:"Urbanist,sans-serif" , width:'95%'}}>Making Decision from enterprise data using AI models. Ensuring cost effectiveness and optimization, realizing higher revenue.</Typography>
//             </Box>
//             <Button variant='contained' sx={{bgcolor:'#379AE6' , color:'white' , borderRadius:'20px' , width:'150px' , height:'38px' , marginTop:'12px' , textTransform:'capitalize' , fontSize:'16px' , fontFamily:"Urbanist,sans-serif"}}>Book a Demo</Button>
//         </Box>
//         <Box className='landing-page-image' sx={{width:'40%' , height:'400px'}}>

//         </Box>
//     </div>


//In the ever-evolving landscape of Transportation and Logistics, our generative AI solutions pave the way forward. From optimizing routes to predicting demand, we harness the power of data to drive efficiency and streamline operations. With precision and foresight, we're revolutionizing how goods move, delivering reliability and agility in every journey.