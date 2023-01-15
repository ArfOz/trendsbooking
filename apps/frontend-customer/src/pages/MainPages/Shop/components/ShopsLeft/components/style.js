import harita from "../../../../../../assets/haritaimg.png";

export const style = {
  // ============Barberschop =============
  chopcontainer: {
    display: "flex",
    justifyContent: "space-between",
    width: {
      xs: "95%",
      sm: "90%",
      md: "55%",
      lg: "55%",
    },
    ml: {
      xs: 1,
      sm: 5,
      md: 5,
      lg: 5,
    },
  },

  typcontainer: {
    width: {
      xs: "100%",
      sm: "95%",
      md: "80%",
      lg: "65%",
    },
  },

  name: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: {
      xs: "30px",
      sm: "40px",
      md: "40px",
      lg: "40px",
    },
    lineHeight: "47px",
    color: "#07232C",
  },
  address: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#9A9A9A",
  },
  // ============Barberschop =============

  // ============Appointment =============

  appoinmentcontainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      sm: "row",
      md: "row",
      lg: "row",
    },
    justifyContent: {
      xs: "space-between",
      sm: "space-between",
      md: "space-between",
      lg: "space-between",
    },

    alignItems: {
      xs: "flex-start",
      sm: "center",
      md: "center",
      lg: "center",
    },
    width: {
      xs: "95%",
      sm: "90%",
      md: "55%",
      lg: "55%",
    },
    height: {
      xs: "17vh",
      sm: "8vh",
      md: "8vh",
      lg: "8vh",
    },

    ml: {
      xs: 1,
      sm: 5,
      md: 5,
      lg: 5,
    },
    mt: {
      xs: 2,
      sm: 5,
      md: 5,
      lg: 5,
    },
  },
  appoinmentbox: {
    display: "flex",
    justifyContent: "space-between",
    width: {
      xs: "53%",
      sm: "53%",
      md: "63%",
      lg: "53%",
    },
  },
  button1: {
    width: "195px",
    height: "44px",
    borderRadius: "6px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white",
    },
    border: "1px solid #07232C",
  },
  button2: {
    textTransform: "capitalize",
    width: "195px",
    height: "44px",
    background: "#F75936",
    borderRadius: "6px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "primary.main",
    },
    color: "#FFFFFF",
  },

  // ============Appointment =============

  // ============About =============
  aboutcontainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    width: {
      xs: "95%",
      sm: "90%",
      md: "55%",
      lg: "55%",
    },

    ml: {
      xs: 1,
      sm: 5,
      md: 5,
      lg: 5,
    },
    mt: {
      xs: 2,
      sm: 5,
      md: 5,
      lg: 5,
    },
  },
  about: {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#07232C",
    mb: 1,
  },
  typography: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "22px",
    color: "#07232C",
  },

  // ============About =============

  // ============LeftEnd =============
  boxcontainer: {
    display: {
      xs: "none",
      sm: "flex",
      md: "flex",
      lg: "flex",
    },
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: {
      xs: "95%",
      sm: "90%",
      md: "55%",
      lg: "55%",
    },

    ml: {
      xs: 1,
      sm: 5,
      md: 5,
      lg: 5,
    },
    mt: {
      xs: 2,
      sm: 5,
      md: 5,
      lg: 5,
    },
  },
  ourteam: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",

    width: {
      xs: "60%",
      sm: "65%",
      md: "65%",
      lg: "65%",
    },
  },
  navigation: {
    width: "100%",
    height: "250px",
    background: `url(${harita})`,
    borderRadius: "10px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  ourteambox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    mt: 3,
  },
  typography1: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "28px",
    color: "#07232C",
    mb: 2,
  },
  avatarbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  avatarname: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "18px",
    color: "#07232C",
  },
  avatarstack: {
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // ============LeftEnd =============
  // ============table =============
  tablebox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#FAFAFA",
    mr: 3,
    width: {
      xs: "55%",
      sm: "30%",
      md: "30%",
      lg: "30%",
    },
    height: "400px",
  },
  // ============table =============
  // ============Services =============
  servicescontainer: {
    display: {
      xs: "none",
      sm: "none",
      md: "flex",
      lg: "flex",
    },
    justifyContent: "space-between",
    alignItems: "center",
    width: {
      xs: "95%",
      sm: "90%",
      md: "55%",
      lg: "55%",
    },

    ml: {
      xs: 1,
      sm: 5,
      md: 5,
      lg: 5,
    },
    mt: {
      xs: 2,
      sm: 5,
      md: 5,
      lg: 5,
    },
  },
  services: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "23px",
    color: "#07232C",
  },
  searchbox: {
    width: "35%",
    height: "45px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "1px solid #9A9A9A",
    borderRadius: "40px",
  },
  // ============Services =============
  // ============ServicesProvided =============
  spcontainer: {
    width: {
      xs: "95%",
      sm: "90%",
      md: "55%",
      lg: "55%",
    },
    ml: {
      xs: 1,
      sm: 5,
      md: 5,
      lg: 5,
    },
    mt: {
      xs: 2,
      sm: 5,
      md: 5,
      lg: 5,
    },
  },
  spbox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 3,
    mt: 3,
    width: "100%",
  },
  sercicesprovided: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "23px",
    color: "#07232C",
  },
  haircut: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "22px",
    color: "#07232C",
  },
  buttonbox: {
    width: {
      xs: "35%",
      sm: "35%",
      md: "35%",
      lg: "35%",
    },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "22px",
    color: "#07232C",
  },
  btnappointment: {
    textTransform: "capitalize",
    width: "75%",
    height: "34px",
    background: "#F75936",
    borderRadius: "6px",

    color: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "primary.main",
    },
  },
  // ============ServicesProvided =============
  // ============Otherservices =============
  Otherbutton:{
    my: 3,

    textTransform: "capitalize",
    width: "100%",
    height: "50px",

    borderRadius: "6px",
    border: "1px solid #F75936",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#F75936",
      borderColor: "#F75936",
      boxShadow: "none",
      color: "#ffff",
    },

  },
  // ============Otherservices =============
  // ============Photoalbum =============
albumbutton:{
  textTransform: "capitalize",
          width: "100%",
          height: "50px",
          color:"black",      
          borderRadius: "6px",
          border: "1px solid black",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#F75936",
            borderColor: "black",
            boxShadow: "none",
            color: "white",
          },
},

  // ============Photoalbum =============
  // ============Reviews =============
  reviewstyp:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.3px",
    color: "#07232C",
  },
  fotos:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.3px",
    color: "#9A9A9A",
  },
  // ============Reviews =============

};
