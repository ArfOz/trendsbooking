import React, { useState } from "react";
import { style } from "./style";
import { Box, Button, Divider, Typography } from "@mui/material";
import circlearrowdown from "../../../../../../assets/circlearrowdown.svg";

function Question3() {
    const [opens3, setOpens3] = useState(false);
  const handleOpens3 = () => {
    setOpens3(!opens3);
  };
  return (
    <>
    <Box sx={style.Boxforbutton}>
        <Button
          variant="text"
          onClick={handleOpens3}
          sx={style.questionButton}
        >
          <Box sx={style.Boxinbutton}>
            <Typography sx={style.TypographyinButton}>
              Trend Booking Güvenli mi
            </Typography>
            <img
              src={circlearrowdown}
              width="20px"
              height="20px"
              color="#F75936"
              alt=""
            />
          </Box>
        </Button>
      </Box>
      {opens3 ? (
        <Box
          sx={{
            width: "70%",
            margin: "auto",
          }}
        >
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            veniam laborum nam totam consectetur at cumque ex quis quam,
            distinctio corporis sed reiciendis reprehenderit voluptatum
            voluptas. Ab nesciunt nihil deserunt laudantium assumenda quidem,
            reprehenderit iure facilis omnis dolorem dolorum ut.
          </h4>
        </Box>
      ) : null}
      <Divider
        sx={{
          width: "60%",
          margin: "auto",
        }}
      />

    </>
  )
}

export default Question3