import React from "react";
import { Box } from "@mui/material";
import Barberschop from "./components/Barberschop";
import Appointment from "./components/Appointment";
import About from "./components/About";
import LeftEnd from "./components/LeftEnd";
import Services from "./components/Services";
import ServicesProvided from "./components/ServicesProvided";
import OtherServices from "./components/OtherServices";
import Haircoloring from "./components/Haircoloring";
import Photoalbum from "./components/Photoalbum";
import Comments from "./components/Comments";
import Reviews from "./components/Reviews";
import Comment from "./components/Comment";
import Starreviews from "./components/Starreviews";


function ShopsLeft() {
  return (
    <>
      <Box>
        <Barberschop />
        <Appointment />
        <About />
        <LeftEnd />
        <Services />
        <ServicesProvided />
        <OtherServices/>
        <Haircoloring/>
        <Haircoloring/>
        <Haircoloring/>
        <Photoalbum/>
        <Comments/>
        <Reviews/>
        <Comment/>
        <Starreviews/>
        <Starreviews/>
        <Starreviews/>
        <Starreviews/>
        <Starreviews/>
        <Starreviews/>
        <Starreviews/>
        <Starreviews/>
      </Box>
    </>
  );
}

export default ShopsLeft;
