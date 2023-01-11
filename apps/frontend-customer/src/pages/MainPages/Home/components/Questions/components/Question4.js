import React, { useState } from "react";
import { style } from "./style";
import { Box, Button, Divider, Typography } from "@mui/material";
import circlearrowdown from "../../../../../../assets/circlearrowdown.svg";




function Question4() {
    const [opens4, setOpens4] = useState(false);
  const handleOpens4 = () => {
    setOpens4(!opens4);
  };
  return (
    <>
    <Box sx={style.Boxforbutton}>
        <Button
          variant="text"
          onClick={handleOpens4}
          sx={style.questionButton}
        >
          <Box sx={style.Boxinbutton}>
            <Typography sx={style.TypographyinButton}>
              Müşteri Hizmetleri Nasıl Çalışır
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
      {opens4 ? (
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

export default Question4