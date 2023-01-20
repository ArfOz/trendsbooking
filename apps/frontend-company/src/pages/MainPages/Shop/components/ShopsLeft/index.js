import React from 'react';
import { Box } from '@mui/material';
import {
    About,
    Appointment,
    Barberschop,
    Comment,
    Comments,
    Haircoloring,
    LeftEnd,
    OtherServices,
    Photoalbum,
    Reviews,
    Services,
    ServicesProvided,
    Starreviews,
} from './components';

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
                <OtherServices />
                <Haircoloring />
                <Haircoloring />
                <Haircoloring />
                <Photoalbum />
                <Comments />
                <Reviews />
                <Comment />
                <Starreviews />
                <Starreviews />
                <Starreviews />
                <Starreviews />
                <Starreviews />
                <Starreviews />
                <Starreviews />
                <Starreviews />
            </Box>
        </>
    );
}

export default ShopsLeft;
