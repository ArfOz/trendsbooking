import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

const StyledTab = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <Tabs
            value={selectedTab}
            onChange={handleChange}
            start
            sx={{
                '& .MuiTabs-indicator': {
                    bottom: 0,
                    top: 0,
                    width: '10px',
                    backgroundColor: '#6F8D97',

                    '&.Mui-selected': {
                        backgroundColor: '#FFFFFF',
                    },
                },
                '& .MuiTab-root': {
                    color: '#6F8D97',
                    '&.Mui-selected': {
                        color: '#FFFFFF',
                    },
                },

                width: '50%',
                ml: 4,
            }}
        >
            <Tab
                label="Gün"
                sx={{
                    textTransform: 'capitalize',
                }}
            />
            <Tab
                label="Hafta"
                sx={{
                    textTransform: 'capitalize',
                }}
            />
            <Tab
                label="Ay"
                sx={{
                    textTransform: 'capitalize',
                }}
            />
        </Tabs>
    );
};

export default StyledTab;
