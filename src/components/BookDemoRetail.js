import { Box, Button , MenuItem, Select, TextField , Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookDemoRetail = () => {
  const [selectedIndustry,setSelectedIndustry]=useState('');
  const [selectedCountry,setSelectedCountry]=useState('');
  const [selectedEmployee,setSelectedEmployee]=useState('')
  const [countries,setCountries]=useState([]);
  const [formData,setFormData]=useState({firstName:'' , lastName:'' , companyName:'' , jobTitle:'' , workEmail:''});
  //console.log(countries);

  useEffect(()=>{
    fetchCountries()
  },[])

  const fetchCountries=async()=>{
    const response=await axios.get('https://countriesnow.space/api/v0.1/countries/population')
    const countryNames=response.data.data.map(count => count.country);
    //console.log(countryNames);
    setCountries(countryNames)
  }

  const handleChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
  }


  return (
    <div style={{display:'flex' , height:'91vh' , backgroundColor:'black' , justifyContent:'space-evenly' , alignItems:'center'}}>
      <Box className='content-container' sx={{width:'40%' , height:'fit-content' , display:'flex' , flexDirection:'column' , gap:3 , marginBottom:'260px'}}>
        <Typography sx={{fontSize:'26px' , fontWeight:'bold' , color:'#66BCFF'}}>Transforming Retail Experiences with Generative Intelligence</Typography>
        <Typography sx={{fontSize:'18px' , color:'white' , width:'95%'}}>Elevate your retail game with Generative AI. Our advanced algorithms delve deep into consumer behavior, anticipate trends, and create personalized experiences, enabling you to stay ahead in the competitive landscape. Embrace innovation and reimagine retail with us</Typography>
        <Button href='https://drive.google.com/file/d/1sV144OCIqEEQRipYRaipK9GHDNBvGJqe/view?usp=drive_link' variant='contained' sx={{ bgcolor: '#379AE6', color: 'white', borderRadius: '20px', width: '150px', height: '38px', textTransform: 'capitalize', fontSize: '16px' , marginTop:"20px"}}>Link</Button>
      </Box>


      {/* ---------------------------------------------------------- Form Container Starts Here ---------------------------------------------------------------- */}


      <Box className='form-container' sx={{bgcolor:'whitesmoke' , width:'37%' , height:'600px' , display:'flex' , flexDirection:'column' ,
                                           gap:3 , padding:'10px 0px' , borderRadius:'5px'}}>
        <Typography sx={{margin:'0 auto' , fontSize:'24px' , fontWeight:'600' , padding:'10px 0px'}}>Book A Demo</Typography>
        <Box className='name-box' sx={{display:'flex' , flexDirection:'row' , gap:5 , margin:'0 auto'}}>
          <Box className='first-name'>
            <Typography>First name*</Typography>
            <TextField onChange={handleChange} name='firstName' value={formData.firstName} type='name' InputProps={{style:{height:'40px' , width:'200px'}}}/>
          </Box>
          <Box className='last-name'>
            <Typography>Last name*</Typography>
            <TextField onChange={handleChange} name='lastName' value={formData.lastName} type='name' InputProps={{style:{height:'40px' , width:'200px'}}}/>
          </Box>
        </Box>
        <Box className='company-box' sx={{display:'flex' , flexDirection:'row' , gap:5 , margin:"0 auto"}}>
          <Box className='company-name'>
            <Typography>Company name*</Typography>
            <TextField onChange={handleChange} name='companyName' value={formData.companyName} type='name' InputProps={{style:{height:'40px' , width:'200px'}}}/>
          </Box>
          <Box className='job-title'>
            <Typography>Job Title*</Typography>
            <TextField onChange={handleChange} name='jobTitle' value={formData.jobTitle} type='name' InputProps={{style:{height:'40px' , width:'200px'}}}/>
          </Box>
        </Box>
        <Box className='work-email' sx={{display:"flex" , flexDirection:'column' , margin:'0 auto' , gap:3}}>
          <Box>
            <Typography>Work email*</Typography>
            <TextField onChange={handleChange} name='workEmail' value={formData.workEmail} type='email' InputProps={{style:{width:'440px' , height:'40px'}}}/>
          </Box>
          {/* <Box>
            <Typography>Whats ATS do you use?</Typography>
            <TextField InputProps={{style:{width:'440px' , height:'40px'}}}/>
          </Box> */}
        </Box>
        <Box className='choose-industry-box' sx={{display:'flex' , flexDirection:'row' , gap:5 , margin:"0 auto"}}>
          <Box className='industry'>
            <Typography>Choose your industry*</Typography>
            {/* <TextField InputProps={{style:{height:'40px' , width:'200px'}}}/> */}
            <Select value={selectedIndustry} onChange={(e)=>setSelectedIndustry(e.target.value)} sx={{width:'200px' , height:'40px'}} displayEmpty>
              <MenuItem value="" disabled>Please Select</MenuItem>
              <MenuItem value='Aerospace'>Aerospace</MenuItem>
              <MenuItem value='Agriculture'>Agriculture</MenuItem>
              <MenuItem value='Chemical'>Chemical</MenuItem>
              <MenuItem value='Construction'>Construction</MenuItem>
              <MenuItem value='Defense'>Defense</MenuItem>
              <MenuItem value='Education'>Education</MenuItem>
              <MenuItem value='Energy'>Energy</MenuItem>
              <MenuItem value='Entertainment'>Entertainment</MenuItem>
              <MenuItem value='Finance'>Finance & Insurance</MenuItem>
              <MenuItem value='Government'>Government</MenuItem>
              <MenuItem value='Healthcare'>Healthcare</MenuItem>
              <MenuItem value='Retail'>Retail</MenuItem>
              <MenuItem value='Staffing'>Staffing</MenuItem>
              <MenuItem value='Technology'>Technology</MenuItem>
            </Select>
          </Box>
          <Box className='employees'>
            <Typography>No. of emplpyees*</Typography>
            {/* <TextField InputProps={{style:{height:'40px' , width:'200px'}}}/> */}
            <Select value={selectedEmployee} onChange={(e)=>setSelectedEmployee(e.target.value)} sx={{width:'200px' , height:'40px'}} displayEmpty>
              <MenuItem value="" disabled>Please Select</MenuItem>
              <MenuItem value='1'>1-9</MenuItem>
              <MenuItem value='2'>10-99</MenuItem>
              <MenuItem value='3'>100-499</MenuItem>
              <MenuItem value='4'>500-999</MenuItem>
              <MenuItem value='5'>1000-2499</MenuItem>
              <MenuItem value='6'>2500-4999</MenuItem>
              <MenuItem value='7'>5000-9999</MenuItem>
              <MenuItem value='8'>10000+</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box sx={{margin:'0 auto'}}>
          <Typography>Country*</Typography>
          {/* <TextField InputProps={{style:{width:'440px' , height:'40px'}}}/> */}
          <Select value={selectedCountry} onChange={(e)=>setSelectedCountry(e.target.value)} sx={{width:'440px' , height:'40px'}} displayEmpty>
            <MenuItem value="" disabled>Please Select</MenuItem>
            {/* <MenuItem value='India'>India</MenuItem>
            <MenuItem value='Europe'>Europe</MenuItem>
            <MenuItem value='USA'>United States</MenuItem> */}
            {countries.map((country,index)=>(
              <MenuItem key={index} value={country}>{country}</MenuItem>
            ))}
          </Select>
        </Box>
        <Button onClick={handleSubmit} variant='contained' sx={{bgcolor:'#379AE6' , color:'white' , width:'440px' , margin:'0 auto' , marginTop:'15px'}}>Submit</Button>
      </Box>
    </div>
  )
}

export default BookDemoRetail;

//BookDemoRetail