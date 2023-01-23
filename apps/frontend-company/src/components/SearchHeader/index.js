import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function SearchHeader() {
  return (
      <div>
        <div>
          <Typography component="h2" variant="h3" align="left" sx={{marginLeft:"20px",marginTop:"20px"}}>
            Ankara / Çankaya Berber Salonları
          </Typography>
        </div>
        <div>
          <Typography component="h3" variant="h4" align="left" sx={{marginLeft:"20px",marginTop:"20px"}}>
            Tavsiye Edilenler
          </Typography>
        </div>
      </div>
  );
}

export default SearchHeader;
