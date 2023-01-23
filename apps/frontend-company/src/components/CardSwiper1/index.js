// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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


import star from "../../assets/star.svg";

import { SwipperContainer } from "../../styles/cardsswipper";

const SwipperList= [
  {
    id:"0",
    name:"Seta Kuaför",
    city:"Ankara",
    district:"Çankaya",
    rate:"4.5",
    imageUrl:"https://img.freepik.com/free-photo/stylish-man-sitting-barbershop_1157-20487.jpg?w=1480&t=st=1667757551~exp=1667758151~hmac=a0a69244bdee8625d3229826848df4580bcc9d7ff5f90d54386a952c70e5311e"
  },
  {
    id:"1",
    name:"Karanfil Kuaför",
    city:"Ankara",
    district:"Keçiören",
    rate:"4.7",
    imageUrl:"https://img.freepik.com/free-photo/handsome-man-barber-shop-styling-hair_1303-20978.jpg?w=1480&t=st=1667757596~exp=1667758196~hmac=f3528bb50ac7818bbdf48cbf0ed68a159f570bd36dade65d51bd50bba3472ff6"
  },
  {
    id:"2",
    name:"Tesettür Nur Kuaför",
    city:"Ankara",
    district:"Yenimahalle",
    rate:"4.0",
    imageUrl:"https://img.freepik.com/free-photo/handsome-man-barbershop-shaving-beard_1303-26258.jpg?w=996&t=st=1667797387~exp=1667797987~hmac=8f084290f7ea0c1f0b53c3a94d9097a0002ac81f4c9f7432588f0f5ba502dfabs"
  },
  {
    id:"3",
    name:"Ewa Kuaför",
    city:"İstanbul",
    district:"Beşiktaş",
    rate:"4.2",
    imageUrl:"https://img.freepik.com/free-photo/latin-man-smiling-mockup-psd-cheerful-expression-closeup-portrai_53876-145665.jpg?w=900&t=st=1667797504~exp=1667798104~hmac=2e87c3ee288ad6baafdfb626f2e5f4c0583d14e7761d07af7e3f98abe90c3552"
  },
  {
    id:"4",
    name:"Essanella",
    city:"İzmir",
    district:"Bornova",
    rate:"4.4",
    imageUrl:"https://img.freepik.com/free-photo/charming-girl-denim-sundress-sweater-touches-her-red-hair-poses-wearing-glasses_197531-23296.jpg?w=996&t=st=1667798445~exp=1667799045~hmac=561c3b71a054c84ac5113c5d712b81bafb9067f782c812a27f8583cdfbe8835e"
  },
  {
    id:"5",
    name:"Hairport",
    city:"Adana",
    district:"Ceyhan",
    rate:"4.3",
    imageUrl:"https://img.freepik.com/free-photo/female-hairdresser-making-hairstyle-redhead-woman-beauty-salon_176420-4482.jpg?w=996&t=st=1667798473~exp=1667799073~hmac=9c428b2ae493e64dac224cde79d6e8912243dee1d51b7b346c6db0c9a2ec1aa3"
  },
  {
    id:"6",
    name:"Alp Kuaför",
    city:"Van",
    district:"Başkale",
    rate:"4.2",
    imageUrl:"https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1667798507~exp=1667799107~hmac=91c3de03899b4b7c7749e6efbbc3a53ebdd9cb5803dd60d10941331c3e1f2081"
  },
  {
    id:"7",
    name:"Kuaför  İnci",
    city:"Eskişehir",
    district:"Odunpazarı",
    rate:"4.1",
    imageUrl:"https://img.freepik.com/premium-photo/gorgeous-woman-having-her-hair-washed-by-hairdresser_130388-178.jpg?w=996"
  },
  {
    id:"8",
    name:"Kuaför Zeynep",
    city:"Ankara",
    district:"Etlik",
    rate:"4.9",
    imageUrl:"https://img.freepik.com/free-photo/hairdresser-does-hairstyle-her-client_1157-27203.jpg?w=996&t=st=1667798677~exp=1667799277~hmac=b2c078ec200a9a5d93906a14a7dbd77e357fb87c8fe7d1d155b0b57599a37f3e"
  },
  {
    id:"9",
    name:"Kuaför Trends",
    city:"Ankara",
    district:"Etimesgut",
    rate:"4.2",
    imageUrl:"https://img.freepik.com/free-photo/pretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-36184.jpg?w=996&t=st=1667798724~exp=1667799324~hmac=658542dcdff3edda236905b59ccdd6b0ad2ce147ce072837c0edffc2a4efc7df"
  },
  {
    id:"10",
    name:"Connect SPA",
    city:"Ankara",
    district:"Kazan",
    rate:"4.0",
    imageUrl:"https://img.freepik.com/free-photo/beautiful-little-girl-having-brush-her-chic-curly-blond-hair-wearing-white-t-shirt-is-smiling-pointing-something-with-her-painted-fingers-gray-background_639032-1597.jpg?w=740&t=st=1667798758~exp=1667799358~hmac=c7fd3f780431dfc614122aead25173369efe239bcb8f92ebc478de51f58cb100"
  },
  {
    id:"11",
    name:"Liva SPA",
    city:"Antalya",
    district:"Muratpaşa",
    rate:"4.8",
    imageUrl:"https://img.freepik.com/free-photo/cute-african-american-baby-girl-sunglasses_627829-3539.jpg?w=996&t=st=1667798790~exp=1667799390~hmac=c7aefc671604176c55c4d0e5df58fd27a6611848e813d30f73f316af2ca4345f"
  },
]

const CardsSwiper1 = () => {
  
  return (
    <>
      <SwipperContainer>
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
                width:"76px",
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
                    //padding:"5px 0px 0px 10px",

                  }}>
                  <img src={star} alt="star" />

                  </Box>
                  
              
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
      </SwipperContainer>

    </>
  );
};

export default CardsSwiper1;
