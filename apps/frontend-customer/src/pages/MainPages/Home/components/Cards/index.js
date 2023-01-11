import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { style } from "./style";

import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";

const Cards = () => {
  return (
    <>
      <Box sx={style.BoxContainer}>
        <Box
          sx={{
            m: 4,
          }}
        >
          <Card1/>
        </Box>
        <Box sx={style.BoxforCards}>
          <Card2 />
          <Card3 />
        </Box>
        <Box sx={style.BoxforCards}>
          <Card4 />
          <Card5 />
        </Box>
      </Box>
      {/* =============================900============ */}
      <Box sx={style.Boxfor900px}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              m: 4,
            }}
          >
            <Card1 />
          </Box>

          <Box sx={style.BoxforCards}>
            <Card2 />
            <Card3 />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              m: 4,
            }}
          >
            <Card4 />
          </Box>
          <Box
            sx={{
              m: 4,
            }}
          >
            <Card5 />
          </Box>
        </Box>
      </Box>
      {/* =============================900============ */}
      {/* ============================600============= */}
      <Box sx={style.Boxfor600px}>
        <Box sx={{ m: 3 }}>
          {" "}
          <Card1 />
        </Box>
        <Box sx={{ m: 3 }}>
          <Card2 />
        </Box>
        <Box sx={{ m: 3 }}>
          <Card3 />
        </Box>
        <Box sx={{ m: 3 }}>
          <Card4 />
        </Box>
        <Box sx={{ m: 3 }}>
          {" "}
          <Card5 />
        </Box>
      </Box>

      {/* ============================600============= */}
    </>
  );
};

export default Cards;
