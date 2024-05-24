import { Box, Button, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.pause();
  }

  const handleMouseLeave = () => {
    videoRef.current.play();
  }

  return (
    <Box sx={{ width: '100%', height: '91vh', display: "flex", alignItems: 'center', justifyContent: 'center', bgcolor: 'black' }}>
      <Box className='content-box' sx={{ width: '35%', height: '430px' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}>
        <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
          <Typography sx={{ fontSize: '26px', fontWeight: 'bold', color: '#66BCFF', width:'90%'}}>Generative AI Platform</Typography>
          <Typography sx={{ fontSize: '38px', fontWeight: 'bold', color: 'white' , width:'90%'}}>Data Fusion: Powering Rapid Business Evolution</Typography>
          <Typography sx={{ fontSize: '18px', color: 'white' , width:'90%'}}>By harnessing Data Fusion, businesses rapidly blend data from varied sources to enhance Large Language Models (LLMs). This streamlined approach enables swift ideation, testing, and deployment, trimming down business processes to days or weeks.</Typography>
        </Box>
        <Box>
          <Button onClick={()=>navigate('/demo-request-df')} variant='contained' sx={{bgcolor:'#379AE6' , borderRadius:'20px' , textTransform:'capitalize' , width:'150px' , height:'38px' , fontSize:'16px'}}>Book A Demo</Button>
        </Box>
      </Box>
      <Box className='viedo-box' sx={{ width: '50%', height: '450px'}}>
        <video ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} autoPlay muted loop controlsList="nodownload" disablePictureInPicture disableRemotePlayback style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}>
          <source src='\videos\Untitled design.mp4' type="video/mp4" />
        </video>
      </Box>
    </Box>
  )
}

export default LandingPage;




// <div style={{display:'flex' , justifyContent:'space-around' , height:'90vh' , backgroundColor:'black' , alignItems:'center' , padding:'0 100px'}}>
//         <Box className='landing-page-text' sx={{width:'45%' , display:'flex' , flexDirection:'column' , height:'400px' , justifyContent:'space-between'}}>
//             {/* <Typography sx={{color:'#66BCFF' , fontSize:'24px' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif"}}>Generative AI Platform</Typography> */}
//             <Box sx={{display:'flex' , flexDirection:'column' , gap:2}}>
//               <Typography sx={{color:'#66BCFF' , fontSize:'26px' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif"}}>Generative AI Platform</Typography>
//               <Typography sx={{fontSize:'38px' , color:'white' , fontWeight:'600' , fontFamily:"Urbanist,sans-serif" , width:'95%'}}>Data Fusion: Powering Rapid Business Evolution</Typography>
//               <Typography sx={{fontSize:'18px' , color:'white' , fontFamily:"Urbanist,sans-serif" , width:'95%'}}>By harnessing Data Fusion, businesses rapidly blend data from varied sources to enhance Large Language Models (LLMs). This streamlined approach enables swift ideation, testing, and deployment, trimming down business processes to days or weeks.</Typography>
//             </Box>
//             <Button onClick={()=>navigate('/demo-request-df')} variant='contained' sx={{bgcolor:'#379AE6' , color:'white' , borderRadius:'20px' , width:'150px' , height:'38px' , marginTop:'12px' , textTransform:'capitalize' , fontSize:'16px' , fontFamily:"Urbanist,sans-serif"}}>Book a Demo</Button>
//         </Box>
//         <Box className='landing-page-image' sx={{width:'54%' , height:'400px' , cursor:'pointer'}}>
//           <video ref={videoRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} autoPlay muted loop controlsList="nodownload" disablePictureInPicture disableRemotePlayback style={{ width: '100%', height: '100%', objectFit: 'contain'}}>
//             <source src='\videos\Untitled design.mp4' type="video/mp4"/>
//           </video>
//         </Box>
//     </div>