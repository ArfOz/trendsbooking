import React from "react";
import { Box, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { style} from "./style";

function MoreButtons() {
  return (
    <>
      <Box sx={{
       display:"flex"}}>
        <Button
          variant="contained"
          sx={style.more}
          endIcon={<ArrowRightAltIcon />}
          onClick={() => {
            alert("dahafazla ne olabilir. ");
          }}
        >
          Daha Fazla
        </Button>
      </Box>
    </>
  );
}

export default MoreButtons;
