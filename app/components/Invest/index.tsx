import { WidthFull } from '@mui/icons-material';
import './index.css';
import {Box,Typography} from '@mui/material';
import {Button} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Invest=()=>{
    const textStyle = {
        fontFamily: 'Poppins',
        fontSize: "44px",
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '51px',
        textTransform: 'uppercase',
        background: 'linear-gradient(90deg, #232073 52.7%, #D92365 85.57%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
      const perStyle = {
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '44px',
        textTransform: 'capitalize',
        background: 'linear-gradient(90deg, #D92365 26.96%, #232073 82.35%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
      const fdStyle = {
        fontFamily: 'Poppins',
        fontSize: '24px',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: '44px',
        textTransform: 'capitalize',
        background: 'linear-gradient(90deg, #232073 0%, #D92365 47.22%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      };
    return(
  
  /*      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */
        <Box className="invest-container" sx={{display:"flex", flexDirection:"column", height:800, width:1440, background:"#F2F2F2"}}>
           <div className='img-container'>
            <div className='content'>
            <Typography className='heading' variant='h1' sx={{color:"#232073", 
            fontFamily:"Poppins", fontSize:44, 
            fontWeight:700, 
            textTransform:"uppercase",
            ml:8, mt:20}}>
            Watching your {' '} <span style={textStyle} className='invest-span'>investment</span> <br/> grow is so fulfiling
            </Typography>   
            
            <Typography className='heading-1' variant='h1' sx={{color:"#220D4E", 
            fontFamily:"Poppins", fontSize:24, 
            fontWeight:300, 
            textTransform:"capitalize",
            lineHeight:"44px",
            ml:8, mt:5}}>
            Get Upto {' '} <span className='per-style' style={perStyle}> 9.10% P.A .* RETURNS WITH </span><br/> <span className='fd-style' style={fdStyle}>COPPORATED fD</span> 
            </Typography>
            <button type='button' className='button-1'>Invest Now</button>
              <div className='icon-container'>
              <svg xmlns="http://www.w3.org/2000/svg" width="112" height="16" viewBox="0 0 112 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#220D4E" fill-opacity="0.2"/>
                  <circle cx="40" cy="8" r="8" fill="#220D4E"/>
                  <circle cx="72" cy="8" r="8" fill="#220D4E" fill-opacity="0.2"/>
                  <circle cx="104" cy="8" r="8" fill="#220D4E" fill-opacity="0.2"/>
                </svg>
                </div>
                </div> 
                </div>
            </Box> 
    ) 
}

export default Invest;