import { Box, Typography } from '@mui/material'
import Rectangle198 from "../../../../../../assets/Rectangle198.png"
import Rectangle199 from "../../../../../../assets/Rectangle199.png"
import Rectangle200 from "../../../../../../assets/Rectangle200.png"
import Rectangle201 from "../../../../../../assets/Rectangle201.png"
import Rectangle202 from "../../../../../../assets/Rectangle202.png"
import { style } from "./style";

const Reviews = () => {
  return (
 
    <Box sx={style.spcontainer}>
    <Box sx={{
        display:"flex",
        flexDirection: "column",
        justifyContent:"space-between",
      
    }}>
       
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            width: "40%",
            mb:4,
       
     

        }}>

        <Typography
        sx={style.reviewstyp}
      >
       Fotoğraflı Değerlendirmeler
      </Typography>
        <Typography
        sx={style.fotos}
      >
       67 Fotoğraf
      </Typography>

        </Box>
       
    <Box sx={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",

    }}>
        <img src={Rectangle198} alt="" />
        <img src={Rectangle199} alt="" />
        <img src={Rectangle200} alt="" />
        <img src={Rectangle201} alt="" />
        <img src={Rectangle202} alt="" />

    </Box>

    </Box>
    </Box>
    
  )
}

export default Reviews