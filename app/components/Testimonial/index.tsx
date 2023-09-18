/*import './index.css';
import {Box,Typography,Paper} from '@mui/material';
import { BsFillStarFill } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const Testimonial=()=>{
   /* return(
        <Box className="testimonial-container" sx={{width:"1440px",height:"500px",mt:15, textAlign:"center"}}>
            <Typography className='testimonial-heading' variant='h6' sx={{
                color:"#232073",
                textAlign:"center",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"600px",
                lineHeight:"31px"
            }}>Testimonials</Typography>
            <Typography className='testimonial-heading-1' variant='h4' sx={{
                color:"var(--N1, #0A1023)",
                textAlign:"center",
                fontFamily:"Poppins",
                fontSize:"32px",
                fontStyle:"normal",
                fontWeight:"700px",
                lineHeight:"31px",
                display:"felx",
                flexDirection:"column",
                width:"660px",
                height:"76px",
                flexShrink:0,
                ml:50,
                pt:2
            }}> WE ARE ONLY AS GOOD AS OUR CLIENT SAY WE ARE</Typography>
            <Box className='paper-box' sx={{display:"flex",justifyContent:"center"}}>
                <Paper className='paper-1' sx={{display:"flex", 
                flexDirection:"column",
                width:"320px",
                height:"204px",
                flexShrink:0,
                borderRadius:"3px",
                background:"#fff",
                mt:5,
                boxShadow:"0px 2px 25px 0px rgba(0, 0, 0, 0.21)" }} elevation={3}>
            <div className='stars-container'>           
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
            </div>     
            <Typography className='new-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                p:2
            }}>“ I am Very Happy With New Platform “</Typography>
            <Typography className='name-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                textAlign:"end"
            }}>Rajesh H.</Typography>
        </Paper>
        <Paper className='paper-2' sx={{display:"flex", 
                flexDirection:"column",
                width:"320px",
                height:"204px",
                flexShrink:0,
                borderRadius:"3px",
                background:"#fff",
                mt:5,
                ml:5,
                boxShadow:"0px 2px 25px 0px rgba(0, 0, 0, 0.21)" }} elevation={3}>
            <div className='stars-container'>           
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
            </div>     
            <Typography className='new-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                p:2
            }}>“ I am Very Happy With New Platform “</Typography>
            <Typography className='name-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                textAlign:"end"
            }}>Rajesh H.</Typography>
        </Paper>
        <Paper className='paper-3' sx={{display:"flex", 
                flexDirection:"column",
                width:"320px",
                height:"204px",
                flexShrink:0,
                borderRadius:"3px",
                background:"#fff",
                mt:5,
                ml:5,
                boxShadow:"0px 2px 25px 0px rgba(0, 0, 0, 0.21)" }} elevation={3}>
            <div className='stars-container'>           
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
                <BsFillStarFill className="stars"/>
            </div>     
            <Typography className='new-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                p:2
            }}>“ I am Very Happy With New Platform “</Typography>
            <Typography className='name-header' variant="body1" sx={{
                width:"280px",
                color:"#000",
                fontFamily:"Poppins",
                fontSize:"24px",
                fontStyle:"normal",
                fontWeight:"400px",
                lineHeight:"34px",
                textAlign:"end"
            }}>Rajesh H.</Typography>
        </Paper>
        </Box>
        <div className='pagination-container'>
        <BsChevronLeft className="left-arrow"/>
        <Typography sx={{width:"12px",height:"12px",borderRadius:"6px",background:"var(--N5, #BDC2D1)",mt:4,ml:2}}> </Typography>
        <Typography sx={{width:"12px",height:"12px",borderRadius:"6px",background:"var(--N5, #BDC2D1)",mt:4,ml:2}}> </Typography>
        <Typography sx={{width:"12px",height:"12px",borderRadius:"6px",background:"#00C2FF",mt:4,ml:2}}> </Typography>
        <BsChevronRight className="right-arrow"/>
        </div>
        </Box>
    ) 
    
};


export default Testimonial */


"use client";

import "./index.css";

import React from "react";
import { useMediaQuery } from "react-responsive";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  Rating,
  Stack,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface CardData {
  feedback: string;
  name: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

const Testimonial: React.FC<CardCarouselProps> = ({ cards }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const itemsPerPage = isDesktop ? 3 : isTablet ? 2 : 1;

  const [currentPage, setCurrentPage] = React.useState(0);
  const totalPages = Math.ceil(cards.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  //change this for styling
  const renderCards = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    console.log(cards.slice(startIndex, endIndex));

    return (
      <div className="crad-container">
        {cards.slice(startIndex, endIndex).map((card, index) => (
          <Card
            sx={{
              padding: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "320px",
              boxShadow: "0px 2px 25px 0px rgba(0, 0, 0, 0.21)",
            }}
          >
            <CardContent>
              <Rating
                name="size-medium"
                defaultValue={5}
                readOnly
                sx={{ marginBottom: "20px" }}
              />
              <Typography
                variant="body2"
                component="div"
                sx={{
                  color: "#000",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "34px",
                  marginBottom: "20px",
                }}
              >
                {card.feedback}
              </Typography>
              <Stack flexDirection={"row"} justifyContent={"flex-end"}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "34px",
                  }}
                >
                  {card.name}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Grid container spacing={3}>
        {renderCards()}
      </Grid>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className="carousel-btn"
        >
          <KeyboardArrowLeftIcon
            sx={{ width: "16px", height: "16px", color: "#fff" }}
          />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            style={{ margin: "0 4px", cursor: "pointer", color: "#00C2FF" }}
          >
            {index === currentPage ? "●" : "○"}
          </span>
        ))}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          className="carousel-btn"
        >
          <KeyboardArrowRightIcon
            sx={{ width: "16px", height: "16px", color: "#fff" }}
          />
        </button>{" "}
      </div>
    </Container>
  );
};

export default Testimonial;