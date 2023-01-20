import React from 'react'
import { Box, Button, InputBase, Stack, Typography } from '@mui/material'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import {style} from './style'


const Comments = () => {
  return (
    // container
    <Box sx={style.servicescontainer}>
       
      {/* yorumlar */}
      <Box>
      <Typography
          sx={style.services}
        >
          Yorumlar
        </Typography>

      </Box>
      {/* yorumlar */}
     {/* Daha fazla */}
      <Button
      endIcon={<ArrowDropDownCircleIcon sx={{ color: "#F65936" }} />}
       sx={{
        width: "35%",
        height: "45px",
        display: "flex",
        alignItems: "center",
        border:"1px solid #F65936",
        borderRadius:"6px",
        color: "black",
        textTransform: "capitalize",
      }}>
        Puana Göre Filtrele          
 

         

      </Button>
      {/* Daha fazla */}
      
    </Box>
    // container

  )
}

export default Comments
