import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Button } from '@mui/material';
import trendbiz from '../../../../assets/trendbiz.png';

const NavbarLeft = () => {
    return (
        <>
            <Button>
                <Link to="/">
                    <img src={trendbiz} alt="" />
                </Link>
            </Button>
        </>
    );
};

export default NavbarLeft;
