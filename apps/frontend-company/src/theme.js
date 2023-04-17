import { createTheme } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";
import { green } from '@mui/material/colors';






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
        grey:{
          main:"#9A9A9A",
        },
        third:{
          main:"#6F8D97",

        },
        NavbarTop:{
          main:"#0C323E",
        }
    },

    components:{
        MuiButton:{
          defaultProps:{
            size:"large",
            //disableElevation: true,
            disableFocusRipple:true,
            disableRipple:true,

          }
        },
        MuiFab:{
          defaultProps:{
            //disableElevation: true,
            disableFocusRipple:true,
            disableRipple:true,

          }
        },
        MuiCheckbox: {
          styleOverrides: {
            root: {
              '--MuiCheckbox-size': '30px',
              color: grey[500],
              '&.Mui-checked': {
                color: '#F65936',
              },
            },
          },
        },
      },


}

)

export default theme;
