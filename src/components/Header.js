import React, { useRef, useState } from 'react';
import {AppBar, Box, Button , Popover, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useNavigate } from 'react-router-dom';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Header = ({scrollToForm}) => {
    const [anchorEl, setAnchorEl]=useState(null);
    const [anchorElAboutUs,setAnchorElAboutUs]=useState(null);
    const [anchorElResources,setAnchorElResources]=useState(null);
    const [anchorElPlatform,setAnchorElPlatform]=useState(null);

    const navigate=useNavigate();

    const handlePlatformOpen=(e)=>{
        setAnchorElPlatform(e.currentTarget)
    }

    const handlePlatformClose=()=>{
        setAnchorElPlatform(null)
    }

    const handlePopoverOpen=(e)=>{
        setAnchorEl(e.currentTarget)
    }

    const handlePopoverClose=()=>{
        setAnchorEl(null)
    }

    const handleAboutOpen=(e)=>{
        setAnchorElAboutUs(e.currentTarget)
    }

    const handleAboutClose=()=>{
        setAnchorElAboutUs(null)
    }
    
    const handleResourcesOpen=(e)=>{
        setAnchorElResources(e.currentTarget)
    }

    const handleResourcesClose=()=>{
        setAnchorElResources(null)
    }

    const open=Boolean(anchorEl);
    const id=open ? 'simple-popover' : undefined;

    const aboutOpen=Boolean(anchorElAboutUs);
    const aboutUsId=aboutOpen ? 'simple-aboutus-popover' : undefined;

    const resourcesOpen=Boolean(anchorElResources);
    const resourcesId=resourcesOpen ? 'simple-resources-open' : undefined;

    const platformOpen=Boolean(anchorElPlatform);
    const platformId=platformOpen ? 'simple-platform-open' : undefined;

  return (
    <AppBar position='sticky'>
        <Toolbar sx={{display:'flex' , alignItems:'center' , justifyContent:"space-around" , bgcolor:'black'}}>
            <Box className='logo-box' sx={{display:'flex' , alignItems:'center' , cursor:'pointer'}} onClick={()=>navigate('/')}>
                <img style={{width:'60px'}} src='\images\web-log.png' alt='company-logo'/>
                <Typography sx={{fontSize:'22px' , fontFamily:"Urbanist,sans-serif"}}>Innovation Hacks AI</Typography>
            </Box>
            <Box className='tabs-box'>
                <Tabs>
                    <Tab onClick={()=>navigate('/')} label={<Button disableRipple sx={{color:'white' , fontSize:'16px' , textTransform:'capitalize'}}>Home</Button>}/>
                    <Tab aria-describedby={platformId} onClick={handlePlatformOpen} label={<Button disableRipple sx={{color: platformOpen ? '#66BCFF' : 'white' , fontSize:'16px' , textTransform:'capitalize'}}>Platform {platformOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> }</Button>}/>
                    <Tab aria-describedby={id} onClick={handlePopoverOpen} label={<Button disableRipple sx={{ color: open ? '#66BCFF' : 'white' , fontSize: '16px', textTransform: 'capitalize' , transition:"color 0.3s ease"}}>Solutions { open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/> } </Button>}/>
                    <Tab label={<Button disableRipple sx={{color:'white' , fontSize:'16px' , textTransform:'capitalize'}}>Customers</Button>}/>
                    <Tab aria-describedby={resourcesId} onClick={handleResourcesOpen} label={<Button disableRipple sx={{color: resourcesOpen ? '#66BCFF' : 'white' , fontSize:'16px' , textTransform:'capitalize'}}>Resources {resourcesOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> } </Button>}/>
                    <Tab aria-describedby={aboutUsId} onClick={handleAboutOpen} label={<Button disableRipple sx={{color: aboutOpen ? '#66BCFF' : 'white' , fontSize:'16px' , textTransform:'capitalize' , transition:"color 0.3s ease"}}>About Us {aboutOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> } </Button>}/>
                </Tabs>
            </Box>
            <Box className='login-buttons' sx={{display:'flex' , alignItems:'center' , flexDirection:'row' , gap:2 , marginRight:'10px'}}>
                <Button variant='contained' sx={{color:'white' , width:'90px' , bgcolor:'#379AE6' , borderRadius:'20px' , textTransform:'capitalize' , fontFamily:"Urbanist,sans-serif"}}>Sign In</Button>
                <Button onClick={()=>navigate('/demo-request-df')} variant='contained' sx={{color:'black' , width:'130px' , bgcolor:'whitesmoke' , borderRadius:'20px' , textTransform:'capitalize' , fontFamily:"Urbanist,sans-serif"}}>Book a Demo</Button>
            </Box>
        </Toolbar>
        {open ? <ArrowDropUpIcon transitionDuration={50} sx={{width:"45px" , height:'110px' , color:'white' , position:"absolute" , top:'6px' , left:'645px'}}/> : <> </>} 
        <Popover PaperProps={{sx:{bgcolor:'white' , padding:'20px 20px' , borderRadius:'10px'}}} transitionDuration={50} id={id} open={open} anchorEl={anchorEl} onClose={handlePopoverClose} anchorOrigin={{vertical:'bottom' , horizontal:'right'}} transformOrigin={{vertical:'top' , horizontal:'center'}}>
            <Typography sx={{padding:'10px' , color:'black', fontWeight:'600' , fontSize:'16px'}}>Solutions</Typography>
            <hr style={{margin:'0px 5px' , borderWidth:'1px' , color:'black'}}/>
            <Box sx={{width:'845px' , height:'240px' , bgcolor:'white' , display:'flex' , flexDirection:'column' ,flexWrap:'wrap' , marginTop:'15px'}}>
                <Box onClick={()=>{navigate('/finance');handlePopoverClose()}} className='financial-box' sx={{width:'260px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600' , fontSize:'16px'}}>Financial Services & Insurance</Typography>
                    <Typography sx={{fontSize:'14px'}}>Amplifying ROI, Igniting Growth</Typography>
                </Box>
                <Box onClick={()=>{navigate('/staffing');handlePopoverClose()}} className='financial-box' sx={{width:'260px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600' , fontSize:'16px'}}>Staffing</Typography>
                    <Typography sx={{fontSize:'14px'}}>Transforming Talent Accquisation and Recruitment</Typography>
                </Box>
                <Box onClick={()=>{navigate('/digital-marketting');handlePopoverClose()}} className='financial-box' sx={{width:'260px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600' , fontSize:'16px'}}>Digital Marketing</Typography>
                    <Typography sx={{fontSize:'14px'}}>Elevate Your Digital Marketing Strategy with AI-Powered Creativity</Typography>
                </Box>
                <Box onClick={()=>{navigate('/retail');handlePopoverClose()}} className='financial-box' sx={{width:'260px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600' , fontSize:'16px'}}>Retail</Typography>
                    <Typography sx={{fontSize:'14px'}}>Elevate Retail Excellence with Gen AI</Typography>
                </Box>
                <Box onClick={()=>{navigate('/logistic');handlePopoverClose()}} className='financial-box' sx={{width:'260px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600' , fontSize:'16px'}}>Logistic & Transportation</Typography>
                    <Typography sx={{fontSize:'14px'}}>Navigating the Future with Generative Precision</Typography>
                </Box>
            </Box>
        </Popover>
        {aboutOpen ? <ArrowDropUpIcon transitionDuration={50} sx={{width:"45px" , height:'110px' , color:'white' , position:"absolute" , top:'6px' , right:'415px'}}/> : <> </>}
        <Popover PaperProps={{sx:{bgcolor:'white' , padding:'20px' , borderRadius:'10px'}}} transitionDuration={50} id={aboutUsId} open={aboutOpen} anchorEl={anchorElAboutUs} onClose={handleAboutClose} anchorOrigin={{vertical:'bottom' , horizontal:'right'}} transformOrigin={{vertical:'top' , horizontal:'right'}}>
            <Typography sx={{padding:'10px' , color:'black' , fontWeight:'600'}}>Company</Typography>
            <hr style={{margin:'0px 5px' , borderWidth:'1px' , color:'black'}}/>
            <Box sx={{width:'fit-content' , height:'120px' , bgcolor:'white' , display:'flex' , marginTop:'15px' , gap:2}}>
                <Box onClick={()=>{navigate('/aboutUs');handleAboutClose()}} className='aboutus-box' sx={{width:'280px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600'}}>About Us</Typography>
                    <Typography sx={{fontSize:'14px'}}>Learn about Innovation Hacks people, values and principles that guide our product and vision.</Typography>
                </Box>
                <Box onClick={()=>{navigate('/aboutUs');scrollToForm(); handleAboutClose();}} className='careers-box' sx={{width:'280px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600'}}>Careers</Typography>
                    <Typography sx={{fontSize:'14px'}}>Explore open opportunities at Innovation Hacks and get ready to supercharge your career.</Typography>
                </Box>
                <Box onClick={()=>{navigate('/contactUs');handleAboutClose()}} className='contactus-box' sx={{width:'280px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600'}}>Contact Us</Typography>
                    <Typography sx={{fontSize:'14px'}}>Want to learn about Innovation Hacks AI? Get in touch with us.</Typography>
                </Box>
            </Box>
        </Popover>
        {resourcesOpen ? <ArrowDropUpIcon transitionDuration={50} sx={{width:"45px" , height:'110px' , color:'white' , position:"absolute" , top:'6px' , right:'570px'}}/> : <> </>}
        <Popover PaperProps={{sx:{bgcolor:'white' , padding:'20px' , borderRadius:'10px'}}} transitionDuration={50} id={resourcesId} open={resourcesOpen} anchorEl={anchorElResources} onClose={handleResourcesClose} anchorOrigin={{vertical:'bottom' , horizontal:'right'}} transformOrigin={{vertical:'top' , horizontal:'right'}}>
            <Typography sx={{padding:'10px' , color:'black' , fontWeight:'600'}}>Blogs</Typography>
            <hr style={{margin:'0px 5px' , borderWidth:'1px' , color:'black'}}/>
            <Box sx={{width:'fit-content' , height:'120px' , bgcolor:'white' , display:'flex' , marginTop:'15px'}}>
                <Box className='aboutus-box' sx={{width:'350px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600'}}>Blogs</Typography>
                    <Typography sx={{fontSize:'14px'}}>The latest updates, stories, ideas and guides from the Innovation Hacks AI team.</Typography>
                </Box>
            </Box>
        </Popover>
        {platformOpen ? <ArrowDropUpIcon transitionDuration={50} sx={{width:"45px" , height:'110px' , color:'white' , position:"absolute" , top:'6px' , left:'505px'}}/> : <> </>}
        <Popover PaperProps={{sx:{bgcolor:'white' , padding:'20px' , borderRadius:'10px'}}} transitionDuration={50} id={platformId} open={platformOpen} anchorEl={anchorElPlatform} onClose={handlePlatformClose} anchorOrigin={{vertical:'bottom' , horizontal:'center'}} transformOrigin={{vertical:'top' , horizontal:'center'}}>
            <Typography sx={{padding:'10px' , color:'black' , fontWeight:'600'}}>Platform</Typography>
            <hr style={{margin:'0px 5px' , borderWidth:'1px' , color:'black'}}/>
            <Box sx={{width:'fit-content' , height:'120px' , bgcolor:'white' , display:'flex' , marginTop:'15px'}}>
                <Box onClick={()=>{navigate('/data-fusion');handlePlatformClose()}} className='aboutus-box' sx={{width:'350px' , height:'100px' , display:'flex' , flexDirection:'column' , gap:1 , justifyContent:'flex-start' , cursor:'pointer' , borderRadius:'10px' , padding:'10px'}}>
                    <Typography sx={{color:'black' , fontWeight:'600'}}>Data Fusion</Typography>
                    <Typography sx={{fontSize:'14px'}}>Data Fusion: Powering Rapid Business Evolution</Typography>
                </Box>
            </Box>
        </Popover>
    </AppBar>
  )
}

export default Header;