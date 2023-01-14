// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { style } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";


// import star from "../../../../../assets/star.svg";

import { Styles } from "./style";

const SwipperList= [
  {
    id:"0",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://www.onlinesorgula.gen.tr/wp-content/uploads/2020/03/kuafor-olmak.jpg"
  },
  {
    id:"1",
    name:"card2",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://nasilolunur.org/wp-content/uploads/2021/09/kuafor.jpg"
  },
  {
    id:"2",
    name:"card3",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://garajkayseri.com/wp-content/uploads/2020/06/belsin-kuaf%C3%B6r-karantina-1.jpg"
  },
  {
    id:"3",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id:"4",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://randomuser.me/api/portraits/women/42.jpg"
  },
  {
    id:"5",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
   imageUrl:"https://picsum.photos/200/300"
  },
  {
    id:"9",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://picsum.photos/200/300"
  },
  {
    id:"10",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://random.imagecdn.app/500/150"
  },
    
  {
    id:"11",
    name:"card1",
    city:"Antalya",
    district:"kaş",
    rate:"4.2",
    comments:"(220)",
    imageUrl:"https://random.imagecdn.app/500/150"
  },
]

const Swipper = () => {
  
  return (
    <>
      <Box sx={style.SwipperBoxContainer}>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          spaceBetween={20}
          // slidesPerView={4}

          breakpoints={{
            // when window width is >= 1200px
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
            // when window width is >= 900px
            900: {
              width: 900,
              slidesPerView: 3,
            },
            // when window width is >= 600px
            600: {
              width: 600,
              slidesPerView: 2,
            },
          }}
        >
          {
            SwipperList.map((item,index)=>{
              return(
                <SwiperSlide key={index}>

            <Card sx={{ maxWidth: 245, position:"relative" }}>
              <CardActionArea>
              <Box sx={{
                display:"flex",
                width:"120px",
                height:"30px",
                background:"#FFFFFF",
                boxShadow:"0px 0px 20px rgba(0, 0, 0, 0.08)",
                borderRadius:"30px",
                position: "absolute",
                top:"10px",
                right: "10px",
            
              }}>
                <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#07232C",
                      padding:"6px 0px 0px 15px",
                    }}
                  >
                    {item.rate} 
                  </Typography>
                  <Box sx={{
                    padding:"5px 0px 0px 10px",

                  }}>
                  <img src='' alt="yıldız" />
                  

                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#07232C",
                      padding:"6px 0px 0px 15px",
                    }}
                  >
                    {item.comments} 
                  </Typography>
                 
                  
              
              </Box>
                <CardMedia component="img" height="245" image={item.imageUrl} />

                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "500",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: "#07232C",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "16px",
                      color: "#9A9A9A",
                    }}
                  >
                   {item.district}/{item.city}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
              )
            }

            )
          }
          
          

          <br />
          <br />
        </Swiper>
      </Box>

      
    </>
  );
};

export default Swipper;
