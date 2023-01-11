import card1 from "../../../../../../assets/card1.svg";
import card2 from "../../../../../../assets/card2.svg";

export const style = {
  BoxContainer: {
    display: {
      xs:"none",
      sm: "none",
      md: "flex",
    },
    width: {
      xs: 0,
      sm: "90%",
      md: "90%",
      lg: "90%",
    },
    justifyContent: "center",
    height: "1034",
    margin: "auto",
  },
  BoxforCards: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "860px",
    m: 4,
  },
  Boxfor600px: {
    display: {
      xs: "flex",
      sm: "none",
      md: "none",
    },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  Boxfor900px: {
    display: {
      xs:"none",
      sm: "flex",
      md: "none",
    },
    flexDirection: "column",
    margin: "auto",
  },

  Box1: {
    width: {
      xs: "500px",
      sm: "260px",
      md: "250px",
      lg: "295px",
      xl: "395px",
    },
    height: "860px",
    background: `url(${card1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "20px",
  },
  Box2: {
    width: {
      xs: "500px",
      sm: "260px",
      md: "250px",
      lg: "295px",
      xl: "395px",
    },
    height: "416px",
    background: "#F2F8FF",
    borderRadius: "20px",
  },
  Box3: {
    width: {
      xs: "500px",
      sm: "260px",
      md: "250px",
      lg: "295px",
      xl: "395px",
    },
    height: "416px",
    background: "#F65936",
    borderRadius: "20px",
  },
  Box4: {
    width: {
      xs: "500px",
      sm: "260px",
      md: "250px",
      lg: "295px",
      xl: "395px",
    },
    height: "416px",
    background: `url(${card2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "20px",
    borderRadius: "20px",
  },
  Typography1: {
    fontWeight: "600",
    fontSize: "28px",
    lineHeight: "33px",
    textAlign: "center",
    paddingTop: "50px",
    color: "#07232C",
  },
  Typography2: {
    fontWeight: "500",
    fontSize: "28px",
    lineHeight: "33px",
    padding: "50px 25px 0px 25px",
    color: "#07232C",
  },
  Typography3: {
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "28px",
    padding: "10px 25px 0px 25px",
    color: "#6E6E73",
  },
};
