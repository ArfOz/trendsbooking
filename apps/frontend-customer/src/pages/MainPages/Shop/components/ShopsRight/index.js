import React from "react";
import { Box, Typography } from "@mui/material";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Styles } from "./style";

const ShopsRight = () => {
  return (
    <Box sx={Styles.boxcontainer}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={1}
      >
        <SwiperSlide>
          <Box sx={Styles.swiperbox}>
            <Box sx={Styles.commentbox}>
              <Typography sx={Styles.typographycomment1}>4.8</Typography>
              <Typography sx={Styles.typographycomment2}>220</Typography>
            </Box>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box sx={Styles.swiperbox1}>
            <Box sx={Styles.commentbox}>
              <Typography sx={Styles.typographycomment1}>4.8</Typography>
              <Typography sx={Styles.typographycomment2}>220</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={Styles.swiperbox}>
            <Box sx={Styles.commentbox}>
              <Typography sx={Styles.typographycomment1}>4.8</Typography>
              <Typography sx={Styles.typographycomment2}>220</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={Styles.swiperbox1}>
            <Box sx={Styles.commentbox}>
              <Typography sx={Styles.typographycomment1}>4.8</Typography>
              <Typography sx={Styles.typographycomment2}>220</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={Styles.swiperbox}>
            <Box sx={Styles.commentbox}>
              <Typography sx={Styles.typographycomment1}>4.8</Typography>
              <Typography sx={Styles.typographycomment2}>220</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={Styles.swiperbox1}>
            <Box sx={Styles.commentbox}>
              <Typography sx={Styles.typographycomment1}>4.8</Typography>
              <Typography sx={Styles.typographycomment2}>220</Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default ShopsRight;
