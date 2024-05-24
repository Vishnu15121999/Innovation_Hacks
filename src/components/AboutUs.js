import { Avatar, Box, Button, Input, TextField, Typography } from '@mui/material';
import React from 'react';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutUs = ({careerFormRef , scrollToForm}) => {
    return (
        <Box sx={{ bgcolor: 'black', width: '100%', height: '450vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box className='first-row' sx={{ width: '85%', height: '650px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box className='aboutus-content' sx={{ width: '45%', height: '400px', display: "flex", flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
                    <Box>
                        <Typography sx={{ fontSize: '26px', fontWeight: '600', color: '#66BCFF' }}>About us</Typography>
                        <Typography sx={{ fontSize: '38px', fontWeight: '600', color: 'white' }}>Revolutionizing creativity with Generative AI</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Button onClick={scrollToForm} variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', width: '160px' }}>Join the team</Button>
                        <Button onClick={scrollToForm} variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', width: '160px' }}>Learn more</Button>
                    </Box>
                </Box>
                <Box className='aboutus-image' sx={{ width: '65%', height: '400px', display: "flex", flexDirection: 'column', justifyContent: 'center' }}>
                    <img src='\images\about-us-page.webp' alt='#' />
                </Box>
            </Box>
            <Box className='second-row' sx={{ width: '85%', display: 'flex', height: '650px', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box className='whoWeAre-content' sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Typography sx={{ fontSize: '38px', fontWeight: '600', color: '#66BCFF' }}>Who are we?</Typography>
                    <Typography sx={{ fontSize: '26px', fontWeight: '500', color: 'white' }}>At the heart of Innovation Hacks AI is a diverse team of data scientists, AI engineers, software developers, and business strategists. Each member of our team brings unique skills, perspectives, and experiences to the table, enabling us to tackle complex problems from multiple angles and deliver holistic solutions</Typography>
                    <Button onClick={scrollToForm} variant='contained' sx={{ width: '220px', bgcolor: '#379AE6', color: 'white', marginTop: '25px' }}>See open positions</Button>
                </Box>
                <Box className='whoWeAre-image' sx={{ width: '45%' , height:'400px' , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                    <Box sx={{border:'2px solid #66BCFF' , width:'400px' , height:'400px' , borderRadius:'50%' , position:'relative'}}>
                        <Avatar sx={{ position: 'absolute', top: '4%', left: '5%' , width:'80px' , height:'80px' , border:'4px solid #66BCFF'}}> <img style={{objectFit:'cover' , width:'100%' , height:'100%'}} src='\images\decision_making.jpg' alt='#'/> </Avatar>
                        <Avatar sx={{ position: 'absolute', top: '4%', right: '5%' , width:'80px' , height:'80px' , border:'4px solid #66BCFF'}}> <img style={{objectFit:'cover' , width:'100%' , height:'100%'}} src='\images\productivity.jpg' alt='#'/> </Avatar>
                        <Avatar sx={{ position: 'absolute', bottom: '4%', left: '5%' , width:'80px' , height:'80px' , border:'4px solid #66BCFF'}}> <img style={{objectFit:'cover' , width:'100%' , height:'100%'}} src='\images\save_money.webp' alt='#'/> </Avatar>
                        <Avatar sx={{ position: 'absolute', bottom: '4%', right: '5%' , width:'80px' , height:'80px' , border:'4px solid #66BCFF'}}> <img style={{objectFit:'cover' , width:'100%' , height:'100%'}} src='\images\Personalization-icon.jpg' alt='#'/> </Avatar>
                        <Typography sx={{color:'white' , fontWeight:'600' , fontSize:'36px' , top: '50%', left: '50%' , position:'absolute' , transform: 'translate(-50%, -50%)' , textAlign:'center'}}>Benefits of<br/>Gen AI</Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='third-row' sx={{ width: "85%", height: 'fit-content', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 3, marginTop: '50px' }}>
                <Box sx={{ width: '49%', height: "350px", bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '10px' }}>
                    <Avatar sx={{ margin: '30px' , bgcolor:'#66BCFF'}}>1</Avatar>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', margin: '0px 30px' }}>Our Approach</Typography>
                    <Typography sx={{ fontSize: '20px', margin: '0px 30px' }}>We believe in a collaborative and iterative approach to problem-solving. By working closely with our clients, we gain a deep understanding of their goals, challenges, and opportunities.</Typography>
                </Box>
                <Box sx={{ width: '49%', height: "350px", bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '10px' }}>
                    <Avatar sx={{ margin: '30px' , bgcolor:'#66BCFF'}}>2</Avatar>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', margin: '0px 30px' }}>Our Commitment to Excellence</Typography>
                    <Typography sx={{ fontSize: '20px', margin: '0px 30px' }}>At Innovation Hacks AI, excellence is not just a goal – it's a way of life. We are committed to delivering the highest quality products and services, exceeding our clients' expectations, and continuously striving for improvement and innovation.</Typography>
                </Box>
                <Box sx={{ width: '49%', height: "350px", bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '10px' }}>
                    <Avatar sx={{ margin: '30px' , bgcolor:'#66BCFF'}}>3</Avatar>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', margin: '0px 30px' }}>Our Expertise</Typography>
                    <Typography sx={{ fontSize: '20px', margin: '0px 30px' }}>Our team consists of top-tier experts in the fields of data science and artificial intelligence, with years of experience delivering successful projects across various industries.</Typography>
                </Box>
                <Box sx={{ width: '49%', height: "350px", bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '10px' }}>
                    <Avatar sx={{ margin: '30px' , bgcolor:'#66BCFF'}}>4</Avatar>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', margin: '0px 30px' }}>Our Innovation</Typography>
                    <Typography sx={{ fontSize: '20px', margin: '0px 30px' }}>We are constantly exploring new technologies, techniques, and methodologies to stay ahead of the curve and deliver innovative solutions that drive real value for our clients.</Typography>
                </Box>
                <Box sx={{ width: '49%', height: "350px", bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '10px' }}>
                    <Avatar sx={{ margin: '30px' , bgcolor:'#66BCFF'}}>5</Avatar>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', margin: '0px 30px' }}>Our Mission</Typography>
                    <Typography sx={{ fontSize: '20px', margin: '0px 30px' }}>Our mission is simple: to democratize access to advanced data analytics and AI technologies. We believe that these tools should not be exclusive to large corporations or tech giants but should be accessible to organizations of all sizes and industries.</Typography>
                </Box>
                <Box sx={{ width: '49%', height: "350px", bgcolor: 'white', display: 'flex', flexDirection: 'column', gap: 2, borderRadius: '10px' }}>
                    <Avatar sx={{ margin: '30px' , bgcolor:'#66BCFF'}}>6</Avatar>
                    <Typography sx={{ fontSize: '22px', fontWeight: '600', margin: '0px 30px' }}>Our Ethics and Transparency</Typography>
                    <Typography sx={{ fontSize: '20px', margin: '0px 30px' }}>We are committed to upholding the highest ethical standards in everything we do. We believe in transparency and accountability, and we always prioritize the privacy and security of our clients' data.</Typography>
                </Box>
            </Box>
            <Box ref={careerFormRef} className='fourth-row' sx={{ width: '85%', height: 'fit-content', marginTop: '100px' , display:"flex" , flexDirection:'column' , gap:3 , bgcolor:'whitesmoke' , borderRadius:'10px' , padding:'20px 0px'}}>
                <Typography sx={{margin:'0px 25px' , fontSize:'18px'}}>Resume/CV</Typography>
                <Box sx={{display:'flex' , alignItems:'center' , flexDirection:'row' , gap:1 , margin:'0px 25px'}}>
                    <label style={{border:'2px solid black' , padding:'7px 15px' , borderRadius:'5px' , cursor:'pointer'}} htmlFor="resume-upload">SELECT RESUME<Input style={{display:'none'}} type='file' id="resume-upload" /></label>
                    <Typography sx={{fontSize:'14px'}}>Upload in either DOC , DOCX or PDF file format</Typography>
                </Box>
                <Box className='career-form' sx={{display:'flex' , flexDirection:'column' , gap:3}}>
                    <Box sx={{display:'flex' , alignItems:'center' , flexDirection:'row' , gap:5 , marginLeft:'25px'}}>
                        <Box>
                            <Typography>First Name*:</Typography>
                            <TextField InputProps={{style:{width:'600px' , height:'50px'}}}/>
                        </Box>
                        <Box>
                            <Typography>Last Name*:</Typography>
                            <TextField InputProps={{style:{width:'600px' , height:'50px'}}}/>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex' , alignItems:'center' , flexDirection:'row' , gap:5 , marginLeft:'25px'}}>
                        <Box>
                            <Typography>Email*:</Typography>
                            <TextField InputProps={{style:{width:'600px' , height:'50px'}}}/>
                        </Box>
                        <Box>
                            <Typography>Mobile Number*:</Typography>
                            <TextField InputProps={{style:{width:'600px' , height:'50px'}}}/>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:'95%' , display:"flex" , justifyContent:'flex-end'}}>
                    <Button sx={{width:'200px' , border:'2px solid black' , color:'black'}}>Submit</Button>
                </Box>
            </Box>
            {/* <Box className='fifth-row' sx={{ width:'100%' , height:'200px' , display:'flex' , flexDirection:'column' , alignItems:'center', justifyContent:'center' , marginTop:'150px' , gap:5}}>
                <Box className='footer-icons' sx={{display:'flex' , alignItems:'center', flexDirection:'row', gap:3 , color:'white'}}>
                    <LinkedInIcon/>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <XIcon/>
                </Box>
                <Box className='footer-names' sx={{display:'flex' , alignItems:'center', flexDirection:'row', gap:3 , color:'white'}}>
                    <Typography>Home</Typography>
                    <Typography>About Us</Typography>
                    <Typography>Services</Typography>
                    <Typography>Contact Us</Typography>
                </Box>
                <Box className='footer-copyright' sx={{color:'white'}}>
                    <Typography>Copyright © 2024 innovation-hacks.AI | All Rights Reserved </Typography>
                </Box>
            </Box> */}
            <Box sx={{display:"flex" , alignItems:'center' , width:'85%' , height:'200px' ,  justifyContent:'space-between' , marginTop:"150px"}}>
                <Box sx={{color:'white'}}>
                    <Typography sx={{fontSize:'26px'}}>Innovation Hacks</Typography>
                    <Typography></Typography>
                </Box>
                <Box sx={{display:'flex' , alignItems:'center' , color:'white' , flexDirection:'row' , gap:5}}>
                    <Box sx={{width:'60px' , height:'60px'}}> <LinkedInIcon sx={{width:'100%' , height:'100%'}}/> </Box>
                    <Box sx={{width:'60px' , height:'60px'}}> <XIcon sx={{width:'100%' , height:'100%'}}/> </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutUs;