
import React from 'react';
import { Box } from '@mui/material';
import ApRow21 from './ApRow21';
import ApRow22 from './ApRow22';
import ApRow23 from './ApRow23';
import ApRow24 from './ApRow24';

function ApRow2() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '95%',
                   
                }}
            >
                <ApRow21 />
                <ApRow22 />
                <ApRow23/>
                <ApRow24/>
            </Box>
        </>
    );
}

export default ApRow2;
