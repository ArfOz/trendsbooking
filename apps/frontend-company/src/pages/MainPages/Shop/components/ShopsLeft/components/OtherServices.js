import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Haircut from "./Haircut";
import { style } from "./style";

const OtherServices = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box sx={style.spcontainer}>
        <Box>
          <Typography sx={style.sercicesprovided}>Diğer Hizmetler</Typography>
        </Box>

        <Button
          variant="outlined"
          endIcon={<ExpandCircleDownOutlinedIcon />}
          onClick={handleOpen}
          sx={style.Otherbutton}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Saç Traşı
          </Box>
        </Button>

        {open ? <Haircut /> : null}
      </Box>
    </>
  );
};

export default OtherServices;
