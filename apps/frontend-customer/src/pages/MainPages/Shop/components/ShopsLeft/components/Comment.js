import { Box, Typography } from '@mui/material'
import { style } from "./style";


const Comment = () => {
  return (
    <Box sx={style.spcontainer}>
        <Typography
       sx={style.fotos}
      >
       6837 Yorum
      </Typography>
    </Box>
  )
}
export default Comment;

