import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import { style } from "./style";

function Haircoloring() {
  return (
    <>
      <Box sx={style.spcontainer}>
        <Button
          variant="outlined"
          endIcon={<ExpandCircleDownOutlinedIcon />}
          sx={style.Otherbutton}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Saç Boyama
          </Box>
        </Button>
      </Box>
    </>
  );
}

export default Haircoloring;
