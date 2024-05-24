import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const ContactUs = () => {
    const [selectedReason, setSelectedReason] = useState('');
    const [formData,setFormData]=useState({firstName:'' , lastName:'' , phoneNumber:'', email:'' , contactReason:'' , message:'' });
    const [errors,setErrors]=useState({});

    const handleChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))   
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log(formData);
        const newError={}
        if(formData.firstName === ''){
            newError.firstName='Please enter the first name';
        }
        if(formData.lastName === ''){
            newError.lastName='Please enter the last name';
        }
        if(formData.email === ''){
            newError.email='Please enter the email';
        }
        if(formData.phoneNumber === ''){
            newError.phoneNumber='Please enter the phone number';
        }
        if(formData.message === ''){
            newError.message='Please enter the message';
        }
        setErrors(newError);
    }

    return (
        <Box sx={{ bgcolor: 'black', height: '150vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ width: '85%', marginTop: '40px' }} className='header-box'>
                <Typography sx={{ fontSize: '26px', color: '#66BCFF', fontWeight: '600' }}>Want to get in touch?</Typography>
                <Typography sx={{ fontSize: '38px', color: 'white', fontWeight: '600' }}>We'd love to hear from you 😁</Typography>
            </Box>
            <Box className='form-map-box' sx={{ width: '85%', height: '400px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '140px' }}>
                <Box className='form-box' sx={{ width: '49%', height:'fit-content' , minHeight: "610px", bgcolor: 'whitesmoke', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 , marginTop:errors.firstName || errors.lastName || errors.phoneNumber || errors.email || errors.email ? '40px' : 0 }}>
                    <Box>
                        <Typography sx={{ margin: '20px', fontSize: '26px' }}>We'd love to hear from you!</Typography>
                    </Box>
                    <form className='form-start' style={{ display: 'flex', flexDirection: 'column' , gap:17}}>
                        <Box className='first-row' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                            <Box className='first-name' sx={{display:'flex' , flexDirection:'column'}}>
                                <Typography>First Name<span style={{ color: 'red' }}>*</span></Typography>
                                <TextField onChange={handleChange} name='firstName' value={formData.firstName} type='name' InputProps={{ style: { height: '40px', width: '200px' } }} />
                                {errors.firstName && <span style={{color:'red' , fontSize:'10px' , height:'1px' , display:'inline-block'}}>{errors.firstName}</span>}
                            </Box>
                            <Box className='last-name' sx={{display:'flex' , flexDirection:'column'}}>
                                <Typography>Last Name<span style={{ color: 'red' }}>*</span></Typography>
                                <TextField onChange={handleChange} name='lastName' value={formData.lastName} type='name' InputProps={{ style: { height: '39px', width: '200px' } }} />
                                {errors.lastName && <span style={{color:'red' , fontSize:'10px' ,  height:'1px' , display:'inline-block'}}>{errors.lastName}</span>}
                            </Box>
                        </Box>
                        <Box className='second-row' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                            <Box className='email' sx={{display:'flex' , flexDirection:'column'}}>
                                <Typography>Email<span style={{ color: 'red' }}>*</span></Typography>
                                <TextField onChange={handleChange} name='email' value={formData.email} type='email' InputProps={{ style: { height: '40px', width: '420px' } }} />
                                {errors.email && <span style={{color:'red' , fontSize:'12px'}}>{errors.email}</span>}
                            </Box>
                        </Box>
                        <Box className='third-row' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                            <Box className='phone-number' sx={{display:'flex' , flexDirection:'column'}}>
                                <Typography>Phone number<span style={{ color: 'red' }}>*</span></Typography>
                                <TextField onChange={handleChange} name='phoneNumber' value={formData.phoneNumber} type='mobile' InputProps={{ style: { height: '40px', width: '420px' } }} />
                                {errors.phoneNumber && <span style={{color:'red' , fontSize:'12px'}}>{errors.phoneNumber}</span>}
                            </Box>
                        </Box>
                        <Box className='fourth-row' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                            <Box className='contact-reason'>
                                <Typography>Contact reason</Typography>
                                <Select displayEmpty value={selectedReason} onChange={(e) => setSelectedReason(e.target.value)} sx={{ width: '420px', height: '40px' }}>
                                    <MenuItem value='' disabled>Please Select</MenuItem>
                                    <MenuItem value='Contact Sales'>Contact Sales</MenuItem>
                                    <MenuItem value='RFP/RFI Request'>RFP/RFI Request</MenuItem>
                                    <MenuItem value='Get Support'>Get Support</MenuItem>
                                    <MenuItem value='Become a Partner'>Become a Partner</MenuItem>
                                    <MenuItem value='Media Inquiry'>Media Inquiry</MenuItem>
                                    <MenuItem value='General Inquiry'>General Inquiry</MenuItem>
                                </Select>
                            </Box>
                        </Box>
                        <Box className='fifth-row' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                            <Box className='your-name' sx={{display:'flex' , flexDirection:'column'}}>
                                <Typography>Your message<span style={{ color: 'red' }}>*</span></Typography>
                                <textarea onChange={handleChange} name='message' value={formData.message} type='message' style={{ width: '420px', height: '80px' }} />
                                {errors.message && <span style={{color:'red' , fontSize:'12px'}}>{errors.message}</span>}
                            </Box>
                        </Box>
                        <Box>
                            <Button onClick={handleSubmit} variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', width: '160px' , margin:'10px 0px'}}>Submit</Button>
                        </Box>
                    </form>
                </Box>
                <Box className='map-box' sx={{ width: '50%', height: "610px", display: "flex", flexDirection: 'column', gap: 1 }}>
                    <Box className='head-quaters-box' sx={{ width: '100%', height: '24%', bgcolor: 'whitesmoke', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
                        <Typography sx={{ margin: '20px', fontSize: '26px', fontWeight: '600' }}>Our HQ</Typography>
                        <Typography sx={{ width: '30%' }}>Express Tower, Marine Drive, Nariman Point, Mumbai, Maharashtra 400-021</Typography>
                    </Box>
                    <Box className='map-box' sx={{ width: '100%', height: '74%', marginTop: '4px' }}>
                        <iframe style={{ border: 0, width: '100%', height: '100%', borderRadius: "10px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.075329326872!2d72.82025077466166!3d18.9280595566013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e8da6a1523%3A0x9b3395201047593d!2sExpress%20Towers%2C%2001%2C%20Nariman%20Point%2C%20Mumbai%2C%20Maharashtra%20400021!5e0!3m2!1sen!2sin!4v1715674440318!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                </Box>
            </Box>
            {/* <Box className='fifth-row' sx={{ width:'100%' , height:'200px' , display:'flex' , flexDirection:'column' , alignItems:'center', justifyContent:'center' , marginTop:'250px' , gap:5}}>
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
            <Box sx={{display:"flex" , alignItems:'center' , width:'85%' , height:'200px' ,  justifyContent:'space-between' , marginTop:"250px"}}>
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

export default ContactUs;