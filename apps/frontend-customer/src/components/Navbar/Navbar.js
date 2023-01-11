import { Box } from "@mui/material";
import React, { useState,useEffect } from "react";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";

function Navbar() {
  const [show, setShow] = useState(<Navbar1/>);
  const listenScrollEvent = () => {
    window.scrollY >= 695 ? setShow(<Navbar2/>) : setShow(<Navbar1/>);
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Box>{show}</Box>
    </>
  );
}

export default Navbar;
