import { Box, Divider, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { style } from "./style";

const Starreviews = () => {
  const [value, setValue] = useState(4);
  return (
    <>
      <Box sx={style.spcontainer}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* tarık ve yıldızlar */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "18%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "24px",
                color: "#07232C",
              }}
            >
              Tarık
            </Typography>
            <Rating
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              precision={0.5}
              size="small"
              readOnly
            />
          </Box>
          {/* tarık ve yıldızlar */}
          {/* tarih */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "18%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#9A9A9A",
              }}
            >
              Burak
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#9A9A9A",
              }}
            >
              5 Ağustos 2022
            </Typography>
          </Box>
          {/* tarih */}
        </Box>

        <Box>
          <Typography
            sx={{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "22px",
              color: "#000000",
            }}
          >
            I like barber more and more each day because it makes my life a lot
            easier. Thanks for the great service. You've saved our business! I
            was amazed at the quality of barber.
          </Typography>
        </Box>
        <Divider orientation="horizontal" flexItem sx={{ mt: 4 }} />
      </Box>
    </>
  );
};

export default Starreviews;
