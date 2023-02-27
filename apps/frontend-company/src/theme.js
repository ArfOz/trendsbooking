import { createTheme } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";





const theme = createTheme({
    palette:{
        primary:{
            main:"#F65936",
            main2:"#1b5e20",
        },
        secondary: {
            main: "#ffffff",
        },
        success:{
          main:grey[400],
        },
        info:{
          main:"#07232C",
        },
        green:{
          main:"#1b5e20",

        },
        third:{
          main:"#6F8D97",

        }
    },
      
    components:{
        MuiButton:{
          defaultProps:{
            size:"large",
            disableElevation: true,
            disableFocusRipple:true,
            disableRipple:true,
                    
          }
        },
        MuiFab:{
          defaultProps:{
            disableElevation: true,
            disableFocusRipple:true,
            disableRipple:true,
                    
          }
        }
      },
   
     
}

)

export default theme;