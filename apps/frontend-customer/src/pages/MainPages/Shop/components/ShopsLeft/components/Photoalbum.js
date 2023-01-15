import { Box, Button, Typography } from "@mui/material";
import Rectangle104 from "../../../../../../assets/Rectangle 104.png";
import Rectangle107 from "../../../../../../assets/Rectangle 107.png";
import Rectangle108 from "../../../../../../assets/Rectangle 108.png";
import { style } from "./style";
const Photoalbum = () => {
  return (
    <Box sx={style.spcontainer}>
      <Box>
        <Typography
          sx={style.sercicesprovided}
        >
          Galeri
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            my:4,
          }}
        >
          <Box>
            <img src={Rectangle104} alt="" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <img src={Rectangle107} alt="" />
            </Box>
            <Box>
              <img src={Rectangle108} alt="" />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <img src={Rectangle107} alt="" />
            </Box>
            <Box>
              <img src={Rectangle108} alt="" />
            </Box>
          </Box>
        </Box>
        <Button variant="outlined" sx={style.albumbutton}>
          Daha Fazla
        </Button>
      </Box>
    </Box>
  );
};

export default Photoalbum;
