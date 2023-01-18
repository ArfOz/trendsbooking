import { Box } from "@mui/material";
import LocationImage from "../assets/LocationImage.jpg";

const SearchImage = () => {
  return (
    <Box
      sx={{
    
        background: `url(${LocationImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "811px",
        height: "626px",
        borderRadius: "20px",
        mt: 2 ,
        mr:4,
        
      }}
    >
    </Box>
  );
};

export default SearchImage;
